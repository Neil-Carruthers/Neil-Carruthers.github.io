import * as React from "react"

import { StaticImage } from 'gatsby-plugin-image';

import Seo from "../components/seo"

import * as styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <main>
      <section>
        <div className={styles.header}>
          <StaticImage
              src="../images/gnomes-design-scaled.png"
              alt="Company logo"
              layout="fixed"
              width={250}
              height={250}
          />
          <h1>We are launching soon!</h1>
        </div>
      </section>
    </main>
  )
}

export const Head = () => <Seo />