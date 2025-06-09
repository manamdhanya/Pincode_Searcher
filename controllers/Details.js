const axios = require('axios');
const { extractPostOfficeData } = require('../helpers/helper');
const { getUser } = require('../service/auth');

async function Details(req, res) {
  const { place } = req.params;
  const token = req.cookies?.uid;
  const user = token ? getUser(token) : null;

  axios.get(`https://api.postalpincode.in/postoffice/${place}`)
    .then(response => {
      const data = response.data;
      const postOfficeData = extractPostOfficeData(data[0]["PostOffice"]);

      if (postOfficeData) {
        res.render('HomePage.ejs', {
          ...postOfficeData,
          username: user?.name || null,
          welcome: false
        });
      } else {
        res.render('HomePage.ejs', {
          Name: 'Not there',
          Pincode: 'Not there',
          State:'Not there',
          Country: 'Not there',
          username: user?.name || null,
          welcome: false
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.send("Didn't get the data");
    });
}

module.exports = { Details };
