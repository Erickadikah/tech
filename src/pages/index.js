import Image from "next/image";
import LandingNavBar from "../components/navbar";
import Hero from "../components/hero";
import Section1 from "../components/section1"
import Section2 from "../components/section2"
import Foot from "../components/foot"
import Section3 from "../components/section3"
import Faq from "../components/faq"
import Testimonials from "../components/testimonial";

export default function Home() {
  return (
    <main>
    <LandingNavBar />
    <Hero />
    <Section3 />
    <Testimonials />
    {/*<Section1 />*/}
    {/*<Section2 />*/}
    <Faq />
    <Foot />
    </main>
  );
}
