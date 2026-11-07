import { cacheLife } from 'next/cache';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Footer from '@/components/Footer';
export default async function Home() {
  'use cache';
  cacheLife('days');
  return <><a className="skip-link" href="#work">Skip to selected work</a><Navbar/><main><Hero/><Banner/><Gallery/><About/></main><Footer/></>;
}
