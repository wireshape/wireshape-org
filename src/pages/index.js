import React from 'react';
import clsx from 'clsx';
import Admonition from '@theme/Admonition';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Highlights from '../components/Highlights';
import ProductHuntCard from '../components/ProductHuntCard';
import styles from './index.module.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function Hero() {
    return (
        <header className={clsx('container', styles.heroBanner)}>
            <div className="row padding-horiz--md">
                <div className="col col--7">
                    <div className={clsx(styles.relative, 'row')}>
                        <div className="col">
                            <h1 className={styles.tagline}>
                                Wireshape is the <br />open blockchain for <br />global product data
                            </h1>
                            <h1 className={styles.tagline}>
                                <span>Wireshape</span> is the <br />open <span>blockchain</span> for <br />global <span>product data</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Modern product information standard to drive the creation of the new generation of decentralized ecommecers through open source technology.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={styles.heroButtons}>
                                <Link to="https://beta.wireshape.org" className={styles.getStarted}>Go to Platform</Link>
                                <iframe src="https://ghbtns.com/github-btn.html?user=wireshape&repo=whitepaper&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.relative, 'col', 'col--5')}>
                    <div className={styles.logoBlur}>
                        <img src={require('../../static/img/blocks.png').default} className={clsx(styles.hideSmall)} />
                    </div>
                </div>
            </div>
        </header>
    );
}

function TopBanner() {
    const HNLogo = require('../../static/img/logo-hn.svg').default;
    const PHLogo = require('../../static/img/logo-ph.svg').default;
    const GHLogo = require('../../static/img/logo-gh.svg').default;
    return (
        <section className={clsx('container', styles.topBanner)}>
            <div className="row">
                <div className="col col--8">
                    <div className={clsx('container', styles.textRow)}>
                        <div className="row">
                            <h1>🎉 Wireshape is out!</h1>
                        </div>
                        <div className="row">
                            Check Wireshape on{' '}
                            <Link to="https://github.com/wireshape/wireshape-org">
                                <GHLogo className={styles.ghLogoSmall} />
                                GitHub
                            </Link>,&nbsp;
                            <Link to="https://news.ycombinator.com/item?id=33521276">
                                <HNLogo className={styles.hnLogoSmall} />
                                Hacker News
                            </Link>
                            &nbsp;and&nbsp;
                            <Link to="https://www.producthunt.com/posts/wireshape-studio-beta">
                                <PHLogo className={styles.phLogoSmall} />
                                Product Hunt
                            </Link>!
                        </div>
                    </div>
                </div>
                <div className={clsx('col col--4', styles.phcard)}>
                    <ProductHuntCard />
                </div>
            </div>
        </section>
    );
}

function Features() {
    return (
        <section className={clsx('container', styles.features)}>
            <div className="row">
                <div className="col col--6">
                    <h2>Wireshape Test</h2>
                    <p>
                        Wireshape
                    </p>
                </div>
                <div className="col col--6">
                    <div className="video-container">
                        <LiteYouTubeEmbed
                            id="S6_g5-Wv6Q4"
                            params="autoplay=1&autohide=1&showinfo=0&rel=0"
                            title="Wireshape, Open Product Data Blockchain"
                            poster="maxresdefault"
                            webp
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

const example = `
const wireshape = 'wire'
`;

function ActorExample() {
    return (
        <section className={clsx(styles.try, 'container')}>
            <div className="col">
                <h2>Try Wireshape out 👾</h2>
                <Admonition type="caution" title="before you start">
                    Wireshape requires <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><b>Node.js 16 or higher</b></a>.
                </Admonition>
                <p>
                    <b>Getting started example</b>.
                    The CLI will install all the necessary dependencies and add boilerplate code for you to play with.
                </p>
                <CodeBlock className="language-bash">
                    npx wireshape create my-wire
                </CodeBlock>
                <p>
                    If you prefer adding Wireshape <b>into your own project</b>, try the example below.
                </p>
                <CodeBlock className="language-bash">
                    npm install wireshape
                </CodeBlock>
                <CodeBlock className="language-typescript">
                    {example}
                </CodeBlock>
            </div>
        </section>
    );
}

export default function Home() {
    // const SvgLogo = require('../../static/img/wireshape-logo.svg').default;
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} · ${siteConfig.tagline}`}
            description={siteConfig.description}>
            <Hero />
            <Highlights />
        </Layout>
    );
}
