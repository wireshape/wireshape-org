import React from 'react';
import clsx from 'clsx';
import styles from './Highlights.module.css';

const FeatureList = [
    {
        title: 'Open and Reliable Product Data',
        Svg: require('../../static/img/features/qr-code.svg').default,
        description: (
            <>
                Our mission is to decentralize product data, making it useful for consumers to have real,
                complete and relevant information about a product before it is purchased, ensuring greater satisfaction by acquiring what was really expected.
            </>
        ),
    },
    {
        title: '3D/AR NFT Viewer for E-Commecers',
        Svg: require('../../static/img/features/3d-select-face.svg').default,
        description: (
            <>
                Wireshape transforms real products into realistic 3D NFTs, which through Wireshape Viewer can be
                previewed three-dimensionally in detail as well as experienced in the customer's own environment through Augmented Reality technology.
            </>
        ),
    },
    {
        title: 'Community Audited Data',
        Svg: require('../../static/img/features/twitter-verified-badge.svg').default,
        description: (
            <>
                A new product data standard, open and audited by the community. Consumers themselves, as well as
                manufacturers, will be able to suggest and validate the fidelity of product information that is publicly recorded on the blockchain.
            </>
        ),
    },
    {
        title: 'Eco Friendly Blockchain Network',
        Svg: require('../../static/img/features/organic-food.svg').default,
        description: (
            <>
                Wireshape network makes unnecessary energy-intensive mining. Taking action against climate change is
                imperative and provide data about the product/packaging's material is essential, so that consumers are aware of their carbon footprint.
            </>
        ),
    },
    {
        title: 'E-Commerces Migration to the Web3',
        Svg: require('../../static/img/features/keyframes-couple.svg').default,
        description: (
            <>
                Web2 is being replaced by web3 and graphics are moving from 2D to immersive 3D. Wireshape network will help
                make this transition happen to a better shopping experience and customer engagement, with easy-to-implement tools and APIs.
            </>
        ),
    },
    {
        title: 'Educational and Research Web3 Programs',
        Svg: require('../../static/img/features/flask.svg').default,
        description: (
            <>
                Committed to the education and mass adoption of Web3, Wireshape is built on open source technologies and opens doors
                to innovation hubs and educational institutions that want to learn, build and connect with Web3 through flexible solutions.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="padding-horiz--md padding-bottom--md">
                <div className={styles.featureIcon}>
                    {Svg ? <Svg alt={title}/> : null}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Highlights() {
    const Svg = require('../../static/img/features/gradient.svg').default;
    return (
        <section className={styles.features}>
            {<Svg />}
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
