import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageStacks from '../components/HomepageStacks';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className={styles.pictureMe} src="img/me.png" alt="" />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <p>"Trois années d’expérience ne font pas de moi un expert, mais elles m’ont appris à apprendre vite, à résoudre des problèmes concrets et à toujours viser l’amélioration continue."</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Salut toi !`}
      description="Développeur PHP/Symfony">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageStacks />
      </main>
    </Layout>
  );
}
