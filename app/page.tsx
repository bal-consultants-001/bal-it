import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

		<div
		  id="image"
		  className="relative w-full h-[450px]"
		>
		  <Image
			src="/images/backdrop.jpg"
			alt="BAL-IT IT Support"
			fill
			priority
			className="object-cover"
		  />

		  {/* Dark overlay */}
		  <div className="absolute inset-0 bg-black/40" />
		</div>

	  <Section
	  id="intro"
        title="Home IT Support Made Simple"
		className="bg-black">
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
		  <p>
			BAL-IT provides friendly, local IT support with a strong focus on helping
			people use their technology safely, confidently, and without frustration.
			We understand that devices play an important role in everyday life, and our
			priority is to support and protect our clients as they interact with their
			technology on a daily basis.
		  </p>

		  <br />

		  <p>
			With over 10 years of industry experience and more than 20 years of personal
			IT knowledge, our team brings professional-grade problem solving into the home
			support environment. This blend of real-world experience puts us in a strong
			position to assist with a wide range of technology issues while maintaining a
			consistently high standard of service.
		  </p>

		  <br />

		  <p>
			We take pride in explaining solutions clearly and without unnecessary jargon,
			ensuring our clients always understand what has been done and why. Our team
			is professional, patient, and respectful of your home, time, and privacy.
		  </p>

		  <br />

		  <p>
			As a locally based service, we focus on building long-term relationships with
			the people and communities we support. Whether you need help with a one-off
			issue or ongoing support, BAL-IT is here to help.
		  </p>

		<div className="py-4" />

		  {/* 👇 Secondary scroll anchor */}
		  <div
			id="why-choose-us"
			className="mt-12 scroll-mt-24"
		  >
			<h3 className="text-2xl font-semibold mb-6">
			  Why Choose BAL-IT
			</h3>

			<ul className="list-disc pl-6 space-y-3">
			  <li>
				<strong>Local, Personal Service</strong>
			  </li>
			  <li>
				<strong>Experienced & Knowledgeable</strong>
			  </li>
			  <li>
				<strong>Clear, Jargon-Free Explanations</strong>
			  </li>
			  <li>
				<strong>Focused on Safety & Security</strong>
			  </li>
			  <li>
				<strong>High-Quality, Respectful Support</strong>
			  </li>
			</ul>
		  </div>
		</Section>




      <Section id="services" title="Services" className="bg-black">
	  		<ul>
			<h2 className="font-bold py-4">
			Friendly Home IT Support You Can Rely On
			</h2>
			<p>
				Technology should make life easier — not more stressful. Our team provides clear, patient, one-to-one IT support for homes, helping you get the most out of your technology without the jargon.
				Whether something isn’t working properly or you just want help setting things up the right way, we’re here to help. We offer in person or remote assistance for most tech related issues.
			</p>
		  </ul>
		  <div className="py-6"></div>
		  <ul>
		  <h2 className="font-bold py-4">
			Home Wi-Fi Setup & Internet Problems
		  </h2>
		  <p>
			Slow speeds, weak signals, or unreliable connections can be frustrating. Our team can set up new broadband connections, improve Wi-Fi coverage throughout your home, and resolve common internet issues.
			We also optimise networks so multiple devices can connect smoothly for streaming, working, gaming, and browsing.
		  </p>
		</ul>
		<div className="py-6"></div>
		
		<ul>
		  <h2 className="font-bold py-4">
			Device Setup & Everyday Tech Support
		  </h2>
		  <p>
			Whether you’ve bought a new device or something has stopped working, we’re here to help. Our team supports laptops, desktop computers, tablets, smartphones, printers, and smart home devices.
			We’ll get everything set up properly and explain what we’ve done in clear, simple terms.
		  </p>
		</ul>
		<div className="py-6"></div>
		
		<ul>
		  <h2 className="font-bold py-4">
			Tech Help & Personal Tuition
		  </h2>
		  <p>
			If you’d like to feel more confident using technology, we offer friendly, one-to-one guidance tailored to your needs.
			From basic everyday tasks to learning new features, our team works at your pace to help you get comfortable and confident with your devices.
		  </p>
		</ul>
		<div className="py-6"></div>
		
		<ul>
		  <h2 className="font-bold py-4">
		    Virus Removal & Security
		  </h2>
		  <p>
			The more time we spend online the more likely we are to run into viruses or malware designed to damage our systems or cause us issues.
			We can help with virus detection and removal as well as general improvements to your digital security setup to keep you safe.
		  </p>
		</ul>
		<div className="py-6"></div>
		
		<ul>
		  <h2 className="font-bold py-4">
			Online Safety & Cyber Security Advice
		  </h2>
		  <p>
			Staying safe online is more important than ever. Our team can help secure your devices, set up antivirus protection, and provide practical advice on avoiding scams and protecting personal information.
			We focus on simple, effective steps to keep you and your family safe online.
		  </p>
		</ul>
		<div className="py-6"></div>
		
		<ul>
		  <h2 className="font-bold py-4">
			Other Home Technology Support
		  </h2>
		  <p>
			If it plugs in or connects to the internet, we can usually help. This includes printer issues, software problems, data backups, system clean-ups, and general technology troubleshooting.
			If you’re not sure whether we cover a specific issue, just get in touch and ask.
		  </p>
		</ul>
		<div className="py-6"></div>

      </Section>

      <Section id="pricing" title="Pricing" className="bg-white">
        Transparent, fair pricing based on the service required.  
        Remote support and in-person visits available.
		
		<ul>
		  <h2 className="font-bold py-4">
		    Our Pricing Structure for home users
		  </h2>
		  <p>
			We offer a free 15 minute remote consultation where we discuss your needs and whether we are likely to be able to help.
			Our standard pricing is £45/hour for remote and in person calls after that.
			For in person visits, ff you are more than 30 minutes from our facility in Llantwit Major we will charge a minimum £15 (20 minutes) transport cost, this will be included in the first hour of support.
		  </p>
		</ul>
		<div className="py-6"></div>

      </Section>

      <Section id="contact" title="Contact BAL-IT" className="bg-black">
        <p className="mb-4">
          📧 support@bal-it.co.uk  
          📞 07XXXXXXXX
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
