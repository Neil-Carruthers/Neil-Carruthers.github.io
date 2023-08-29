import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import Seo from "../components/seo"
import Countdown from "../components/Countdown/countdown";

import * as styles from '../styles/home.module.scss';

import { DEADLINE } from "../../lib/constants";

export default function Home() {
  return (
    <section className={styles.container}>
      <header>
        <StaticImage
            src="../images/gnomes-design-scaled.png"
            alt="Company logo"
            layout="fixed"
            width={250}
            height={250}
        />
        <h1>We are launching soon!</h1>
        <Countdown deadline={DEADLINE}/>
      </header>
    </section>
  )
}

export const Head = () => <Seo />