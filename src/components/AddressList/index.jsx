/* eslint-disable react/prop-types */
function AddressList({ list }) {
    return (
        <ul className="flex flex-col gap-y-4">
            {list.map((item) => (
                <li key={item.id} className="py-3 px-3 bg-sky-300 text-white">
                    {item.name}
                </li>
            ))}
        </ul>
    );
}

export default AddressList;
