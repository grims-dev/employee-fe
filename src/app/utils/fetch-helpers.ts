export const getRequest = async (endpointUrl: string): Promise<any> => {
    return fetch(endpointUrl, { method: 'GET' })
        .then(response => response.json())
        .catch(error => console.error('Error during GET request:', error))
        .then((json) => json);
}
