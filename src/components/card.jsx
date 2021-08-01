import React from "react"

const card = (props) => {
    return (
        <div className="w-96 pl-5 py-2 mx-auto border-l-4">
            <div className="bg-white px-4 py-2 shadow rounded">{props.data.msg}</div>
            <div className="px-2 py-1 text-xs text-gray-400"><i>{props.data.tgl}</i></div>
        </div>
    )
}

export default card