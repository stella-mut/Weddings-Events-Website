import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import InquiryForm from "@/components/InquiryForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ivory text-espresso">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Process />
      <Testimonials />
      <InquiryForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
