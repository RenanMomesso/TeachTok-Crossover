import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
    flex: 1;
    display: flex;
    height:${({ theme }) => theme.SCREEN_HEIGHT - 50}px;
`

export const OverLayColor = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const ContainerFromBottom = styled.View`
    flex: 1;
    display: flex;
    justify-content: flex-end;

`

