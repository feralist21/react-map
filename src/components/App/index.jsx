import YaMap from "@components/YaMap/index.jsx";
import InputAddress from "@components/InputAddress/index.jsx";
import AddressList from "@components/AddressList/index.jsx";

function App() {
    return (
        <>
            <div className="pt-32 flex flex-col gap-y-10 w-[1200px] mx-auto">
                <h1 className="text-5xl text-center">React Map</h1>
                <div className="flex gap-x-8">
                    <div className="w-1/3 flex flex-col gap-y-8">
                        <InputAddress/>
                        <AddressList/>
                    </div>
                    <YaMap className="w-2/3"></YaMap>
                </div>
            </div>
        </>
    );
}

export default App;
