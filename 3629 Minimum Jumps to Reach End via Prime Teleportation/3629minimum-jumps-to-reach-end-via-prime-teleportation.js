function minJumps(nums) {
  const n = nums.length;
  if (n === 1) return 0;

  let maxV = 0;
  for (const x of nums) maxV = Math.max(maxV, x);

  // Smallest prime factor sieve (linear sieve)
  const spf = new Int32Array(maxV + 1);
  const primes = [];

  for (let i = 2; i <= maxV; i++) {
    if (spf[i] === 0) {
      spf[i] = i;
      primes.push(i);
    }
    const si = spf[i];
    for (let k = 0; k < primes.length; k++) {
      const p = primes[k];
      const v = i * p;
      if (v > maxV) break;
      spf[v] = p;
      if (p === si) break;
    }
  }
  spf[1] = 1;

  // prime -> indices whose nums[index] is divisible by prime
  const buckets = new Map();

  for (let idx = 0; idx < n; idx++) {
    let x = nums[idx];
    let last = 0;

    while (x > 1) {
      const p = spf[x];
      if (p !== last) {
        let arr = buckets.get(p);
        if (arr === undefined) {
          arr = [];
          buckets.set(p, arr);
        }
        arr.push(idx);
        last = p;
      }
      while (x % p === 0) x /= p;
    }
  }

  const visited = new Uint8Array(n);
  const queue = new Int32Array(n);
  let head = 0, tail = 0;

  queue[tail++] = 0;
  visited[0] = 1;

  let steps = 0;

  while (head < tail) {
    const size = tail - head;

    for (let s = 0; s < size; s++) {
      const i = queue[head++];

      if (i === n - 1) return steps;

      // Adjacent moves
      const left = i - 1;
      if (left >= 0 && !visited[left]) {
        visited[left] = 1;
        queue[tail++] = left;
      }

      const right = i + 1;
      if (right < n && !visited[right]) {
        visited[right] = 1;
        queue[tail++] = right;
      }

      // Prime teleportation
      const val = nums[i];
      if (val > 1 && spf[val] === val) {
        const list = buckets.get(val);
        if (list !== undefined) {
          for (let k = 0; k < list.length; k++) {
            const j = list[k];
            if (!visited[j]) {
              visited[j] = 1;
              queue[tail++] = j;
            }
          }
          buckets.delete(val); // process each prime bucket only once
        }
      }
    }

    steps++;
  }

  return -1;
}