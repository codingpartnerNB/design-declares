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
import GlobalSupporters from './GlobalSupporter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className='bg-black rounded-bl-4xl rounded-br-4xl'>
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
        <GlobalSupporters />
      </div>
      <div className='footer-part'>
        <Footer />
      </div>
    </>
  )
}

export default Home
