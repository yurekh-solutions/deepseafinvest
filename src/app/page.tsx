import { GalaxyHero } from '@/components/sections/GalaxyHero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';

export default function Home() {
  return (
    <>
      <GalaxyHero />
      <Services />
      <About />
      <WhyChooseUs />
    </>
  );
}
