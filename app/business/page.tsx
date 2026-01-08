import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Business() {
  return (
    <>
      <Navbar />

		<div className="pt-[80px] bg-white" />

		<div
		  id="logo"
		  className="w-full bg-white py-6 flex justify-center items-center scroll-mt-24"
		>
		  <Image
			src="/images/bal-it.png"
			alt="BAL-IT"
			width={250}
			height={125}
			priority
			className="object-contain"
		  />
		</div>

	  <Section
	  id="intro"
        title="Reliable IT Support for Local Businesses"
		className="bg-white text-center"
		fullWidth>
        <p className="mb-6">
          BAL-IT provides professional, dependable IT support for small and
          medium-sized businesses, helping you stay secure, productive, and
          focused on running your business.
        </p>
        <p>
          Based in the Vale of Glamorgan. We offer responsive on-site and remote support, tailored to the needs
          of modern local businesses.
        </p>
      </Section>

		<div
		  id="image"
		  className="relative w-full h-[400px]"
		>
		<Image
		  src="/images/servers2.jpg"
		  alt="BAL-IT IT Support"
		  fill
		  priority
		  className="object-cover object-[50%_20%]"
		/>

		  {/* Dark overlay */}
		  <div className="absolute inset-0 bg-black/40" />
		</div>

		<Section
		  id="about"
		  title="Business IT Support You Can Depend On"
		  className="bg-white"
		>
		  <p>
			Technology is critical to the day-to-day operation of your business.
			When systems fail, productivity suffers. BAL-IT delivers reliable,
			practical IT support designed to minimise downtime and keep your
			business running smoothly.
		  </p>

		  <br />

		  <p>
			With over 10 years of industry experience and more than 20 years of
			hands-on IT expertise, our team understands the challenges businesses
			face when managing technology. We work closely with you to provide
			solutions that are secure, efficient, and aligned with your business
			goals.
		  </p>

		  <br />

		  <p>
			As a local IT support provider, we offer a personal, responsive service
			you can rely on — without long contracts or unnecessary complexity.
		  </p>

		  <div className="py-4" />

		  {/* 👇 Secondary scroll anchor */}
		  <div
			id="why-choose-us"
			className="mt-12 scroll-mt-34"
		  >
			<h3 className="text-2xl font-semibold mb-6">
			  Why Choose BAL-IT for Your Business
			</h3>

			<ul className="list-disc pl-6 space-y-3">
			  <li>
				<strong>Local & Responsive Support</strong>
			  </li>
			  <li>
				<strong>Business-Focused Expertise</strong>
			  </li>
			  <li>
				<strong>Clear Communication</strong>
			  </li>
			  <li>
				<strong>Security & Risk Awareness</strong>
			  </li>
			  <li>
				<strong>Flexible Support Options</strong>
			  </li>
			</ul>
		  </div>
		</Section>


	<Section id="support-options" title="Business Support Options" className="bg-black">
	  <ul className="list-disc pl-6 space-y-3">
		<li>
		  <strong>Ad-Hoc IT Support</strong> – Ideal for businesses that need help as
		  issues arise. You only pay for the time you need, with no ongoing
		  commitment.
		</li>
		<li>
		  <strong>Ongoing IT Support</strong> – For businesses that want consistent,
		  reliable assistance. We provide regular support, system oversight, and
		  proactive advice to help reduce issues before they impact your business.
		</li>
		<li>
		  <strong>Project-Based Work</strong> – Planned IT projects such as upgrades,
		  migrations, office setups, or security improvements. All project work is
		  scoped and quoted in advance.
		</li>
	  </ul>
	</Section>


     <Section id="services" title="Business IT Services" className="bg-white">
		  {/* Service 1 */}
		  <div className="flex flex-col md:flex-row p-6 rounded-lg mb-6">
			<div className="md:w-2/3 text-white">
			  <h2 className="font-bold text-xl mb-2">Day-to-Day IT Support</h2>
			  <p>
				Reliable support for everyday technical issues affecting your business,
				including user support, hardware and software troubleshooting, network
				issues, and general IT assistance — both remotely and on-site.
			  </p>
			</div>
			<div className="md:w-1/3 mb-4 md:mb-0 md:ml-6 rounded-lg overflow-hidden shadow-lg">
			  <Image
				src="/images/support.jpg"
				alt="Business IT Support"
				width={300}
				height={200}
				className="object-cover transition-transform hover:scale-105"
			  />
			</div>
		  </div>

		  {/* Service 2 */}
		  <div className="flex flex-col md:flex-row p-6 rounded-lg mb-6">
			<div className="md:w-2/3 text-white">
			  <h2 className="font-bold text-xl mb-2">
				Network & Infrastructure Support
			  </h2>
			  <p>
				Setup, maintenance, and troubleshooting of business networks, internet
				connectivity, Wi-Fi, and connected devices to ensure stable and secure
				day-to-day operations.
			  </p>
			</div>
			<div className="md:w-1/3 mb-4 md:mb-0 md:ml-6 rounded-lg overflow-hidden shadow-lg">
			  <Image
				src="/images/network.jpg"
				alt="Business Network Support"
				width={300}
				height={200}
				className="object-cover transition-transform hover:scale-105"
			  />
			</div>
		  </div>

		  {/* Service 3 */}
		  <div className="flex flex-col md:flex-row p-6 rounded-lg mb-6">
			<div className="md:w-2/3 text-white">
			  <h2 className="font-bold text-xl mb-2">
				Cyber Security & Data Protection
			  </h2>
			  <p>
				Practical security improvements including antivirus solutions, system
				hardening, user awareness, and clear advice to help reduce risk and
				protect sensitive business data.
			  </p>
			</div>
			<div className="md:w-1/3 mb-4 md:mb-0 md:ml-6 rounded-lg overflow-hidden shadow-lg">
			  <Image
				src="/images/security.jpg"
				alt="Cyber Security"
				width={300}
				height={200}
				className="object-cover transition-transform hover:scale-105"
			  />
			</div>
		  </div>

		  {/* Service 4 */}
		  <div className="flex flex-col md:flex-row p-6 rounded-lg mb-6">
			<div className="md:w-2/3 text-white">
			  <h2 className="font-bold text-xl mb-2">Project-Based IT Work</h2>
			  <p>
				Support for planned or larger IT projects such as new system setups,
				office moves, upgrades, migrations, or security improvements. All project
				work is scoped and quoted based on your requirements.
			  </p>
			</div>
			<div className="md:w-1/3 mb-4 md:mb-0 md:ml-6 rounded-lg overflow-hidden shadow-lg">
			  <Image
				src="/images/project.jpg"
				alt="IT Projects"
				width={300}
				height={200}
				className="object-cover transition-transform hover:scale-105"
			  />
			</div>
		  </div>
		</Section>


	  <Section id="comparison" title="Home vs Business IT Support" className="bg-black">
		  <div className="overflow-x-auto">
			<table className="w-full border border-gray-300 text-left">
			  <thead className="bg-gray-100">
				<tr>
				  <th className="border px-4 py-2 text-black">Home Users</th>
				  <th className="border px-4 py-2 text-black">Business Users</th>
				</tr>
			  </thead>
			  <tbody>
				<tr>
				  <td className="border px-4 py-2">Personal devices & home networks</td>
				  <td className="border px-4 py-2">Business systems & users</td>
				</tr>
				<tr>
				  <td className="border px-4 py-2">Flexible, ad-hoc support</td>
				  <td className="border px-4 py-2">Structured, reliability-focused support</td>
				</tr>
				<tr>
				  <td className="border px-4 py-2">£45 per hour</td>
				  <td className="border px-4 py-2">£75 per hour</td>
				</tr>
				<tr>
				  <td className="border px-4 py-2">General security guidance</td>
				  <td className="border px-4 py-2">Business-grade security & data protection</td>
				</tr>
			  </tbody>
			</table>
		  </div>
		</Section>

		<Section id="pricing" title="Business Pricing" className="bg-white">
		  Transparent, professional pricing designed for local businesses.
		  <ul>
			<h2 className="font-bold py-4">
			  Business Support Rates
			</h2>
			<p>
			  Our standard rate for business IT support is <strong>£75 per hour</strong>,
			  covering both remote and on-site assistance.
			  <br /><br />
			  For businesses that require regular support, we can offer tailored ongoing
			  support arrangements designed to provide priority assistance and improved
			  cost predictability.
			  <br /><br />
			  Project-based work is quoted individually based on scope, complexity, and
			  timescales, ensuring clear expectations before work begins.
			</p>
		  </ul>
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
