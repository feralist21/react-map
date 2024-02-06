import { clsx } from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

function YaMap({ className, placemarks }) {
    const [localMap, setLocalMap] = useState();
    const ymap = useRef();

    useEffect(() => {
        console.log('Еффект создания карты');
        let map = "";

        async function createMap() {
            const ymaps = window.ymaps;
            await ymaps.ready();

            map = new ymaps.Map(ymap.current, {
                center: [55.76, 37.64],
                zoom: 7,
            });
            setLocalMap(map);
        }

        createMap();

        return () => {
            setTimeout(() => {
                map.destroy(); // TODO Исправить этот костыль
            }, 2000);
        };
    }, []);

    useEffect(() => {
        console.log('Еффект создания меток');
        if (placemarks.length === 0) {
            return;
        }

        localMap.geoObjects.removeAll();

        const ymapPlacemarks = placemarks.map((mark) => {
            return new ymaps.Placemark([mark[1], mark[0]], {
                iconImageSize: [36, 36],
                iconImageOffset: [-18, -36],
            });
        });

        const myGeoObjects = new ymaps.GeoObjectCollection();

        ymapPlacemarks.forEach((element) => {
            myGeoObjects.add(element);
        });
        localMap.geoObjects.add(myGeoObjects);
        localMap.setBounds(myGeoObjects.getBounds(), {
            checkZoomRange: true,
        });
        localMap.setBounds(myGeoObjects.getBounds(), { checkZoomRange: true }).then(() => {
            if (localMap.getZoom() > 12) localMap.setZoom(12);
        });

        console.log(ymapPlacemarks, "marks");
    }, [placemarks, localMap]);

    return <div ref={ymap} className={clsx("h-[600px]", className)}></div>;
}

export default YaMap;
