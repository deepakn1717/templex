const { Engine } = require('json-rules-engine')

let engine = new Engine()

engine.addRule({
    conditions: {
        any: [{
            all: [{
                fact: 'preferences',
                operator: 'equal',
                value: 40
            }, {
                fact: 'personalFoulCount',
                operator: 'greaterThanInclusive',
                value: 5
            }]
        }, {
            all: [{
                fact: 'preferences',
                operator: 'equal',
                value: 48
            }, {
                fact: 'personalFoulCount',
                operator: 'greaterThanInclusive',
                value: 6
            }]
        }, {
            all: [{
                fact: 'preferences',
                operator: 'equal',
                value: 40
            }, {
                fact: 'personalFoulCount',
                operator: 'greaterThanInclusive',
                value: 5
            }]
        }]
    },
    event: {
        type: 'fouledOut',
        params: {
            message: 'Player has fouled out!'
        }
    }
})

module.exports = engine;
