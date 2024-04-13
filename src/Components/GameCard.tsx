import React from 'react';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'; // Removed unused Text import
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList'; // Corrected import name
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card >
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} /> {/* Added alt attribute for accessibility */}
            <CardBody>

                <HStack justifyContent='space-between  '
                    marginBottom={3}
                    margin={2} >
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} /> </HStack>
                <Heading fontSize='2xl'>{game.name}
                    <Emoji rating={game.rating_top} />
                </Heading>

            </CardBody>
        </Card>
    );
};

export default GameCard;
