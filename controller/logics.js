require('dotenv').config();
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    //todo:
    //input:phone output:success
    const phoneNumber = req.body;
    if (phoneNumber) {
        res.status(200).json(phoneNumber);
    }
    res.status(400).json({ msg: 'phone number missing' });
};

const confirm = (req, res) => {
    //todo:
    //output:toke
    const code = '767654';
    res.status(200).json({ token: generateAccessToken(code) });
};

const generateAccessToken = (code) => {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '100000s' });
}


module.exports = {
    login,
    confirm
};