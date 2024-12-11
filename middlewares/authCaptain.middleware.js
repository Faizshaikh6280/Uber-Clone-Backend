const jwt = require('jsonwebtoken');
const captainModel = require('../models/captain.model');
const blacklistModel = require('../models/blacklist.model');

module.exports.authCaptain = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'You are not logged in.' });
    }

    const isTokenInBlackList = await blacklistModel.findOne({ token });

    if (isTokenInBlackList) {
      return res.status(401).json({ error: 'You are not logged in.' });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await captainModel.findById(decode?._id);

    if (!user) {
      return res.status(401).json({ error: 'You are not logged in.' });
    }
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
