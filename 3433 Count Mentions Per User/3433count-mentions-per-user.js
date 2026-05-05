/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(numberOfUsers, events) {
    const mentions = new Array(numberOfUsers).fill(0);
    const online = new Array(numberOfUsers).fill(true);
    const offlineUntil = new Array(numberOfUsers).fill(0);

    // Sort events by timestamp, OFFLINE first if tie
    events.sort((a, b) => {
        const t1 = Number(a[1]);
        const t2 = Number(b[1]);
        if (t1 !== t2) return t1 - t2;

        // OFFLINE before MESSAGE
        if (a[0] === "OFFLINE" && b[0] === "MESSAGE") return -1;
        if (a[0] === "MESSAGE" && b[0] === "OFFLINE") return 1;
        return null;
    });

    for (let [type, timeStr, data] of events) {
        const t = Number(timeStr);

        // Step 1: bring users back online if time passed
        for (let i = 0; i < numberOfUsers; i++) {
            if (!online[i] && offlineUntil[i] <= t) {
                online[i] = true;
            }
        }

        if (type === "OFFLINE") {
            const id = Number(data);
            online[id] = false;
            offlineUntil[id] = t + 60;
        } else {
            // MESSAGE
            if (data === "ALL") {
                for (let i = 0; i < numberOfUsers; i++) {
                    mentions[i]++;
                }
            } else if (data === "HERE") {
                for (let i = 0; i < numberOfUsers; i++) {
                    if (online[i]) mentions[i]++;
                }
            } else {
                // id mentions (can repeat)
                const tokens = data.split(" ");
                for (let token of tokens) {
                    const id = Number(token.slice(2));
                    mentions[id]++;
                }
            }
        }
    }

    return mentions;
};