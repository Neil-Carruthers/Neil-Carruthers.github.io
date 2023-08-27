export default function formatDateTime(deltaInMS) {
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

    return `${digits[0]} Days ${digits[1]} Hours ${digits[2]} Minutes ${digits[3]} Seconds`
}