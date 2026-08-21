import Header from "../sections/Header";
import Footer from "../sections/Footer";
import CompanyIntro from "../sections/CompanyIntro";
import CompanyStory from "../sections/CompanyStory";
import VisionMission from "../sections/VisionMision";
import WhyChooseUs from "../sections/WhyChooseUs";
import Statistics from "../sections/Statistics";
import Journey from "../sections/Journey";
import FactoryGallery from "../sections/FactoryGallery";
import DeliveryAreas from "../sections/DeliveryAreas";
import CallToAction from "../sections/CallToAction";



const About = () => {
  return (
    <>
      <Header />
      <CompanyIntro/>
      <CompanyStory/>
      <Journey/>
      <VisionMission/>
      <WhyChooseUs/>
      
      <Statistics/>
     <FactoryGallery/>
     <DeliveryAreas/>
     <CallToAction/>
      <Footer />
    </>
  );
};

export default About;