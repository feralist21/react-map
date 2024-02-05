import { clsx } from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

function YaMap({ className, placemarks }) {
    const [map, setMap] = useState();
    const [localMap, setLocalMap] = useState();
    const ymap = useRef();

    useEffect(() => {
        const script = document.createElement("script");
        document.body.appendChild(script);
        script.type = "text/javascript";
        script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${import.meta.env.VITE_YANDEX_API_KEY}`;

        script.onload = async () => {
            const ymaps = window.ymaps;
            await ymaps.ready();

            setMap(ymaps);
        };
    }, []);

    useEffect(() => {
        if (map) {
            const localMap = new map.Map(ymap.current, {
                center: [55.76, 37.64],
                zoom: 7,
            });

            setLocalMap(localMap);
        }
    }, [map]);

    return <div ref={ymap} className={clsx("h-[600px]", className)}></div>;
}

export default YaMap;
