const {businessPlanEngine, businessMarketingEngine} = require('../enginesRules/business');

module.exports = (userSelectedOptions) => {
    businessPlanEngine.run(userSelectedOptions).then(({ events }) => {
        events.map(event => console.log(event.params.message))
    });
    businessMarketingEngine.run(userSelectedOptions).then(({ events }) => {
        events.map(event => console.log(event.params.message))
    });
}