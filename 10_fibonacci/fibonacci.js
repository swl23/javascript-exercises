const fibonacci = function(x) {
    const entry = Number(x);
    if (entry >= 1) {
        let fibGrid = [1, 1];
        for (i = 0; i < entry; i++) {
            let nextFibNum = Number(fibGrid[i]) + Number(fibGrid[i+1]);
            fibGrid.push(nextFibNum);
            console.log(fibGrid)
        };
        fibMember = fibGrid[entry-1];
        console.log(fibMember);
        return fibMember;
    }
    else if (entry === 0) {
        return 0;
    }
    else if (entry < 0) {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
