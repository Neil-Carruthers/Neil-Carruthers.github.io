import * as React from "react"
import { useState, useEffect } from "react";
import { StaticImage } from 'gatsby-plugin-image';
import Seo from "../components/seo"
import FormattedTime from "../components/FormattedTime/formatted-time";

import '../styles/home.module.scss';

const deadline = new Date('September 15, 2023 12:00:00');

export default function Home() {
  const [delta, setDelta] = useState(0);

  setTimeout(() => {
    setDelta(delta - 1000)
  }, 1000)

  useEffect(() => {
    const todayDate = new Date();
    const deltaInMS = deadline.getTime() - todayDate.getTime();
    setDelta(deltaInMS);
  }, [])

  return (
    <section>
      <header>
        <StaticImage
            src="../images/gnomes-design-scaled.png"
            alt="Company logo"
            layout="fixed"
            width={250}
            height={250}
        />
        <h1>We are launching soon!</h1>
        <FormattedTime deltaInMS={delta}/>
      </header>
    </section>
  )
}

export const Head = () => <Seo />