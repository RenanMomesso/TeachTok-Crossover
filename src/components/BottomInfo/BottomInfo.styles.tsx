import styled from "styled-components/native";
import { PlayIcon, RightArrowIcon as RightArrowIconSvg } from '@components/Icons/Icon';

export const BottomInfoContainer = styled.View`
background: #161616;
height: 36px;
padding: 10px 16px;
flex-direction: row;
align-items: center;
gap: 4px;
`

export const BottomInfoText = styled.Text`
    color: #FFF;
`

export const RightArrowIcon = styled(RightArrowIconSvg)`
    margin-left: auto;
`
