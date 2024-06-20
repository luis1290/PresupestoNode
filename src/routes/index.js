const userRoute = require('./users.routes');
const categoryIncomeRoute = require('./categoryIncomes.routes')
const categorySpentRoute = require('./categorySpent.routes')
// const companyRoute = require("./companies.routes")
// const aplicationJobRouter = require('./aplicationjob.routes')
// const interviewRouter = require("./interviews.routes")
// const recruiterRouter = require('./recruiter.routes')
// const swaggerUi = require('swagger-ui-express');
// const swaggerDoc = require('../swagger.json');
// const orderRoute = require('./orders.routes');

const apiRouter = (app) => {
  app.use(userRoute);
  app.use(categoryIncomeRoute);
  app.use(categorySpentRoute);
  // app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}



module.exports = apiRouter