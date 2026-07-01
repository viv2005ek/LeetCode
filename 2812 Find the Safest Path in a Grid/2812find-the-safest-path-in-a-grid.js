/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const n = grid.length;
    const d = Array.from({length:n},()=>Array(n).fill(-1));
    const q = [];
    let h = 0;

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]){
                d[i][j]=0;
                q.push([i,j]);
            }
        }
    }

    const dir=[[1,0],[-1,0],[0,1],[0,-1]];

    while(h<q.length){
        const [x,y]=q[h++];
        for(const [dx,dy] of dir){
            const a=x+dx,b=y+dy;
            if(a>=0&&a<n&&b>=0&&b<n&&d[a][b]==-1){
                d[a][b]=d[x][y]+1;
                q.push([a,b]);
            }
        }
    }

    function ok(k){
        if(d[0][0]<k||d[n-1][n-1]<k) return false;

        const vis=Array.from({length:n},()=>Array(n).fill(false));
        const q=[[0,0]];
        let h=0;
        vis[0][0]=true;

        while(h<q.length){
            const [x,y]=q[h++];
            if(x==n-1&&y==n-1) return true;

            for(const [dx,dy] of dir){
                const a=x+dx,b=y+dy;
                if(a>=0&&a<n&&b>=0&&b<n&&!vis[a][b]&&d[a][b]>=k){
                    vis[a][b]=true;
                    q.push([a,b]);
                }
            }
        }
        return false;
    }

    let l=0,r=0;
    for(const row of d)
        for(const x of row)
            r=Math.max(r,x);

    while(l<r){
        const m=(l+r+1)>>1;
        if(ok(m)) l=m;
        else r=m-1;
    }

    return l;
};