import React from 'react'
import ButtonLink from '../common/ButtonLink'
import Heading from '../common/Heading'

const Subscribe = () => {
  return (
    <section className=' py-20 bg-cover bg-center ' style={{ backgroundImage: `url('../../../images/purple-bg.png')` }} >
      <div className='w-fit mx-5 md:m-auto flex flex-col justify-center items-center'>

  <Heading
  headingText="Join our Newsletter"
  paragraphText='Be the first to know when we release new quizzes, challenges, and tech news. Subscribe to our newsletter!'
  color='text-white'
  />
      <p className='text-xs text-white text-center'>We respect your privacy. Your email will only be used for updates about our app and tech quizzes</p>
      <input type="text" name="" id="" placeholder='Email' className="w-full  md:mx-auto px-3 duration-200 focus:border-primary py-3 sm:py-4 border border-solid border-primary rounded-lg outline-color-primary3 my-6"/>

      <ButtonLink label="Subscribe Now" variant='secondary' href='/'/>
      </div>
    </section>
  )
}

export default Subscribe