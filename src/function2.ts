const findMax = (l:number[]):string => {
    let result = l[0];
    for (let i = 1; i < l.length; ++i) {
        const entry = l[i];
        if (entry > result) {
            result = entry;
        }
    }
    return result.toString();
}

export default findMax;