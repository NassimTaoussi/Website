import clsx from 'clsx';
import styles from './styles.module.css';

const StackList = [
    {
      title: 'PHP',
      Svg: require('@site/static/img/icons/PHP.svg').default,
    },
    {
      title: 'Symfony',
      Svg: require('@site/static/img/icons/Symfony.svg').default,
    },
    {
      title: 'Javascript',
      Svg: require('@site/static/img/icons/JavaScript.svg').default,
    },
    {
      title: 'Vue.js',
      Svg: require('@site/static/img/icons/Vue.js.svg').default,
    },
    {
      title: 'React',
      Svg: require('@site/static/img/icons/React.svg').default,
    },
    {
      title: 'MySQL',
      Svg: require('@site/static/img/icons/MySQL.svg').default,
    },
    {
      title: 'PostgresSQL',
      Svg: require('@site/static/img/icons/PostgresSQL.svg').default,
    },
    {
      title: 'Bootstrap',
      Svg: require('@site/static/img/icons/Docker.svg').default,
    },
    {
      title: 'Flutter',
      Svg: require('@site/static/img/icons/Flutter.svg').default,
    },
    {
      title: 'GIT',
      Svg: require('@site/static/img/icons/Git.svg').default,
    },
    {
      title: 'Wordpress',
      Svg: require('@site/static/img/icons/WordPress.svg').default,
    },
    {
      title: 'ApiPlatform',
      Svg: require('@site/static/img/icons/ApiPlatform.svg').default,
    },
  ];

function Stack ({Svg, title}) {
    return (
      <div className={clsx('col col--2')}>
        <div className="text--center">
          <Svg className={styles.stackSvg} role="img" />
        </div>
      </div>
    );
  }

export default function HomepageStack() {
  return (
    <section className={styles.stacks}>
      <div className="container">
        <h3 className={styles.stackTitle}>Stack</h3>
        <div className="row">
          {StackList.map((props, idx) => (
            <Stack key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}