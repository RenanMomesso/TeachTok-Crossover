import React, { useRef, useEffect } from 'react';
import IconText from '@components/IconText/IconText';
import { HeaderContainer } from './Header.styles'
import { ClockIcon, SearchIcon, UnderlineIcon } from '@components/Icons/Icon';
import { Timer } from 'react-native-element-timer';
import { formatElapsedTime } from '@utils/elapsedTime';
import moment from 'moment'


interface HeaderProps {
    elapsedTime: number
}

const Header: React.FC<HeaderProps> = ({ elapsedTime }) => {
    const formattedTime = elapsedTime ? formatElapsedTime(elapsedTime) : null;
    const timerRef = useRef<any>(null);

    useEffect(() => {
        timerRef.current?.start();
        return () => {
            timerRef.current?.stop();
        }
    }, []);
    return (
        <HeaderContainer>
            <IconText
                icon={<ClockIcon fillOpacity={0.4} />} textPosition='right' textSize={14} text={formattedTime ? formattedTime : <Timer
                    ref={timerRef}
                    autoStart
                    textStyle={{ color: 'rgba(255, 255, 255, 0.60)', fontSize: 14 }}
                />} />
            <IconText icon={<UnderlineIcon />} text="For you" textPosition='reverse' />
            <IconText icon={<SearchIcon />} text="" />
        </HeaderContainer>
    )
}

export default Header;