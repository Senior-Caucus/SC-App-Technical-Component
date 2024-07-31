import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Instructions</h1>
      <p>Create an About Us page with:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>An <code>&lt;h1&gt;</code> tag displaying "About Us".</li>
        <li className={styles.listItem}>A link to navigate to the about page.</li>
        <li className={styles.listItem}>CSS styling for the page.</li>
        <li className={styles.listItem}>A random image on the page.</li>
      </ul>
      <div className={styles.code}>
        Hints: Use the Link component (see line 1) to create a link to the about page.<br />
        Create a folder named "about" in the "src/app" directory with two files: page.tsx and About.module.css.<br />
        Place random-image.jpg in the public folder.
      </div>
    </div>
  );
}