import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <Section id="intro" title="Home IT Support Made Simple">
		<Image src="/images/backdrop.jpg" alt="backdrop" fill className="object-cover opacity-70" />
		  <div className="absolute z-10 text-center px-4 max-w-2xl">
			<p className="mb-6 text-lg">
			  BAL-IT provides reliable, professional at-home and remote IT support
			  for laptops, PCs, tablets, Android phones, and limited Apple devices.
			</p>
		  </div>
      </Section>

      <Section id="about" title="About BAL-IT">
        With over 10 years of industry experience and more than 20 years of
        personal IT expertise, BAL-IT brings professional-grade problem solving
        into the home support market.
      </Section>

      <Section id="services" title="Services">
        • PC & Laptop Repairs  
        • Virus Removal & Security  
        • Home Network Setup  
        • Android Device Support  
        • Remote Troubleshooting  
      </Section>

      <Section id="pricing" title="Pricing">
        Transparent, fair pricing based on the service required.  
        Remote support and in-person visits available.
      </Section>

      <Section id="contact" title="Contact BAL-IT">
        <p className="mb-4">
          📧 support@bal-it.co.uk  
          📞 07XXXXXXXX
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
