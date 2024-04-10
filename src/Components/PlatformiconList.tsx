import React from 'react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: { [key: string]: React.ComponentType<any> } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    };

    return (
        <HStack marginY={2}>
            {platforms.map((platform) => {
                const IconComponent = iconMap[platform.slug];
                return IconComponent ? <Icon as={IconComponent} key={platform.slug} color='gray.500' /> : null;
            })}
        </HStack>
    );
};

export default PlatformIconList;
