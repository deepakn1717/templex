const mainMenu = require('../enums/mainOptions')
module.exports = () => {
    console.log('Welcome to templex!!');
    console.log('Please select one of the following (exit to start from the starting)');
    Object.values(mainMenu).forEach(option => console.log(option.toUpperCase()));
}