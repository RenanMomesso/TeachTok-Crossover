import React from 'react';
import { LoadingIcon } from '@components/Loading/Loading';
import HomeScreenItem from './HomeScreenItem';
import { ScrollView } from 'react-native';
import useHomeScreen from './useHomeScreen';

const HomeScreen = () => {
    const {
        loading,
        contentList,
        scrollViewRef,
        handleNewItem,
        handleUpdateTimer,
        handleScroll
    } = useHomeScreen();

    return (
        <>
            {loading && <LoadingIcon color="#FFF" size={"large"} />}
            <ScrollView
                ref={scrollViewRef}
                pagingEnabled
                onScroll={handleScroll}
                scrollEventThrottle={16}>
                {contentList.map((item, index) => <HomeScreenItem
                    key={item.id + index}
                    content={item}
                    handleNewItem={handleNewItem}
                    handleUpdateTimer={handleUpdateTimer} />)}
            </ScrollView>
        </>
    )
}

export default HomeScreen;
