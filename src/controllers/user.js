const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    } else {
      return res.status(400).json({
        error: 'User does not exist. Please login instead',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
