function countBs (s) {
    let count = countChar(s, "B");
    return count;
}

function countChar (s, c) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            count++;
        }
    }
    return count;
}