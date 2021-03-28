const tags = require('../enums/tags');

module.exports = () => {
    console.log(`---------------------------------------------------
    Please select tags from the folllwing (use ',' as a seperater)
    `);
    Object.keys(tags).forEach(tagKey => {
        console.log(`${tagKey}: ${tags[tagKey]}`)
    })
}