// Router de express
const { Router } = require("express");

const {
  createUserValidator,
  loginUserValidator,
  updateUserValidator,
} = require("../validators/user.validators");

const upload = require("../middlewares/multer.middleware");
const authenticate = require("../middlewares/auth.middleware");
const { createUserController, login, updateUserController, validateUserController, getUserIdController, resetPasswordController, emailResetPassController } = require("../controllers/users.controllers");
const { validateImage } = require("../middlewares/validateImage.middleware");



const router = Router();

router.post("/users", createUserValidator, createUserController);

router.post("/users/login", loginUserValidator, login);

router.put("/editusers/:id", upload, validateImage, updateUserValidator, authenticate, updateUserController);

router.post("/validateuser/:token", validateUserController);

router.get("/users/:id", authenticate, getUserIdController);

router.post("/emailreset", emailResetPassController);

router.put("/resetpassword", resetPasswordController);



// router.get("/user/orders/:id", authenticate, getOrdersByUserId);

module.exports = router;



//npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,avatar:string,url_avatar:string,validate:string
//npx sequelize-cli model:generate --name spent --attributes user_id:integer,category_id:integer,amount:double,date:date,description:string
//npx sequelize-cli model:generate --name income --attributes user_id:integer,category_id:integer,amount:double,date:date,description:string
//npx sequelize-cli model:generate --name categoryIncome --attributes name:string,description:string
//npx sequelize-cli model:generate --name categorySpent --attributes name:string,description:string