const apiKeys = [import.meta.env.VITE_API_KEY_1, import.meta.env.VITE_API_KEY_2, import.meta.env.VITE_API_KEY_3];
let currentKeyIndex = 0;

function getNextApiKey() {
    const apiKey = apiKeys[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
    return apiKey;
}

export default getNextApiKey