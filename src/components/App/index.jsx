import { useCallback, useState } from "react";
import YaMap from "@components/YaMap/index.jsx";
import AddressList from "@components/AddressList/index.jsx";
import { Input } from "@components/Input/index.jsx";
import { Dropdown } from "@components/Dropdown/index.jsx";
import { geocode } from "@/http/geocodeApi.js";
import { useDebounce } from "@/hooks/useDebounse.js";

function App() {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const getObjectData = useCallback(async (query) => {
        if (query === "") {
            return;
        }

        try {
            const geoData = await geocode.getAddress(query);
            if (geoData.statusCode === 403) {
                setSuggestions([]);
                return;
            }
            const cleanGeoData = geoData.response.GeoObjectCollection.featureMember.map((item) => {
                return {
                    position: item.GeoObject.Point.pos,
                    name: item.GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted,
                    id: Math.random(),
                };
            });

            setSuggestions(cleanGeoData);
        } catch (e) {
            console.log(e);
        }
    }, []);

    const handleSearch = useDebounce(getObjectData, 300);

    const handleChange = (event) => {
        setValue(event.target.value);

        handleSearch(event.target.value);
    };

    return (
        <>
            <div className="pt-32 flex flex-col gap-y-10 w-[1200px] mx-auto">
                <h1 className="text-5xl text-center">React Map</h1>
                <div className="flex gap-x-8">
                    <div className="w-1/3 flex flex-col gap-y-8">
                        <div className="relative">
                            <Input
                                placeholder="Введите адрес"
                                value={value}
                                handlerChange={handleChange}
                            />
                            <Dropdown list={suggestions} />
                        </div>
                        <AddressList />
                    </div>
                    <YaMap className="w-2/3"></YaMap>
                </div>
            </div>
        </>
    );
}

export default App;
