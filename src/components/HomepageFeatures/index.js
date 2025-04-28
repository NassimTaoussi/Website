import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Analyser les besoins',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        À l’écoute des utilisateurs et des enjeux métiers, je transforme les idées en cahiers des charges clairs et structurés, garantissant un développement aligné avec les attentes
      </>
    ),
  },
  {
    title: 'Coder des solutions sur mesure',
    Svg: require('@site/static/img/5.svg').default,
    description: (
      <>
        Avec chaque projet, je continue d’améliorer mon code et mes méthodes. Mon objectif : proposer des solutions stables, bien pensées, et adaptées à la réalité du terrain
      </>
    ),
  },
  {
    title: 'Présenter le produit final',
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <>
        Je m’assure que chaque solution livrée soit compréhensible et bien documentée, en accompagnant les clients dans la prise en main du produit, avec clarté et professionnalisme.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

