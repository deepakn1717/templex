const visuals = require('../enums/visuals');

module.exports = () =>{
    console.log(`---------------------------------------------------
    Please select visuals from the folllwing (use ',' as a seperater)
    `);
    Object.keys(visuals).forEach(visualKey =>{
        console.log(`${visualKey}: ${visuals[visualKey]}`)
    })
}