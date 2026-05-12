/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {
      tasks.sort((a, b) => {
            return (b[1] - b[0]) - (a[1] - a[0]);
        });

        let ans = 0;
        let energy = 0;

        for (const [actual, minimum] of tasks) {

            // If current energy is insufficient,
            // increase initial energy
            if (energy < minimum) {
                ans += (minimum - energy);
                energy = minimum;
            }

            // Complete task
            energy -= actual;
        }

        return ans;
    }