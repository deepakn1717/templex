const mainMenu = require('../enums/mainOptions')

module.exports = (data) =>{
    const mainMenuOptionFormated = data.toString().toLocaleLowerCase().trim();
    let mainMenuOption = ''
    switch (mainMenuOptionFormated) {
      case mainMenu.BUSINESS.toLocaleLowerCase():
        mainMenuOption = mainMenu.BUSINESS;
        console.log(`business selected`);
        break;
      case mainMenu.EDUCATION.toLocaleLowerCase():
        mainMenuOption = mainMenu.EDUCATION;
        console.log(`education selected`);
        break;
      case mainMenu.NONPROFIT.toLocaleLowerCase():
        mainMenuOption = mainMenu.NONPROFIT;
        console.log(`non-profit selected`);
        break;
      case mainMenu.PERSONAl.toLocaleLowerCase():
        mainMenuOption = mainMenu.PERSONAl;
        console.log(`personal selected`);
        break;
      default:
        console.log(`Sorry,select only from the oprions given ${[...Object.values(mainMenu)]}, (exit to start from the starting)`);
    }
    return mainMenuOption;
}