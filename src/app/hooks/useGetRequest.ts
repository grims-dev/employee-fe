import useSWR from 'swr';
import { getRequest } from '../utils/fetch-helpers';

export const useGetRequest = <T>(endpointUrl: string) => {
    const { data, error } = useSWR<T>(endpointUrl, getRequest);

    return {
        data,
        isError: !!error,
        isLoading: !error && !data,
    };
}
