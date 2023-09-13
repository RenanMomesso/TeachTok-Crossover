import React from 'react';
import IconText from '@components/IconText/IconText';
import { ButtonPlusIcon, ChannelIcon, CommentsIcon, HeartLikeIcon, SavePostIcon, ShareIcon } from '@components/Icons/Icon';
import { RightButtonsPostContainer } from './RightButtonPost.styles';
import { Image } from 'react-native'

interface RightButtonsPostProps {
    avatar?: string;
}
const RightButtonsPost: React.FC<RightButtonsPostProps> = ({ avatar }) => {

    return (
        <RightButtonsPostContainer>
            <IconText icon={<Image source={{ uri: avatar }} style={{ height: 50, width: 50 }} />} text="87" textIcon={<ButtonPlusIcon />} />
            <IconText icon={<HeartLikeIcon />} text="87" />
            <IconText icon={<CommentsIcon />} text="2" />
            <IconText icon={<SavePostIcon />} text="203" />
            <IconText icon={<ShareIcon />} text="17" />
        </RightButtonsPostContainer>
    )
}

export default RightButtonsPost;