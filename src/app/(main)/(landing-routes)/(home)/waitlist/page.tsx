import React from 'react'
import IntegrationsBar from '~/components/homepage/HeroBottom'
import SuccessStory from '~/components/homepage/SuccessStory'
import Testimonials from '~/components/homepage/Testimonials'
import FindSomeoneSection from '~/components/squeeze/FindSomeone'
import FitnessLifestyle from '~/components/squeeze/FitnessLifestyle'
import Hero from '~/components/squeeze/Hero'
import ProgressSection from '~/components/squeeze/Progress'
import SqueezeFooter from '~/components/squeeze/SqueezeFooter'
import TrainerReady from '~/components/squeeze/TrainerReady'

const WaitList = () => {
  return (
    <main className="w-full pt-28 md:pt-48">
      <Hero
        badge="Live trainer accountability"
        headline="Never miss a workout session"
        description="Connect with vetted fitness trainers who call you at your scheduled time — live, on video. Join the waitlist for exclusive early access to FitCall."
        ctaLabel="Join the Waitlist"
      />
      <IntegrationsBar />
      <section className="bg-secondary py-6">
        <Testimonials />
        <ProgressSection />
      </section>
      <SuccessStory />
      <FindSomeoneSection />
      <FitnessLifestyle />
      <TrainerReady />
      <SqueezeFooter />
    </main>
  )
}

export default WaitList
