import type { Metadata } from "next";

import Faq from "../components/shared/Faq";
import Hero from "../components/page-components/home/Hero";
import NeedToKnow from "../components/page-components/home/NeedToKnow";
import Newsletter from "../components/shared/Newsletter";
import Partners from "../components/page-components/home/Partners";
import Pricing from "../components/shared/Pricing";
import SocialProof from "../components/page-components/home/SocialProof";
import Testimonials from "../components/page-components/home/Testimonials";
import RingaSection from "../components/page-components/home/RingaSection";
import MenuSection from "../components/page-components/home/MenuSection";
import WhyWaitaaSection from "../components/page-components/home/WhyWaitaaSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Turn every table into a smart experience. Waitaa helps restaurants, hotels, lounges, and public spaces connect with customers through QR-based calling, ordering, and ads monetization.",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <SocialProof />
      <WhyWaitaaSection />
      <MenuSection />
      <RingaSection />
      <NeedToKnow />
      <Pricing />
      <Testimonials />
      <Faq />
      <Newsletter />
    </div>
  );
};

export default Home;
