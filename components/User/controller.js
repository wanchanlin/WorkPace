const bcrypt = require('bcrypt');
const userModel = require('./model');

exports.loginForm = (req, res) => {
  res.render('user/login');
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findByEmail(email);

    if (!user) {
      return res.render('user/login', { error: 'Invalid email or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.render('user/login', { error: 'Invalid email or password' });
    }

    // Set user session
    req.session.userId = user._id;
    req.session.userRole = user.role;
    
    res.redirect('/');
  } catch (error) {
    console.error('Login error:', error);
    res.render('user/login', { error: 'An error occurred during login' });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/user/login');
};
const loginForm = (request, response) => {
  response.render("user/login");
}
const login = async (request, response) => {
  //authenticate user and redirect to /user
  let authStatus = await userModel.authenticateUser(request.body.u, request.body.pw);
  if (authStatus) {
    //if authenticated, set session variables for authentication status and username
    request.session.loggedIn = true;
    request.session.user = request.body.u;
    //now redirect to /user
    response.redirect("/user");
  } else {
    response.render("user/login", { err: "User and password not found "});
  }
}
const logout = (request, response) => {
  //destroy session and redirect to home
  request.session.destroy();
  response.redirect("/user/login"); //or you can redirect back to the home page
}
//render the registration page
const registerForm = (request, response) => {
  response.render("user/register");
}
//get values from the registration form and create user
const register = async (request, response) => {
  //get values from form and create new user
  let resultStatus = await userModel.addUser(request.body.u, request.body.pw);
  console.log(`new user: ${resultStatus}`);
  if (resultStatus) {
    //user added successfully
    response.redirect("/user/login");
  } else {
    //user add not successful
    response.render("user/register", { err: "Username already exists" });
  }
}

module.exports = {
  getUser,
  loginForm,
  login,
  logout,
  registerForm,
  register
}