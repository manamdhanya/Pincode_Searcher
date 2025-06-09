const {getUser} = require('../service/auth')

async function restrictTologgedUser(req,res,next){
    const userUid = req.cookies?.uid;

    if(!userUid) {
        return res.render('login')
    }

    const user = getUser(userUid)

    if(!user) {
        return res.render('login')
    }

    req.user = user;
    next()
}

module.exports = {restrictTologgedUser}