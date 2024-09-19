import Header from "../../components/layout/Header.jsx"
import DemoSection from "./DemoSection.jsx"
import FeedbackSection from "./FeedbackSection.jsx"
import HeroSection from './HeroSection.jsx'
import FeaturesSection from './FeaturesSection.jsx'
import ContactFormSection from "./ContactFormSection.jsx"

export default function LandingPage() {
    return (
        <>
            <Header/>
            <HeroSection/>
            <DemoSection/>
            <FeedbackSection/>
            <FeaturesSection/>
            <ContactFormSection/>
        </>
        
    )
}