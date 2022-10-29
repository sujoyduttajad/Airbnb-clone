import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <h1>Header</h1>

        {/* Left Container */}
        <div>
            <Image src="https://links.papareact.com/qd3" />
        </div>

        {/* middle Container */}
        <div></div>

        {/* Right Container */}
        <div></div>
    </div>
  )
}

export default Header