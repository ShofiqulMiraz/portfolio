import styles from "../styles/Contact.module.scss";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const socials = [
  {
    image: "/facebook.svg",
    url: "https://facebook.com/ShofiqulMiraz/",
    name: "Facebook",
  },
  {
    image: "/twitter.svg",
    url: "https://twitter.com/ShofiqulMiraz",
    name: "twitter",
  },
  {
    image: "/github-sign.svg",
    url: "https://github.com/ShofiqulMiraz",
    name: "github",
  },
  {
    image: "/linkedin.svg",
    url: "https://www.linkedin.com/in/shofiqulmiraz/",
    name: "linkedin",
  },
];

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <SectionTitle title="contact" />
        <div className={styles.socialcontainer} data-aos="fade-up">
          {socials.map((social, index) => (
            <a
              href={social.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.image}
                alt={social.name}
                width={50}
                height={50}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
