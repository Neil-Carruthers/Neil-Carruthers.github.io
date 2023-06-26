import * as React from "react"

import Seo from "../components/seo"

import Contact from "../components/Contact/contact.component";
import TopButton from "../components/Buttons/Top/top-button.component";
import SideMenu from "../components/Side-Menu/side-menu.component";

import * as styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <main>
      <SideMenu />
      <section>
        <p className={`${styles.greeting} fixedSys`}>Hi, my name is</p>
        <div className={styles.header}>
          <h1>Neil Carruthers.</h1>
          <h1>I&apos;m passionate about React.</h1>
        </div>
        <p className={styles.summary}>
          Full stack senior developer in React using optimal and current best practices
        </p>
      </section>
      <section>
        <Contact />
      </section>
      <TopButton />
    </main>
  )
}

export const Head = () => <Seo />