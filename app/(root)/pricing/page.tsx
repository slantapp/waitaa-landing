import Faq from "@/app/components/shared/Faq";
import Newsletter from "@/app/components/shared/Newsletter";
import PricingSection from "@/app/components/shared/Pricing";


const Pricing = () => {
  return (
    <div className="pt-10">
      <PricingSection />
      <Faq />
      <Newsletter />
    </div>
  );
};

export default Pricing;
