const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); // Assuming your User model is in the models directory

exports.signUp = async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      firstName,
      lastName,
      username,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: 'Signup successful! Please login to continue.' });

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.signIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });

    // Return user details along with token
    res.json({
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
      }
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
