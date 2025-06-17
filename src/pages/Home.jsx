import React from 'react'
import DesignDeclares from '../components/DesignDeclares'
import BreakDown from './BreakDown'
import DonateToD from '../components/DonateToD'
import EightActsSection from '../components/EightActsSection'
import DeclareEmergency from '../components/DeclareEmergency'
import ExpandBar from '../components/ExpandBar'
import LatestEvents from '../components/LatestEvents'
import NavigationMenu from '../components/NavigationMenu'
import NewsletterSection from '../components/NewsletterSection'
import Signatories from './Signatories'

const Home = () => {
  return (
    <>
        <ExpandBar />
        <NavigationMenu />
        <DesignDeclares />
        <BreakDown />
        <DonateToD />
        <EightActsSection />
        <DeclareEmergency />
        <LatestEvents />
        <NewsletterSection />
        <Signatories />
    </>
  )
}

export default Home
