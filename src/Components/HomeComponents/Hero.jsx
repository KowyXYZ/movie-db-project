import React from 'react'
import stars from '../../Assets/starts.png'
import play from '../../Assets/play.png'
import plus from '../../Assets/plus.png'
function Hero() {
  return (
    <div className='bg-hero-pattern h-screen bg-no-repeat bg-cover'>
        <div className='flex flex-col justify-center items-start mx-24 pt-96'>
            <div className='flex flex-col justify-center items-start gap-4'>
            <img src={stars} alt="" />
            <p className='uppercase text-[18px]'>DRAMA | ACTION | SCI-FI</p>
            <div className='flex '>
                <img src={play} alt="play" />
                <img src={plus} alt="play" />
            </div>
            <p className='w-[600px]'>Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
</p>
            </div>
            
        </div>
    </div>
  )
}

export default Hero
