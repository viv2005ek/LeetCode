/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let hourAngle = (hour % 12) * 30 + minutes * 0.5;
    let minuteAngle = minutes * 6;

    let diff = Math.abs(hourAngle - minuteAngle);

    return Math.min(diff, 360 - diff);
};