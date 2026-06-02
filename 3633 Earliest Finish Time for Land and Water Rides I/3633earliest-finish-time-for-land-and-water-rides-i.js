/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration
) {
    let minLandFinish = Infinity;
    for (let i = 0; i < landStartTime.length; i++) {
        minLandFinish = Math.min(
            minLandFinish,
            landStartTime[i] + landDuration[i]
        );
    }

    let minWaterFinish = Infinity;
    for (let j = 0; j < waterStartTime.length; j++) {
        minWaterFinish = Math.min(
            minWaterFinish,
            waterStartTime[j] + waterDuration[j]
        );
    }

    let ans = Infinity;

    // Land -> Water
    for (let j = 0; j < waterStartTime.length; j++) {
        ans = Math.min(
            ans,
            Math.max(waterStartTime[j], minLandFinish) + waterDuration[j]
        );
    }

    // Water -> Land
    for (let i = 0; i < landStartTime.length; i++) {
        ans = Math.min(
            ans,
            Math.max(landStartTime[i], minWaterFinish) + landDuration[i]
        );
    }

    return ans;
};