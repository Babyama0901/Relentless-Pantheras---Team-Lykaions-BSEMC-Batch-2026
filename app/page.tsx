import HeroSection from '../components/HeroSection';
import YearbookSection from '../components/YearbookSection';
import MemoriesSection from '../components/MemoriesSection';
import ClassProfile from '../components/ClassProfile';
import ClassStory from '../components/ClassStory';
import PillarsOfDreams from '../components/PillarsOfDreams';
import OurPartners from '../components/OurPartners';
import SiteFooter from '../components/SiteFooter';
import AnimatedDivider from '../components/AnimatedDivider';
import CountdownLock from '../components/CountdownLock';

export default function Home() {
  return (
    <CountdownLock>
      <main className="bg-black min-h-screen overflow-x-hidden">

      {/* 01 · Hero */}
      <HeroSection />

      <AnimatedDivider />

      {/* 02 · Yearbook */}
      <YearbookSection />

      <AnimatedDivider />

      {/* 03 · Memories */}
      <MemoriesSection />

      <AnimatedDivider />

      {/* 04 · Class Story */}
      <ClassStory />

      <AnimatedDivider />

      {/* 05 · Class Profile */}
      <ClassProfile />

      <AnimatedDivider />

      {/* 06 · Pillars of Dreams */}
      <PillarsOfDreams />

      <AnimatedDivider />

      {/* 07 · Our Partners */}
      <OurPartners />

      <AnimatedDivider />

      {/* Footer */}
      <SiteFooter />
    </main>
    </CountdownLock>
  );
}
