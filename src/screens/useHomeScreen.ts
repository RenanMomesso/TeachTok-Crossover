import { useEffect, useState, useCallback, useRef } from 'react';
import { getQuestion } from 'src/services/question.services';
import theme from 'src/theme/theme';
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from 'react-native';

const useHomeScreen = () => {
  const itemHeight = theme.SCREEN_HEIGHT - 50;
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [contentList, setContentList] = useState<any[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleUpdateTimer = useCallback((id: string, endTime: number) => {
    setContentList(previousList =>
      previousList.map(item => {
        if (item.id === id) {
          const elapsed = endTime - item.startTime;
          return {
            ...item,
            endTime,
            elapsed,
          };
        }
        return item;
      }),
    );
  }, []);

  const scrollToNextItem = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: (currentItemIndex + 1) * itemHeight,
        animated: true,
      });
    }
  };

  const handleNewItem = async () => {
    setLoading(true);
    const response = await getQuestion();
    setContentList(previousList => [
      ...previousList,
      {
        ...response,
        startTime: Date.now(),
        endTime: null,
        elapsed: null,
      },
    ]);
    setLoading(false);
    setTimeout(() => {
      scrollToNextItem();
    }, 2000);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const calculatedIndex = Math.round(yOffset / itemHeight);
    if (calculatedIndex !== currentItemIndex) {
      setCurrentItemIndex(calculatedIndex);
    }
  };

  useEffect(() => {
    handleNewItem();
  }, []);

  return {
    currentItemIndex,
    loading,
    contentList,
    scrollViewRef,
    handleUpdateTimer,
    handleNewItem,
    handleScroll,
  };
};

export default useHomeScreen;
