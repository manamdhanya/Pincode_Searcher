async function loginPage(req, res) {
  res.render('login')
}

async function signupPage (req, res) {
  res.render('signup')
}


const { getUser } = require('../service/auth');

async function HomePage(req, res) {
  const token = req.cookies?.uid;
  if (!token) {
    return res.redirect("/login");
  }

  const user = getUser(token);
  if (!user) {
    return res.redirect("/login");
  }

  const Name = "Mumbai";
  const Pincode = "400001";
  const State = "Maharashtra";
  const Country = "India";

  const welcome = req.query.welcome === 'true'; 

  res.render("HomePage", { Name, Pincode, State, Country, username: user.name, welcome });
}


module.exports = {loginPage,signupPage,HomePage}
