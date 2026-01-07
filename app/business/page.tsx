import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Business() {
  return (
    <>
      <Navbar />

      <Section
        id="intro"
        title="Reliable IT Support for Local Businesses"
        background={
          <>
            <Image
              src="/images/backdrop.jpg"
              alt="BAL-IT Business IT Support"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        }
      >
        <p className="mb-6">
          BAL-IT provides professional, dependable IT support for small and
          medium-sized businesses, helping you stay secure, productive, and
          focused on running your business.
        </p>
        <p>
          We offer responsive on-site and remote support, tailored to the needs
          of modern local businesses.
        </p>
      </Section>

      <Section id="about" title="Business IT Support You Can Depend On" className="bg-white">
        Technology is critical to the day-to-day operation of your business.
        When systems fail, productivity suffers. BAL-IT delivers reliable,
        practical IT support designed to minimise downtime and keep your
        business running smoothly.
        <br /><br />
        With over 10 years of industry experience and more than 20 years of
        hands-on IT expertise, our team understands the challenges businesses
        face when managing technology. We work closely with you to provide
        solutions that are secure, efficient, and aligned with your business
        goals.
        <br /><br />
        As a local IT support provider, we offer a personal, responsive service
        you can rely on — without long contracts or unnecessary complexity.
      </Section>

      <Section id="why-choose-us" title="Why Choose BAL-IT for Your Business" className="bg-white">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Local & Responsive Support</strong> – Fast, reliable
            assistance from a team that understands your business and your
            location.
          </li>
          <li>
            <strong>Business-Focused Expertise</strong> – Practical IT solutions
            designed to support productivity, security, and continuity.
          </li>
          <li>
            <strong>Clear Communication</strong> – Straightforward explanations
            and honest advice, without unnecessary technical jargon.
          </li>
          <li>
            <strong>Security & Risk Awareness</strong> – We help protect your
            systems, data, and users against modern cyber threats.
          </li>
          <li>
            <strong>Flexible Support Options</strong> – From ad-hoc assistance to
            structured project work, we adapt to your needs.
          </li>
        </ul>
      </Section>

      <Section id="services" title="Business IT Services" className="bg-black">
        <ul>
          <h2 className="font-bold py-4">
            Day-to-Day IT Support
          </h2>
          <p>
            Reliable support for everyday technical issues affecting your
            business. This includes user support, troubleshooting hardware and
            software problems, network issues, and general IT assistance — both
            remotely and on-site.
          </p>
        </ul>
        <div className="py-6"></div>

        <ul>
          <h2 className="font-bold py-4">
            Network & Infrastructure Support
          </h2>
          <p>
            Setup, maintenance, and troubleshooting of business networks,
            internet connectivity, Wi-Fi, and connected devices to ensure stable
            and secure operations.
          </p>
        </ul>
        <div className="py-6"></div>

        <ul>
          <h2 className="font-bold py-4">
            Cyber Security & Data Protection
          </h2>
          <p>
            Practical security improvements including antivirus solutions,
            system hardening, user awareness, and advice to help reduce risk and
            protect sensitive business data.
          </p>
        </ul>
        <div className="py-6"></div>

        <ul>
          <h2 className="font-bold py-4">
            Project-Based IT Work
          </h2>
          <p>
            Support for larger or planned pieces of work such as new system
            setups, office moves, upgrades, migrations, or security improvements.
            All project work is quoted based on scope and requirements.
          </p>
        </ul>
        <div className="py-6"></div>
      </Section>

      <Section id="pricing" title="Business Pricing" className="bg-white">
        Transparent, professional pricing designed for businesses.
        <ul>
          <h2 className="font-bold py-4">
            Business Support Rates
          </h2>
          <p>
            Our standard rate for business IT support is <strong>£75 per hour</strong>,
            covering both remote and on-site assistance.
            <br /><br />
            Project-based work is quoted individually based on scope, complexity,
            and timescales. This ensures you receive a clear and fair price before
            work begins.
          </p>
        </ul>
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
