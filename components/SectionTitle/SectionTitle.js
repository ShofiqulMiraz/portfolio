import styles from "./SectionTitle.module.scss";

export default function SectionTitle({ title }) {
    return (
        <h1 className={styles.section_title} data-aos="fade-down">
            {title}
        </h1>
    );
}
