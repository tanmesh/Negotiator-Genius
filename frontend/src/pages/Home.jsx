import React from 'react'
import Chat from '../component/Chat'
import Param from '../component/Param'

function Home() {
    return (
        <div className="flex flex-row gap-5 justify-end">
            <Param />
            <div className="divider lg:divider-horizontal" />
            <Chat />
        </div>
    )
}

export default Home