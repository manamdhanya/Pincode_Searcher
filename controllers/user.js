const User = require('../models/usersDB')
const { v4: uuidv4 } = require('uuid')
const { setUser } = require('../service/auth')

async function handleSignup(req, res) {
  try {
    const { name, email, password } = req.body
    await User.create({ name, email, password })
    return res.redirect('/')
  } catch (error) {
    res.status(500).send("Signup failed")
  }
}

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).render("login", { error: "Wrong email or password!" });
    }

    // const sessionID = uuidv4()
    // setUser(sessionID,user)
    const token = setUser(user)
    // res.cookie('uid', sessionID)

    res.cookie('uid', token)
    return res.redirect('/HomePage?welcome=true');

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).render("login", { error: "Login failed. Please try again later." });
  }
}

function handleLogout(req, res) {
  res.clearCookie("uid")
  res.redirect("/?logout=1")
}

module.exports = { handleSignup, handleLogin, handleLogout }