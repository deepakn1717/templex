const express = require('express');
const templateEngine = require('../enginesRules/personal')

const templateRouter = express.Router();

templateRouter.get('/', async (req, res) => {
    const facts = {
        preferences: 40,
        personalFoulCount: 40
    }
    const templates = await templateEngine.run(facts);
    res.send(templates.events);
});

module.exports = templateRouter;