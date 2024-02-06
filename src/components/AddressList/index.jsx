/* eslint-disable react/prop-types */
function AddressList({ list, handleClick }) {
    return (
        <ul className="flex flex-col gap-y-4">
            {list.map((item) => (
                <li
                    key={item.id}
                    className="py-3 px-3 bg-sky-300 text-white flex gap-x-2 items-center"
                >
                    <span className="block grow">{item.name}</span>
                    <button
                        onClick={handleClick}
                        data-name={item.name}
                        className="block w-4"
                        type="button"
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default AddressList;
