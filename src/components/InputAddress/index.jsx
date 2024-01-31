import { useDeferredValue, useState, Suspense } from "react";
import { SearchResults } from "@components/SearchResults/index.jsx";

function InputAddress() {
    const [query, setQuery] = useState("");
    const deferredGeoData = useDeferredValue(query);

    function handlerQuery(event) {
        setQuery(event.target.value);
    }

    return (
        <div className="relative">
            <form className="block">
                <input
                    className="block w-full outline-0 p-3 border-2 border-slate-500"
                    type="text"
                    placeholder="Введите адрес"
                    onChange={handlerQuery}
                />
            </form>
            {Boolean(query) && (
                <Suspense fallback={<h2>Loading...</h2>}>
                    <SearchResults query={deferredGeoData} />
                </Suspense>
            )}
        </div>
    );
}

export default InputAddress;
