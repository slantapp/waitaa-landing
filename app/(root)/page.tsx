import Faq from "../components/shared/Faq";
import Hero from "../components/page-components/home/Hero";
import NeedToKnow from "../components/page-components/home/NeedToKnow";
import Newsletter from "../components/shared/Newsletter";
import Partners from "../components/page-components/home/Partners";
import Pricing from "../components/shared/Pricing";
import SocialProof from "../components/page-components/home/SocialProof";
import Testimonials from "../components/page-components/home/Testimonials";

const Home = () => {
  return (
    <div>
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
