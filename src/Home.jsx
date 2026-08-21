import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Category from "./sections/Category";
import Services from "./sections/Services";
import Products from "./sections/Products";
import Reviews from "./sections/Reviews";
import SocialMedia from "./sections/SocialMedia";
import Footer from "./sections/Footer";
import FloatingContact from "./components/FloatingContact";

export default function Home() {
  return (
    <div className="legacy-app">
      <Header />
      <Hero />
      <Category />
      <Services />
      <Products />
      <Reviews />
      <SocialMedia />
      <FloatingContact />
      <Footer />
    </div>
  );
}