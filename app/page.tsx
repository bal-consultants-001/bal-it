import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />

		<div
		  id="logo"
		  className="relative w-full h-[260px] md:h-[320px] overflow-hidden scroll-mt-24"
		>
		  {/* Background video */}
			  {/*<video
			className="
			  absolute inset-0 w-full h-full object-cover
			  blur scale-105
			  opacity-0 animate-fadeIn
			  motion-reduce:hidden
			"
			autoPlay
			muted
			loop
			playsInline
			preload="metadata"
			poster="/images/video-fallback.png"
		  >
			<source src="/videos/backdrop_low.mp4" type="video/mp4" />
			  </video>*/}

		  {/* Fallback image for reduced motion / video fail */}
			  {/*<div className="absolute inset-0 motion-safe:hidden">*/}
		  <div className="absolute inset-0">
			<Image
			  src="/images/video-fallback.png"
			  alt=""
			  fill
			  className="object-cover scale-275"
			  priority
			/>
		  </div>

		  {/* Gradient overlay */}
		  <div
			className="
			  absolute inset-0
			  bg-gradient-to-r
			  from-black/60
			  via-white/70
			  to-black/60
			"
		  />

		  {/* Soft vignette for depth */}
		  <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.45)]" />

		  {/* Logo */}
		  <div className="relative z-10 flex items-center justify-center h-full pt-14">
			<Image
			  src="/images/bal-it-d.png"
			  alt="BAL-IT"
			  width={250}
			  height={125}
			  priority
			  className="object-contain drop-shadow-lg"
			/>
		  </div>
		</div>



		{/*<div className="pt-[5px] bg-black" />*/}

	  <Section
	  id="intro"
        title="Home IT Support Made Simple"
		className="bg-white text-center"
		fullWidth>
		<p className="mb-6">
          BAL-IT provides reliable, professional at-home and remote IT support
          for laptops, PCs, tablets and phones.
        </p>
        <p>
          While we are based in South Wales for In-person visits, our secure remote assistance is available to suit all needs.
          your needs.
        </p>
      </Section>

		<div
		  id="image"
		  className="relative w-full h-[400px]"
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

		<Section id="about" title="About BAL-IT" className="bg-white">
		  <div className="flex flex-col md:flex-row  p-3 rounded-lg mb-0">
		  <div className="md:w-1/5 mb-4 md:mb-0 flex justify-center md:justify-center">
		    <img src="/images/ben2.jpg" alt="BAL-IT" width={100} height={160} className="rounded-lg object-cover" />
		</div>
		    <div className="md:w-4/5 text-white">
		      <p> Hi, I’m the person behind BAL-IT 👋 I provide friendly, local IT support with a simple goal:
			    to help you use your technology safely, confidently, and without frustration. I know how important
			    phones, laptops, and home tech are in everyday life, and I’m here to make things work the way they
			    should — without the stress.
		      </p>
		    </div>
		  </div>
		  
		  <br />
		  
		  <p> I have over 10 years of professional experience working with Microsoft and cloud technologies,
			along with more than 20 years of hands-on personal IT knowledge covering Windows, Apple Devices, Smart phones and tablets and Linux devices. 
			I’m a Microsoft Certified professional and SC Cleared, and I’ve worked on everything from home computers
			to complex business systems. What that means for you is experienced, professional support you can trust
			— brought into a home and personal setting.
		  </p>
		  
		  <br />
		  
		  <p> I specialise in solving problems clearly and calmly, without confusing jargon. Whether your device
			is running slowly, something isn’t working, or you just need advice, I’ll explain what’s going on in
			plain English and make sure you feel comfortable every step of the way. I’m always respectful of your
			home, your time, and your privacy.
		  </p>

		  <br />
		  
		  <p> Because I’m local and work independently, you’ll always deal directly with me — the person doing
			the work. No call centres, no ticket numbers, just straightforward, reliable support when you need it.
			Whether it’s a one-off issue or ongoing help, I’m here to make technology easier for you.
		  </p>
		  
		  <br />
		  
		  <p> I am also able to offer my services outside of a standard 9-5 work day. Whether you need help during 
		  this time or in the evening or weekends we can work with you to arrange a time that works. The aim is to
		  respond to all enquiries in a timely manner so you aren't waiting for help when you need it most.
		  </p>

		<div className="py-4" />

		  {/* 👇 Secondary scroll anchor */}
		  <div
			id="why-choose-us"
			className="mt-12 scroll-mt-34"
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
	  <div
		className="
		  flex gap-6 overflow-x-auto pb-4
		  snap-x snap-mandatory
		  md:block md:overflow-visible
		  [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
		"
	  >

		{/* Service 1 */}
		<div className="min-w-[85%] snap-center bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col md:min-w-0 md:flex-row md:mb-6 md:bg-transparent md:shadow-none">
		  <div className="text-white md:w-2/3">
			<h2 className="font-bold text-xl mb-2">Friendly Home IT Support</h2>
			<p>
			  Technology should make life easier, not harder. We provide clear,
			  patient, one-to-one IT support for your home — in person or remotely —
			  without confusing jargon. Most issues can be resolved remotely using our secure connection tool.
			</p>
		  </div>
		  <div className="w-full mt-4 md:w-1/3 md:mt-0 md:ml-6 rounded-lg overflow-hidden">
			<Image src="/images/friendly.jpg" alt="Home IT Support" width={300} height={200} className="object-cover w-full h-full transition-transform hover:scale-105" />
		  </div>
		</div>

		{/* Service 2 */}
		<div className="min-w-[85%] snap-center bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col md:min-w-0 md:flex-row md:mb-6 md:bg-transparent md:shadow-none">
		  <div className="text-white md:w-2/3">
			<h2 className="font-bold text-xl mb-2">Home Wi-Fi & Internet Issues</h2>
			<p>
			  We fix slow or unreliable internet, improve Wi-Fi coverage, and set up
			  home networks so all your devices work smoothly for streaming, work, and everyday use.
			</p>
		  </div>
		  <div className="w-full mt-4 md:w-1/3 md:mt-0 md:ml-6 rounded-lg overflow-hidden">
			<Image src="/images/wifi.jpg" alt="Wi-Fi Setup" width={300} height={200} className="object-cover w-full h-full transition-transform hover:scale-105" />
		  </div>
		</div>

		{/* Service 3 */}
		<div className="min-w-[85%] snap-center bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col md:min-w-0 md:flex-row md:mb-6 md:bg-transparent md:shadow-none">
		  <div className="text-white md:w-2/3">
			<h2 className="font-bold text-xl mb-2">Device Setup & Tech Support</h2>
			<p>
			  From new devices to everyday problems, we support laptops, desktops,
			  tablets, phones, printers, and smart home technology — with clear explanations included.
			</p>
		  </div>
		  <div className="w-full mt-4 md:w-1/3 md:mt-0 md:ml-6 rounded-lg overflow-hidden">
			<Image src="/images/professional.jpg" alt="Device Setup" width={300} height={200} className="object-cover w-full h-full transition-transform hover:scale-105" />
		  </div>
		</div>

		{/* Service 4 */}
		<div className="min-w-[85%] snap-center bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col md:min-w-0 md:flex-row md:mb-6 md:bg-transparent md:shadow-none">
		  <div className="text-white md:w-2/3">
			<h2 className="font-bold text-xl mb-2">Personal Tech Help & Tuition</h2>
			<p>
			  One-to-one guidance tailored to you. We help you build confidence using
			  your technology at a comfortable pace, whether you’re learning the basics or new features.
			</p>
		  </div>
		  <div className="w-full mt-4 md:w-1/3 md:mt-0 md:ml-6 rounded-lg overflow-hidden">
			<Image src="/images/learn.jpg" alt="Tech Tuition" width={300} height={200} className="object-cover w-full h-full transition-transform hover:scale-105" />
		  </div>
		</div>

		{/* Service 5 */}
		<div className="min-w-[85%] snap-center bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col md:min-w-0 md:flex-row md:mb-6 md:bg-transparent md:shadow-none">
		  <div className="text-white md:w-2/3">
			<h2 className="font-bold text-xl mb-2">Virus Removal & Security</h2>
			<p>
			  We remove viruses and malware and improve your device security to help keep your systems running safely and reliably.
			</p>
		  </div>
		  <div className="w-full mt-4 md:w-1/3 md:mt-0 md:ml-6 rounded-lg overflow-hidden">
			<Image src="/images/virus.jpg" alt="Virus Removal" width={300} height={200} className="object-cover w-full h-full transition-transform hover:scale-105" />
		  </div>
		</div>

		{/* Service 6 */}
		<div className="min-w-[85%] snap-center bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col md:min-w-0 md:flex-row md:mb-6 md:bg-transparent md:shadow-none">
		  <div className="text-white md:w-2/3">
			<h2 className="font-bold text-xl mb-2">Online Safety Advice</h2>
			<p>
			  Practical advice to help protect your devices and personal information,
			  avoid scams, and stay safe online with simple, effective steps.
			</p>
		  </div>
		  <div className="w-full mt-4 md:w-1/3 md:mt-0 md:ml-6 rounded-lg overflow-hidden">
			<Image src="/images/safety.jpg" alt="Online Safety" width={300} height={200} className="object-cover w-full h-full transition-transform hover:scale-105" />
		  </div>
		</div>

		{/* Service 7 */}
		<div className="min-w-[85%] snap-center bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col md:min-w-0 md:flex-row md:mb-6 md:bg-transparent md:shadow-none">
		  <div className="text-white md:w-2/3">
			<h2 className="font-bold text-xl mb-2">Other Home Technology Support</h2>
			<p>
			  If it plugs in or connects to the internet, we can usually help — from software issues and backups to general troubleshooting.
			</p>
		  </div>
		  <div className="w-full mt-4 md:w-1/3 md:mt-0 md:ml-6 rounded-lg overflow-hidden">
			<Image src="/images/question.jpg" alt="Other Tech Support" width={300} height={200} className="object-cover w-full h-full transition-transform hover:scale-105" />
		  </div>
		</div>

	  </div>
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
			For in person visits, if you are more than 30 minutes from our facility in Llantwit Major we will charge an initial £15 (20 minutes) to cover transport cost, this will not be included in the first hour of support.
		  </p>
		</ul>
		<div className="py-6"></div>

      </Section>

      <Section id="contact" title="Contact BAL-IT" className="bg-black">
        <p className="mb-4">
          📧 information@bal-it.co.uk  
          📞 07721762696
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
