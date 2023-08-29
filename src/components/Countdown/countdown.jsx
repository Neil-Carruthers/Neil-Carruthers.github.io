import * as React from 'react';
import { useState, useEffect } from "react";

import * as styles from './countdown.module.scss';

import { MS_IN_AN_HOUR, MS_IN_A_DAY, MS_IN_A_MINUTE } from '../../../lib/constants';

export default function FormattedTime({ deadline }) {
    const [delta, setDelta] = useState(0);

    setTimeout(() => {
      setDelta(delta - 1000)
    }, 1000)
  
    useEffect(() => {
      const todayDate = new Date();
      const deltaInMS = deadline.getTime() - todayDate.getTime();
      setDelta(deltaInMS);
    }, [deadline])

    const numberOfDays = delta / MS_IN_A_DAY;
    let remainder = delta % MS_IN_A_DAY;

    const numberOfHours = remainder / MS_IN_AN_HOUR;
    remainder = remainder % MS_IN_AN_HOUR;

    const numberOfMinutes = remainder / MS_IN_A_MINUTE;
    remainder = remainder % MS_IN_A_MINUTE;
    
    const numberOfSeconds = remainder / 1000;

    let digits = [numberOfDays, numberOfHours, numberOfMinutes, numberOfSeconds];
    digits = digits.map((digit) => Math.floor(digit));

    return (
        <p className={styles.container}>
            <span>{digits[0]}</span> Days
            {` `}
            <span>{digits[1]}</span> Hours
            {` `}
            <span>{digits[2]}</span> Minutes
            {` `}
            <span>{digits[3]}</span> Seconds
        </p>
    )
}