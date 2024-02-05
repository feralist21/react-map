import { clsx } from "clsx";
import {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapComponentsProvider,
    YMapDefaultMarker,
} from "ymap3-components";

// eslint-disable-next-line react/prop-types
function YaMap({ className, placemarks }) {
    console.log('Рендерюсь!!!');
    return (
        <div className={clsx("bg-slate-400 color-white h-[600px]", className)}>
            <YMapComponentsProvider apiKey={import.meta.env.VITE_YANDEX_API_KEY}>
                <YMap location={{ center: [25.229762, 55.289311], zoom: 9 }}>
                    <YMapDefaultSchemeLayer />
                    <YMapDefaultFeaturesLayer />
                    {/* eslint-disable-next-line react/prop-types */}
                    {placemarks.length > 0 && placemarks.map((placemark, index) => (
                        <YMapDefaultMarker key={index}
                            coordinates={placemark}
                        />
                    ))}
                </YMap>
            </YMapComponentsProvider>
        </div>
    );
}

export default YaMap;
