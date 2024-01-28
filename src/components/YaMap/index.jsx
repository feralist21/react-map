import { clsx } from "clsx";

// eslint-disable-next-line react/prop-types
function YaMap({ className }) {
    return (
        <div className={clsx("bg-slate-400 color-white h-52", className)}>Тут будет карта</div>
    );
}

export default YaMap;
