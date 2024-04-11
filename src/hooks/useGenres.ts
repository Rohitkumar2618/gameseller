import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch((err: AxiosError) => {
                if (err.name === 'AbortError') return; // Check for abort error
                setError(err.message);
                setLoading(false);
            });

        return () => {
            controller.abort();
        };
    }, []); // Empty dependency array to run effect only once

    return { genres, error, isLoading };
}

export default useGenres;
