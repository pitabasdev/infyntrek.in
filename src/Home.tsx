
import HeroSectionOne from './utils/Hero';
import { EnhancedAbout } from '@/components/ui/enhanced-about';
import Services from './utils/Services';
import { MdOutlineSupportAgent } from "react-icons/md";
import ITServicesFeaturesSection from './components/it-services-features';
import { TestimonialsSection } from '@/components/ui/animated-testimonials';
import { PortfolioShowcase } from '@/components/ui/portfolio-showcase';
import { PricingSection } from '@/components/ui/pricing-section';
import FaqPage from './utils/Faq';
import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      <HeroSectionOne />
      <div id='about'>
        <EnhancedAbout />
      </div>
      <Services />
      <PortfolioShowcase />
      <ITServicesFeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqPage />
      <Link to={"https://wa.link/def9br"} target='_blank' className=''>
        <div className='fixed bottom-4 right-4 z-60' >

          <div className='bg-gray-800 text-white px-4 py-1 lg:py-2 md:py-2 rounded-full shadow-lg text-sm cursor-pointer hover:bg-gray-700 transition duration-300 flex justify-center items-center'>
            <MdOutlineSupportAgent />
            <span className='ml-2'> Help & Support</span>

          </div>
        </div>
      </Link>
    </>
  );
}

export default Home