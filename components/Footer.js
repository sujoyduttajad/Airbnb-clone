import React from 'react'

const Footer = () => {
  return (
    <footer 
    className='grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 
        bg-gray-100 text-gray-600 '
    >
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>AIRBNB</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Careers</p>
            <p>Airbnb Plus</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>Visit our community forum</p>
            <p>Airbnb.org</p>
            <p>Support Afgan refugees</p>
            <p>Combat discrimination</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOSTING</h5>
            <p>Try Hosting</p>
            <p>AirCover for Hosts</p>
            <p>Explore hosting resources</p>
            <p>How to host responsibly</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>AirCover</p>
            <p>Safety Information</p>
            <p>Supporting people with disabilities</p>
            <p>Cancellation options</p>
            <p>Report a neighbourhood concern</p>
        </div>
    </footer>
  )
}

export default Footer