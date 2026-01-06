import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <Section
        id="intro"
        title="Home IT Support Made Simple"
        background={
          <>
            <Image
              src="/images/backdrop.jpg"
              alt="BAL-IT IT Support"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </>
        }
      >
        <p className="mb-6">
          BAL-IT provides reliable, professional at-home and remote IT support
          for laptops, PCs, tablets, Android phones, and limited Apple devices.
        </p>
        <p>
          In-person visits and secure remote assistance are available to suit
          your needs.
        </p>
      </Section>

      <Section id="about" title="About BAL-IT" className="bg-white">
        With over 10 years of industry experience and more than 20 years of
        personal IT expertise, BAL-IT brings professional-grade problem solving
        into the home support market.
      </Section>

      <Section id="services" title="Services">
	  		<ul>
			<h2 className="font-bold">
			Friendly Home IT Support You Can Rely On
			</h2>
			<p>
				Technology should make life easier — not more stressful. Our team provides clear, patient, one-to-one IT support for homes, helping you get the most out of your technology without the jargon.
				Whether something isn’t working properly or you just want help setting things up the right way, we’re here to help.
			</p>
		  </ul>
		  <div className="py-20"></div>
		  <ul className="space-y-4 text-xl font-semibold">
			<li>• PC & Laptop Repairs</li>
			<li>• Virus Removal & Security</li>
			<li>• Home Network Setup</li>
			<li>• Android Device Support</li>
			<li>• Remote Troubleshooting</li>
		  </ul>

      </Section>

      <Section id="pricing" title="Pricing" className="bg-white">
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
