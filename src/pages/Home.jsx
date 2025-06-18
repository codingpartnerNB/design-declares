import React from 'react'
import DesignDeclares from '../components/DesignDeclares'
import BreakDown from './BreakDown'
import DonateToD from '../components/DonateToD'
import EightActsSection from '../components/EightActsSection'
import DeclareEmergency from '../components/DeclareEmergency'
import LatestEvents from '../components/LatestEvents'
import NewsletterSection from '../components/NewsletterSection'
import Signatories from './Signatories'
import GlobalSupporters from './GlobalSupporter'

const Home = () => {
  return (
    <>
        <DesignDeclares />
        <BreakDown />
        <DonateToD />
        <EightActsSection />
        <DeclareEmergency />
        <LatestEvents />
        <NewsletterSection />
        <Signatories />
        <GlobalSupporters />
    </>
  )
}

export default Home
