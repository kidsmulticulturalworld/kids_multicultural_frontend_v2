import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PressPartners from '@/components/sections/PressPartners';
import WhyKMW from '@/components/sections/WhyKMW';
import ExploreWorld from '@/components/sections/ExploreWorld';
import Impact from '@/components/sections/Impact';
import Testimonials from '@/components/sections/Testimonials';
import GetInvolved from '@/components/sections/GetInvolved';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E8E8E8]">
      <Header />
      <main>
        <Hero />
        <PressPartners />
        <WhyKMW />
        <ExploreWorld />
        <Impact />
        <Testimonials />
        <GetInvolved />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
