import React, { useState, useEffect } from 'react';
import { ButtonQuestionContainer, ButtonQuestionText, ThumbImage } from './ButtonQuestion.styles';
import TextStroke from '@components/OutlineText/OutlineText';
import { Animated } from 'react-native'

interface ButtonQuestionProps {
    questionText: string;
    handleClickButton: (optionID: string) => void
    buttonDisabled?: boolean
    buttonQuestionID: string
    isCorrect?: boolean
    isSelected?: boolean
}
const ButtonQuestion: React.FC<ButtonQuestionProps> = ({ questionText, handleClickButton, buttonDisabled, buttonQuestionID, isCorrect, isSelected }) => {

    const positionAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        if (buttonDisabled) {
            Animated.timing(positionAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }).start();
        }
    }, [buttonDisabled]);

    const widthInterpolation = positionAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%']
    });

    const handlePressQuestion = (questionID: string) => {
        handleClickButton(questionID)
    }

    const shouldThumbBeVisible = () => {
        if (buttonDisabled && isCorrect) return 'rgba(40, 177, 143, 0.70)'
        if (buttonDisabled && !isCorrect && isSelected) return 'rgba(220, 95, 95, 0.70)'
        return 'transparent'
    }

    return (
        <>
            <ButtonQuestionContainer
                onPress={() => handlePressQuestion(buttonQuestionID)}
                disabled={buttonDisabled}>
                <Animated.View style={{ backgroundColor: shouldThumbBeVisible(), borderRadius: 8, width: widthInterpolation, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                </Animated.View>
                <TextStroke color='#000' stroke={1}>
                    <ButtonQuestionText>{questionText}</ButtonQuestionText>
                </TextStroke>
                {buttonDisabled && (isCorrect || isSelected) && <ThumbImage style={{
                    transform: [
                        { scaleX: -1 },
                        { scaleY: isCorrect ? 1 : -1 },
                    ],
                    top: isCorrect ? 0 : 8,
                }} source={isCorrect ? require('@assets/images/gifthumbs.gif') : require('@assets/images/gifthumbsdown.gif')} />}
            </ButtonQuestionContainer>
        </>
    )
}

export default ButtonQuestion;

