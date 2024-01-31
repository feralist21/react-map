import { useEffect, useState } from "react";
import { geocode } from "@/http/geocodeApi.js";

// eslint-disable-next-line react/prop-types
const SearchResults = ({ query }) => {
    const [geoData, setGeoData] = useState('');

    useEffect(() => {
        async function geocoderGet() {
            try {
                const geoData = await geocode.getAddress(query);
                if (geoData.statusCode === 403) {
                    setGeoData([]);
                    return;
                }
                setGeoData(geoData);
            } catch (e) {
                console.log(e);
            }
        }

        if (query !== "") {
            geocoderGet();
        }
    }, [query]);

    if (geoData.length === 0) {
        return <p>No matches for {query}</p>;
    }

    return (
        <div className="absolute top-full mt-2 left-0 w-full h-auto bg-slate-500 z-10 text-white p-3 flex flex-col gap-y-4 shadow-xl">
            {geoData.map((address) => (
                <div key={address.id}>
                    {address.metaDataProperty.GeocoderMetaData.Address.formatted}
                </div>
            ))}
        </div>
    );
};

export { SearchResults };
