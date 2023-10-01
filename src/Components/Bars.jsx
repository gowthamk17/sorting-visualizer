
export default function Bars({ array }) {
    return (
        <div className="h-full w-full flex gap-1 items-end">
            {array.map((number, index) => {
                return <div key={index} className={`w-6 rounded-sm bg-teal-500`} style={{ height: `${number * 10}px` }}></div>
            })}
        </div>
    )
}