import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Platform {

    id: string;
    name: string;
    slug: string;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platfqorms: { platform: Platform }[];
    metacritic: number;
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => {
            controller.abort();
        };
    }, []); // Empty dependency array to run effect only once

    return { games, error };
};

export default useGames;