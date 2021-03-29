const getMainMenuSelected = require('./getMainMenu');
const dispalyVisualOptions = require('../utils/visualsNote');
const dispalyOutlineOptions = require('../utils/outlineNotes')
const dispalyTagOptions = require('../utils/tagNotes')
const getVisualsSelected = require('./getVisualsSelected');
const getOutlinessSelected = require('./getOutlinessSelected');
const getTagsSelected = require('./getTagsSelected');
const processEngineRules = require('./processEngineRules')

module.exports = () => {
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
            if (mainMenuOption && visuals.length && outlines.length && tags.length) {
                console.log('selected options')
                console.log({ mainMenuOption, visuals, outlines, tags });
                processEngineRules({mainMenuOption, visuals, outlines, tags})
            }
        }
    });
}