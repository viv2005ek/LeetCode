/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    
    class Helper {
        constructor(starts, durations) {
            const rides = starts.map((s, i) => [s, durations[i]]);
            rides.sort((a, b) => a[0] - b[0]);

            this.n = rides.length;
            this.start = new Array(this.n);
            this.prefDurMin = new Array(this.n);
            this.suffFinishMin = new Array(this.n);

            for (let i = 0; i < this.n; i++) {
                this.start[i] = rides[i][0];
            }

            for (let i = 0; i < this.n; i++) {
                const dur = rides[i][1];
                this.prefDurMin[i] =
                    i === 0 ? dur : Math.min(this.prefDurMin[i - 1], dur);
            }

            for (let i = this.n - 1; i >= 0; i--) {
                const finishVal = rides[i][0] + rides[i][1];
                this.suffFinishMin[i] =
                    i === this.n - 1
                        ? finishVal
                        : Math.min(this.suffFinishMin[i + 1], finishVal);
            }
        }

        lowerBound(target) {
            let l = 0, r = this.n;
            while (l < r) {
                const mid = (l + r) >> 1;
                if (this.start[mid] < target) l = mid + 1;
                else r = mid;
            }
            return l;
        }

        query(t) {
            const idx = this.lowerBound(t);
            let ans = Infinity;

            // rides with start >= t
            if (idx < this.n) {
                ans = Math.min(ans, this.suffFinishMin[idx]);
            }

            // rides with start < t
            if (idx > 0) {
                ans = Math.min(ans, t + this.prefDurMin[idx - 1]);
            }

            return ans;
        }
    }

    let ans = Infinity;

    const water = new Helper(waterStartTime, waterDuration);

    // Land -> Water
    for (let i = 0; i < landStartTime.length; i++) {
        const landFinish = landStartTime[i] + landDuration[i];
        ans = Math.min(ans, water.query(landFinish));
    }

    const land = new Helper(landStartTime, landDuration);

    // Water -> Land
    for (let i = 0; i < waterStartTime.length; i++) {
        const waterFinish = waterStartTime[i] + waterDuration[i];
        ans = Math.min(ans, land.query(waterFinish));
    }

    return ans;
};