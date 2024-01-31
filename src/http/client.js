class HttpClient {
    async get(path) {
        return fetch(path)
            .then((response) => response)
            .then((data) => data.json())
            .catch((error) => {
                throw error;
            });
    }
}

const client = new HttpClient();

export { client };
