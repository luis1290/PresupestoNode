const userRoute = require('./users.routes');
const categoryIncomeRoute = require('./categoryIncomes.routes')
const categorySpentRoute = require('./categorySpent.routes')
const incomeRoute = require('./incomes.routes')
const spentRoute = require('./spents.routes')

// const swaggerUi = require('swagger-ui-express');
// const swaggerDoc = require('../swagger.json');
// const orderRoute = require('./orders.routes');

const apiRouter = (app) => {
  app.use(userRoute);
  app.use(categoryIncomeRoute);
  app.use(categorySpentRoute);
  app.use(incomeRoute);
  app.use(spentRoute);
  // app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}



module.exports = apiRouter