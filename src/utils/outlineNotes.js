const outlines = require('../enums/outlines');

module.exports = () =>{
    console.log(`---------------------------------------------------
    Please select outlines from the folllwing (use ',' as a seperater)
    `);
    Object.keys(outlines).forEach(outlinesKey =>{
        console.log(`${outlinesKey}: ${outlines[outlinesKey]}`)
    })
}