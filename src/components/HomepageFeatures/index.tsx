import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Teacher-Centric",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: (
            <>
                With snippet-based marking, teachers tag and comment on student work. AI will learn from their marking
                patterns, providing suggestions along the way.
            </>
        ),
    },
    {
        title: "Evidence-Based Insights",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: <>Get structured analytics on student performance, identify patterns across groups.</>,
    },
    {
        title: "Personalised Learning",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                With the help of AI, make connections with their past work and your resources. Share personalised
                feedback and resources with students.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
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

function BackedBy() {
    return (
        <section className={styles.backedBy}>
            <div className="container">
                <div className="text--center">
                    <Heading as="h3">Backed by</Heading>
                    <div className={styles.backedByImages}>
                        <img
                            src={require("@site/static/img/block71.png").default}
                            alt="Block71"
                            width={200}
                            height={200}
                            className={styles.backedByImage}
                        />
                        <img
                            src={require("@site/static/img/nus-computing.png").default}
                            alt="NUS Computing"
                            width={200}
                            height={200}
                            className={styles.backedByImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <BackedBy />
        </>
    );
}
