import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
export const HeaderContainer = styled.View`
    padding: 4px 16px;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${StatusBar.currentHeight || 30}px;
    height: 50px;
    
`