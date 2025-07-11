import React from 'react'
import Nav from '../Nav/Nav'

function Home() {
  return (
    <div className='w-full h-screen bg-green-400 overflow-auto flex flex-col items-center justify-start px-2'>
     <div className='w-full p-2 bg-red-400'>
          <Nav/>
     </div>
    </div>
  )
}

export default Home