import React from 'react';
import { Container, ContainerFromBottom, OverLayColor } from './HomeScreen.styles';
import Header from '@components/Header/Header';
import QuestionText from '@components/QuestionText/QuestionText';
import ButtonsQuestionContainer from '@components/ButtonQuestion/ButtonQuestionContainer';
import RightButtonsPost from '@components/RightButtonsPost/RightButtonsPost';
import QuestionDescription from '@components/QuestionDescription/QuestionDescription';
import BottomInfo from '@components/BottomInfo/BottomInfo';


interface HomeScreenItemProps {
    content: any
    handleNewItem: () => void
    handleUpdateTimer: (id: string, endTime: number) => void
}
const HomeScreenItem: React.FC<HomeScreenItemProps> = ({ content, handleNewItem, handleUpdateTimer }) => {

    return (
        <Container source={{ uri: content.image }}>
            <OverLayColor />
            <Header elapsedTime={content?.elapsed} />
            <QuestionText text={content.question} />
            <ContainerFromBottom>
                <ButtonsQuestionContainer
                    handleUpdateTimer={handleUpdateTimer}
                    handleNewItem={handleNewItem}
                    options={content.options}
                    questionID={content.id}
                />
                <RightButtonsPost avatar={content?.user?.avatar} />
                <QuestionDescription title={content?.user?.name} text={content?.description} small={content?.small || ''} />
                <BottomInfo text={content.playlist} />
            </ContainerFromBottom>
        </Container>
    )
}

export default HomeScreenItem;
