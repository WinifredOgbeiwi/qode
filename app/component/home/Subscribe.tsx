import React from 'react'
import ButtonLink from '../common/ButtonLink'

const Subscribe = () => {
  return (
    <section className=' py-20 bg-cover bg-center ' style={{ backgroundImage: `url('../../../images/purple-bg.png')` }} >
      <div className='w-fit mx-5 md:m-auto flex flex-col justify-center items-center'>

      <h2 className='text-5xl text-white font-bold '>Join our Newsletter</h2>
      <p className='mt-5 text-xl text-white'>Be the first to know when we release new quizzes, challenges, and tech news. Subscribe to our newsletter!</p>
      <p className='text-xs text-white'>We respect your privacy. Your email will only be used for updates about our app and tech quizzes</p>
      <input type="text" name="" id="" placeholder='Email' className="w-full  md:mx-auto px-3 duration-200 focus:border-primary py-3 sm:py-4 border border-solid border-primary rounded-lg outline-color-primary3 my-6"/>

      <ButtonLink label="Subscribe Now" variant='secondary' href='/'/>
      </div>
    </section>
  )
}

export default Subscribe