import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easier than the API</>,
    imageUrl: 'img/startpage_vsteam_api.svg',
    description: (
      <>
        The VSTeam Module makes it easier to use the Azure DevOps API which is not always easy to understand.
      </>
    ),
  },
  {
    title: <>Cross-Version and Platform Tested</>,
    imageUrl: 'img/startpage_cross_tool_platform_tests.svg',
    description: (
      <>
        VSTeam is tested on all major operating systems (windows, ubuntu, maxOs) and tested from TFS 2017 to Azure DevOps Server 2020.
      </>
    ),
  },
  {
    title: <>Quickstart Scripts</>,
    imageUrl: 'img/startpage_kickstarter_samples.svg',
    description: (
      <>
        Use our <a href="https://github.com/MethodsAndPractices/vsteam-quickstart-scripts">quickstart scripts</a> to get you <a href="docs/quickstart-scripts">easily started</a> or contribute your own from your projects.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`The Automation Module for Azure DevOps`}
      description={`siteConfig.tagline`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/overview/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
