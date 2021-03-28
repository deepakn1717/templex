const tags = require('../enums/tags')

module.exports = (data) =>{
    const tagsNumbersList = data.toString().toLocaleLowerCase().trim().split(',');
    let tagsSelectedList = [];
    if (tagsNumbersList.every(number => number > 0 && number <= Object.values(tags).length)){
        Object.keys(tags).forEach(tagNumber => {
            if(tagsNumbersList.includes(tagNumber)){
                tagsSelectedList.push(tags[tagNumber]);
                console.log(`${tags[tagNumber]} added`)
            }
        })
    }
    else {
        console.log(`only select for following numbers`)
        Object.keys(tags).forEach(tagKey =>{
            console.log(`${tagKey}: ${tags[tagKey]}`)
        })
    }
    return tagsSelectedList;
}