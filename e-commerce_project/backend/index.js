const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors')

const { createProduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');
const session = require('express-session');
const csrf = require('csurf');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./model/User');



//middlewares
server.use(session({
    secret: 'keyboard cat',
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
  }));
server.use(passport.authenticate('session'));

server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json()); // to parse req.body
server.use('/products', productsRouter.router);
server.use('/categories', categoriesRouter.router)
server.use('/brands', brandsRouter.router)
server.use('/users', usersRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', cartRouter.router)
server.use('/orders', ordersRouter.router)

passport.use(
    new LocalStrategy(async function verify(username, password, cb) {
        try {
            const user = await User.findOne(
              { email: username },
            ).exec();
            // TODO: this is just temporary, we will use strong password auth
            console.log({user})
            if (!user) {
                done(null, false, { message: 'invalid credentials' })
            } else if (user.password === password) {
              done(null, user);
            } else {
              done(null, false, { message: 'invalid credentials' });
            }
          } catch (err) {
            done(err);
          }
  }));

  passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {id:user.id, role:user.role});
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

main().catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('database connected')
}

server.get('/',(req, res)=>{
    res.json({status:'success'})
})



server.listen(8080, ()=>{
    console.log('server started')
})
