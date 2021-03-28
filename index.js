const express = require('express');
const templateRouter = require('./src/controllers/template');
const mainMenu = require('./src/enums/mainOptions');
const getMainMenuSelected = require('./src/services/getMainMenu');
const dispalyVisualOptions = require('./src/utils/visualsNote');
const dispalyOutlineOptions = require('./src/utils/outlineNotes')
const dispalyTagOptions = require('./src/utils/tagNotes')
const getVisualsSelected = require('./src/services/getVisualsSelected');
const getOutlinessSelected = require('./src/services/getOutlinessSelected');
const getTagsSelected = require('./src/services/getTagsSelected')


const app = express();

console.log('Welcome to templex!!');
console.log('Please select one of the following (exit to start from the starting)');
Object.values(mainMenu).forEach(option => console.log(option.toUpperCase()));

let mainMenuOption = '';
let visuals = [];
let outlines = [];
let tags = [];

process.stdin.on('data', (data) => {
  if (!mainMenuOption && visuals.length === 0 && outlines.length === 0 && tags.length === 0) {
    mainMenuOption = getMainMenuSelected(data);
    if (mainMenuOption) dispalyVisualOptions();
  }
  else if (mainMenuOption && visuals.length === 0 && outlines.length === 0 && tags.length === 0) {
    visuals = getVisualsSelected(data);
    if (mainMenuOption && visuals.length) dispalyOutlineOptions();
  }
  else if (mainMenuOption && visuals.length && outlines.length === 0 && tags.length === 0) {
    outlines = getOutlinessSelected(data);
    if (mainMenuOption && visuals.length && outlines.length) dispalyTagOptions();
  }
  else if (mainMenuOption && visuals.length && outlines.length && tags.length === 0) {
    tags = getTagsSelected(data);
    if (mainMenuOption && visuals.length && outlines.length && tags.length) console.log({ mainMenuOption, visuals, outlines, tags });
  }

});

app.use(express.json())
app.use('/template', templateRouter);

app.get('/', (req, res) => {
  res.send('Hello from root route.')
});

app.listen(3000);

