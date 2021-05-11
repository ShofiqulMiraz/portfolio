import styles from "../styles/Services.module.scss";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const services = [
  {
    title: "WEB DESIGN",
    description: "Get Your Website Design Frame With Modern Design Pattern",
    image: "/services/web-design.svg",
  },
  {
    title: "WEB DEVELOPMENT",
    description: "Get Your Website Developed From Scratch With Zero Stress",
    image: "/services/web-development.svg",
  },
  {
    title: "24/7 SUPPORT",
    description: "Get Support 24 Hours In A Day, 7 Days In A Week",
    image: "/services/call-center-agent.svg",
  },
  {
    title: "100% RESPONSIVE",
    description:
      "Get Mobile-First Cross-Browser And Cross-Device Compatible Website",
    image: "/services/responsive-design.svg",
  },
  {
    title: "FASTEST TECH STACK",
    description:
      "Get Developed With MERN, Fastest Technology Stack On Planet Earth",
    image: "/services/fastest-tech.svg",
  },
  {
    title: "SEO FRIENDLY",
    description: "Get Seo Friendly Website For Your Business Growth",
    image: "/services/seo-friendly.svg",
  },
];

const Services = () => {
  return (
    <>
      <div className={styles.container}>
        <SectionTitle title="services" />
        <div className={styles.card}>
          {services.map((service, index) => (
            <div className={styles.content} key={index} data-aos="fade-up">
              <Image
                src={service.image}
                alt={`service-${index}`}
                width={80}
                height={80}
              />
              <h3 className={styles.title}> {service.title} </h3>
              <p className={styles.description}> {service.description} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
