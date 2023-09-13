import React from 'react';
import { PlayIcon } from '@components/Icons/Icon';
import { BottomInfoContainer, BottomInfoText, RightArrowIcon } from './BottomInfo.styles'

interface BottomInfoProps {
    text: string;
}
const BottomInfo: React.FC<BottomInfoProps> = ({ text }) => {
    return (
        <BottomInfoContainer>
            <PlayIcon />
            <BottomInfoText>
                Playlist • Unit 5: {text}
            </BottomInfoText>
            <RightArrowIcon />
        </BottomInfoContainer>
    )
}

export default BottomInfo;