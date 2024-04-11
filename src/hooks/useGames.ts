import useData from "./useData";

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



const useGames = () => useData<Game>('/games');

export default useGames;
