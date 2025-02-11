const basicInfo = require('./basicinfo')
const tasks = require('./tasks')
const components = require('./components');
module.exports = {
    ...basicInfo,
    ...components,
    ...tasks
};
