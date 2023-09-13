import styled from 'styled-components/native';
import { Image } from 'react-native'

interface ButtonQuestionContainerProps {
    backgroundColor?: string
}

export const ButtonQuestionContainer = styled.TouchableOpacity<ButtonQuestionContainerProps>`
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.50);
    padding-right: 0px;
    padding-vertical:12px;
    width: 100%;
    min-height: 52px;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    justify-content: space-between;
`

export const ButtonQuestionText = styled.Text`
text-shadow: 1px 1.5px 2px rgba(0, 0, 0, 0.45);
  font-family: 'SF_PRO_ROUNDED_TWO';
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  color: #FFF;
  margin-left: 12px;
`

export const ThumbImage = styled(Image)`
    width: 56px;
    height: 56px;
    position: absolute;
    right: 0;
    bottom: 8px;

`
export const ButtonsContainer = styled.View`
    display: flex;
    gap: 8px;
    flex-direction: column;
    margin-bottom: 24px;
    margin-left:16px;
    margin-right:58px;
    width: ${({ theme }) => theme.SCREEN_WIDTH * 0.75}px;
    
`