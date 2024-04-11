import React from 'react';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'; // Removed unused Text import
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList'; // Corrected import name
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card >
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} /> {/* Added alt attribute for accessibility */}
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'
                    margin={2} >
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} /> </HStack>

            </CardBody>
        </Card>
    );
};

export default GameCard;
