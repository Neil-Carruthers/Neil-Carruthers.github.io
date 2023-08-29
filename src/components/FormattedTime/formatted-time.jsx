import * as React from 'react';

import * as styles from './formatted-time.module.scss';

export default function FormattedTime({ deltaInMS }) {
    const msInADay = 24 * 60 * 60 * 1000;
    const msInAnHour = 60 * 60 * 1000;
    const msInAMinute = 60 * 1000;

    const numberOfDays = deltaInMS / msInADay;
    let remainder = deltaInMS % msInADay;

    const numberOfHours = remainder / msInAnHour;
    remainder = remainder % msInAnHour;

    const numberOfMinutes = remainder / msInAMinute;
    remainder = remainder % msInAMinute;
    
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