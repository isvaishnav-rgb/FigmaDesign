"use client"
import Carousel from "../../components/Carousel"
import BusinessSection from "./BusinessSection"
import ClientSection from "./ClientsSection"
import CustomerSection from "./CustomerSection"
import DemoSection from "./DemoSection"
import DesignSection from "./DesignSection"
import HeroSection from "./HeroSection"
import ManageSection from "./ManageSection"
import MarketingSection from "./MarketingSection"
import PixelGradeSection from "./PixelGradeSection"

const LandingPage = () => {
    return (
        <>
            <Carousel>
                <HeroSection />
                <HeroSection />
                <HeroSection />
            </Carousel>
            <ClientSection />
            <ManageSection />
            <PixelGradeSection />
            <BusinessSection />
            <DesignSection />
            <CustomerSection />
            <MarketingSection />
            <DemoSection />
        </>
    )
}

export default LandingPage