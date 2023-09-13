import React from 'react';
import { IconBottom, IconTextContainer, TextIcon } from './IconText.styles'

interface IconTextProps {
    text: string | number | null | React.ReactNode
    icon: any;
    textPosition?: 'bottom' | 'right' | 'reverse'
    textIcon?: any;
    textSize?: number;
}


const IconText: React.FC<IconTextProps> = ({ icon, text, textPosition = 'bottom', textIcon, textSize = 12 }) => {
    return (
        <IconTextContainer textPosition={textPosition}>
            {icon}
            {!!text && !textIcon && <TextIcon style={{ color: "white" }} textSize={textSize}>{text}</TextIcon>}
            {!!text && !!textIcon && <IconBottom>{textIcon}</IconBottom>}
        </IconTextContainer>
    )
}

export default IconText;