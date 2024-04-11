import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then(res => {
                setData(res.data.results);
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
    }, [endpoint]); // Dependency on endpoint to rerun effect when it changes

    return { data, error, isLoading };
}

export default useData;
