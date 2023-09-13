import React from 'react';
import styled from 'styled-components/native';

const QuestionDescriptionContainer = styled.View`
    padding:16px;
    display: flex;
    gap: 6px;
`
const QuestionDescriptionTitle = styled.Text`
color: #FFF;
font-family: SF Pro Rounded;
font-size: 15px;
font-style: normal;
font-weight: 600;
`
const QuestionDescriptionText = styled.Text`
    color: #FFF;
font-family: SF Pro Rounded;
font-size: 13px;
font-style: normal;
font-weight: 400;
`

const QuestionDescriptionSmall = styled.Text`
color: #FFF;
font-family: SF Pro Rounded;
font-size: 13px;
font-style: normal;
font-weight: 700;
`

interface QuestionDescriptionProps {
    title: string;
    text: string;
    small: string;
}

const QuestionDescription: React.FC<QuestionDescriptionProps> = ({ small, text, title }) => {
    return (
        <QuestionDescriptionContainer>
            <QuestionDescriptionTitle>{title}</QuestionDescriptionTitle>
            <QuestionDescriptionText>{text}
                <QuestionDescriptionSmall>{small}</QuestionDescriptionSmall>
            </QuestionDescriptionText>
        </QuestionDescriptionContainer>
    )
}

export default QuestionDescription;