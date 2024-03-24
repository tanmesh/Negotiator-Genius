import React, { useState } from 'react'
import Dropdown from './Dropdown'

function Param() {
    const negotiatableTerms = [
        "Price",
        "Payment terms",
        "Delivery terms",
        "Quality",
        "Quantity",
        "Other",
        "Price1",
        "Payment terms1",
        "Delivery terms1",
        "Quality1",
        "Quantity1",
        "Other1"
    ]
    const [selectedNegotiatableTerms, setSelectedNegotiatableTerms] = useState([])
    const [negotiateTo, setNegotiateTo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Negotiatable Terms: ', selectedNegotiatableTerms)
        console.log('Negotiate to:', negotiateTo)
    }

    return (
        <div className='w-1/2'>
            <form className='space-y-4 w-full flex flex-col mx-auto' onSubmit={handleSubmit}>
                <p className="text-lg font-semibold text-gray-800">Upload your contract :</p>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

                <p className="text-lg font-semibold text-gray-800">Set your parameters :</p>
                <Dropdown selectedNegotiatableTerms={selectedNegotiatableTerms} negotiatableTerms={negotiatableTerms} />

                <p className="text-lg font-semibold text-gray-800">Negotiate to : </p>
                <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Negotiate to"
                    value={negotiateTo}
                    onChange={(event) => {
                        setNegotiateTo(event.target.value)
                    }} />

                <button className="btn btn-neutral text-white" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Param