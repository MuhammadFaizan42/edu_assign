import React from 'react'
import Banner from './features/banner'
import Skills from './features/skills'
import Tracks from './features/tracks'
import DesignTrack from './features/designtrack'

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <DesignTrack/>
            <Tracks />
        </div>
    )
}

export default HomePage