import React from 'react'
import ButtonLink from '../common/ButtonLink'

const CTA = () => {
  return (
    <section className='w-fit m-auto flex flex-col justify-center items-center'>
      <h3>Ready to Test Your Knowledge?</h3>
      <p>Sign Up and start quizzing now!</p>
      <ButtonLink label="Get Started" variant='primary' href='/'/>
    </section>
  )
}

export default CTA

{/*
    
    3. Call to Action Section
Headline: "Ready to Test Your Knowledge?"

Subheading: "Join our community of tech lovers and start quizzing now!"

CTA Button: "Get Started"
    */}