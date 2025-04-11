import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Contact.module.scss";

const socials = [
    {
        image: "/contact/facebook.svg",
        url: "https://facebook.com/ShofiqulMiraz/",
        name: "Facebook",
    },
    {
        image: "/contact/twitter.svg",
        url: "https://twitter.com/ShofiqulMiraz",
        name: "twitter",
    },
    {
        image: "/contact/github-sign.svg",
        url: "https://github.com/ShofiqulMiraz",
        name: "github",
    },
    {
        image: "/contact/linkedin.svg",
        url: "https://www.linkedin.com/in/shofiqulmiraz/",
        name: "linkedin",
    },
];

export default function Contact() {
    return (
        <div className={styles.container}>
            <SectionTitle title="contact" />
            <div className={styles.social_container} data-aos="fade-up">
                {socials.map((social, index) => (
                    <div className={styles.contact} key={index}>
                        <a href={social.url} className={styles.contact_btn} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={social.image}
                                alt={social.name}
                                width={30}
                                height={30}
                                data-aos="zoom-in"
                                data-aos-delay="500"
                            />
                            <span data-aos="zoom-out" data-aos-delay="550">
                                Catch on {social.name}
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
