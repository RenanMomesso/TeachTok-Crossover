import React, { useState } from 'react';
import { ButtonsContainer } from './ButtonQuestion.styles';
import ButtonQuestion from './ButtonQuestion';
import { revealCorrectAnswer } from 'src/services/question.services';

interface ButtonsQuestionContainerProps {
    options?: any[]
    questionID: string
    handleUpdateTimer: (id: string, endTime: number) => void
    handleNewItem: () => void
}

const ButtonsQuestionContainer: React.FC<ButtonsQuestionContainerProps> = ({ options, questionID, handleNewItem, handleUpdateTimer }) => {

    const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false)
    const [correctAnswer, setCorrectAnswer] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState<string>('')

    const fetchCorrectAnswer = async (id: string) => {
        try {
            const response = await revealCorrectAnswer(id);
            return response;
        } catch (error) {
            console.error('Error fetching correct answer:', error);
        }
    }

    const updateUIAfterAnswer = (response: any) => {
        setCorrectAnswer(response);
        setShowCorrectAnswer(true);
    }

    const handleClickButton = async (id: string) => {
        const endTime = Date.now();
        handleUpdateTimer(questionID, endTime);
        setSelectedOption(id);

        const correctAnswer = await fetchCorrectAnswer(questionID);
        updateUIAfterAnswer(correctAnswer);
        handleNewItem();
    }


    return (
        <ButtonsContainer>
            {options?.map((option: any) => <ButtonQuestion
                key={option.id}
                questionText={option.answer}
                handleClickButton={handleClickButton}
                buttonQuestionID={option.id}
                buttonDisabled={showCorrectAnswer}
                isCorrect={option.id === correctAnswer}
                isSelected={(option.id === selectedOption)}
            />)}
        </ButtonsContainer>
    )
}

export default ButtonsQuestionContainer;