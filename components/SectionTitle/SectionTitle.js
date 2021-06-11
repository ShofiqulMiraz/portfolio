import styles from "./SectionTitle.module.scss";

export default function SectionTitle({ title }) {
  return (
    <h1 className={styles.sectiontitle} data-aos="fade-down">
      {title}
    </h1>
  );
}
