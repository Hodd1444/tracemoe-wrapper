const axios = require('axios');

class TraceMoe {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.trace.moe';
    }

    async search(imageUrl) {
        try {
            const response = await axios.get(`${this.baseUrl}/search`, {
                params: {
                    url: imageUrl
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to search image: ${error.message}`);
        }
    }

    async me() {
        try {
            const response = await axios.get(`${this.baseUrl}/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to get user info: ${error.message}`);
        }
    }
}

module.exports = TraceMoe;
