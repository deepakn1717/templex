const outlines = require('../enums/outlines')

module.exports = (data) =>{
    const outlinesNumbersList = data.toString().toLocaleLowerCase().trim().split(',');
    let outlinesSelectedList = [];
    if (outlinesNumbersList.every(number => number > 0 && number <= Object.values(outlines).length)){
        Object.keys(outlines).forEach(outlineNumber => {
            if(outlinesNumbersList.includes(outlineNumber)){
                outlinesSelectedList.push(outlines[outlineNumber]);
                console.log(`${outlines[outlineNumber]} added`)
            }
        })
    }
    else {
        console.log(`only select for following numbers`)
        Object.keys(outlines).forEach(outlineKey =>{
            console.log(`${outlineKey}: ${outlines[outlineKey]}`)
        })
    }
    return outlinesSelectedList;
}