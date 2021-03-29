const { Engine } = require('json-rules-engine')

let businessPlanEngine = new Engine();
let businessMarketingEngine = new Engine();

businessPlanEngine.addRule({
    conditions: {
        any: [{
            all: [
                {
                fact: 'mainMenuOption',
                operator: 'equal',
                value: 'business'
            }
            , {
                fact: 'outlines',
                operator: 'contains',
                value: 'objectives'
            }, {
                fact: 'tags',
                operator: 'contains',
                value: 'tag1'
            }, {
                fact: 'visuals',
                operator: 'contains',
                value: 'Simple'
            }
        ]
        }]
    },
    event: {
        type: 'templex',
        params: {
            message: {
                templateName: "SimpleBusinessPlane",
                outlines: ['intro', 'objectives', 'marketSummary', 'team', 'charts', 'conclusion'],
                theme: ['simple']
            }
        }
    }
});

businessMarketingEngine.addRule({
    conditions: {
        any: [{
            all: [{
                fact: 'mainMenuOption',
                operator: 'equal',
                value: 'business'
            }, {
                fact: 'outlines',
                operator: 'in',
                value: ['overview', 'sales', 'figures']
            }, {
                fact: 'tags',
                operator: 'in',
                value: ['tag2']
            }, {
                fact: 'visuals',
                operator: 'in',
                value: ['Modren', 'new']
            }]
        }]
    },
    event: {
        type: 'templex',
        params: {
            message: {
                templateName: "ModrenMarketing",
                outlines: ['intro', 'overview', 'sales', 'figures', 'conclusion'],
                theme: ['Modren']
            }
        }
    }
});

module.exports = { businessPlanEngine, businessMarketingEngine };
