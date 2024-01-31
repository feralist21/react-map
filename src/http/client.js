class HttpClient {
    get(path) {
        return fetch(path)
            .then((response) => response)
            .then((data) => data.json());
    }
}

const client = new HttpClient();

export { client };
