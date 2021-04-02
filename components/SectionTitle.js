import styles from "../styles/SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return (
    <h1 className={styles.sectiontitle} data-aos="zoom-in">
      {title}
    </h1>
  );
};

export default SectionTitle;
