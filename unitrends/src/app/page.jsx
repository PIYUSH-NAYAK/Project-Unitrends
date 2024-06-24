import Navbar from './mycomp/nav';
import Section2 from './Section2/sec2';
import AnimatedSection from './AnimatedSection/AnimatedSection';

export default function Home() {
  return (
    <div className="text-white">
      <Navbar />
      <Section2 />
      <AnimatedSection />
    </div>
  );
}
