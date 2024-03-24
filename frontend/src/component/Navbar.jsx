import React from 'react'

function Navbar({ title }) {
    return (
        <div className="navbar flex-row justify-center">
            <div className="navbar-center">
                <h1 className="text-4xl text-black-700 font-bold ml-2">{title}</h1>
            </div>
        </div>
    )
}

export default Navbar