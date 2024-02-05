import { useCallback, useMemo, useState } from "react";
import YaMap from "@components/YaMap/index.jsx";
import AddressList from "@components/AddressList/index.jsx";
import { Input } from "@components/Input/index.jsx";
import { Dropdown } from "@components/Dropdown/index.jsx";
import { geocode } from "@/http/geocodeApi.js";
import { useDebounce } from "@/hooks/useDebounse.js";

function App() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [addressList, setAddressList] = useState([]);

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

    const handleQuery = (event) => {
        if (event.target.value === "") {
            setQuery("");
            setSuggestions([]);
        }

        setQuery(event.target.value);

        handleSearch(event.target.value);
    };

    const additionQuery = (event) => {
        setQuery(event.target.textContent);
    };

    const handleSubmit = (event) => {
        if (query === "") return;
        event.preventDefault();

        const filteredObject = suggestions.filter((item) => item.name === query);

        setAddressList([...addressList, ...filteredObject]);
        setQuery("");
        setSuggestions([]);
    };

    const placeMarksObject = useMemo(() => {
        console.log("Мемо!!");
        return addressList.map((address) => {
            return address.position.split(" ");
        });
    }, [addressList]);

    return (
        <>
            <div className="pt-32 flex flex-col gap-y-10 w-[1200px] mx-auto">
                <h1 className="text-5xl text-center">React Map</h1>
                <div className="flex gap-x-8">
                    <div className="w-1/3 flex flex-col gap-y-8">
                        <div className="relative">
                            <form className="flex gap-x-2" onSubmit={handleSubmit}>
                                <Input
                                    placeholder="Введите адрес"
                                    value={query}
                                    handlerChange={handleQuery}
                                />
                                <button className="block p-2 bg-sky-400 text-white" type="submit">
                                    Отправить
                                </button>
                            </form>
                            {suggestions.length > 0 && (
                                <Dropdown list={suggestions} handleClick={additionQuery} />
                            )}
                        </div>
                        {addressList.length > 0 && <AddressList list={addressList} />}
                    </div>
                    <YaMap placemarks={placeMarksObject} className="w-2/3" />
                </div>
            </div>
        </>
    );
}

export default App;
