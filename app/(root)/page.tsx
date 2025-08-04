import Faq from "../components/page-components/home/Faq";
import Hero from "../components/page-components/home/Hero";
import NeedToKnow from "../components/page-components/home/NeedToKnow";
import Newsletter from "../components/page-components/home/Newsletter";
import Partners from "../components/page-components/home/Partners";
import Pricing from "../components/page-components/home/Pricing";
import SocialProof from "../components/page-components/home/SocialProof";
import Testimonials from "../components/page-components/home/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Partners />
      <SocialProof />
      <NeedToKnow />
      <Pricing />
      <Testimonials />
      <Faq />
      <Newsletter />
    </div>
  );
};

export default Home;
