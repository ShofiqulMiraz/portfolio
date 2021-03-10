import styles from "../styles/SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return <h1 className={styles.sectiontitle}>{title} </h1>;
};

export default SectionTitle;
