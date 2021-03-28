const visuals = require('../enums/visuals')

module.exports = (data) =>{
    const visualsNumbersList = data.toString().toLocaleLowerCase().trim().split(',');
    let visualsSelectedList = [];
    if (visualsNumbersList.every(number => number > 0 && number <= Object.values(visuals).length)){
        Object.keys(visuals).forEach(visualNumber => {
            if(visualsNumbersList.includes(visualNumber)){
                visualsSelectedList.push(visuals[visualNumber]);
                console.log(`${visuals[visualNumber]} added`)
            }
        })
    }
    else {
        console.log(`only select for following numbers`)
        Object.keys(visuals).forEach(visualKey =>{
            console.log(`${visualKey}: ${visuals[visualKey]}`)
        })
    }
    return visualsSelectedList;
}