import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import { MapWidget } from "@components/YaMap/map-widget.js";

function YaMap({ className, placemarks }) {
    const containerMapRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current === null) {
            mapRef.current = new MapWidget(containerMapRef.current);
        }

        const map = mapRef.current;

        if (placemarks.length === 0) {
            map.cleanGeoObject();
            return;
        }

        map.cleanGeoObject();
        map.createGeoObject(map.createPlacemarks(placemarks));
    }, [placemarks]);

    return <div ref={containerMapRef} className={clsx("h-[600px]", className)}></div>;
}

export default YaMap;
