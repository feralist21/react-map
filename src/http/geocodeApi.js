import { client } from "@/http/client.js";

class Geocode {
    getAddress(address) {
        return client.get(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${import.meta.env.VITE_YANDEX_API_KEY}&format=json&results=5&geocode=${address}`,
        );
    }
}

const geocode = new Geocode();

export { geocode };
