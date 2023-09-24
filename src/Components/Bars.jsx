
export default function Bars({ array }) {
    return (
        array.map((number, index) => <div key={index} className={`w-4 bg-black`} style={{ height: `${number * 8}px` }}></div>)
    );
}