// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const triggerClientEvent = (endpoint: string, ...args: any) => {
    if ('alt' in window) {
        alt.emit(endpoint, ...args);
    }
};
