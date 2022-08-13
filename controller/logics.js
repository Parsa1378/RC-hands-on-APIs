require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../model/model');
// const { use } = require('../router/router');
let dict = {};

const login = (req, res) => {
    let { phoneNumber } = req.body;
    if (phoneNumber) {
        let code = Math.floor(Math.random() * 10000);
        dict[phoneNumber] = code;
        res.status(200).json({ phoneNumber, code });
    } else {
        res.status(400).json({ msg: 'phone number missing' });
    }

};

const confirm = async(req, res) => {
    let { phoneNumber, code } = req.body;
    if (dict[phoneNumber] === code) {
        const user = User.build({ phone: phoneNumber, code: code });
        await user.save();
        return res.send({ 'status': 200, 'token': generateAccessToken(code) });
    }
    res.status(404).json({ msg: 'no matching found with this phoneNumber' });
};

const update = async(req, res) => {
    const isValid = jwt.verify(req.header["token"]);
    if (!isValid) {
        return res.status(403).json({ msg: 'token is invalid' });
    }
    let { phoneNumber, fName, lName, phone } = req.body;
    const user = await User.findOne({ where: { phone: phoneNumber } });
    if (!user) {
        return res.status(404).json({ msg: 'user not found' });
    }
    user.set({
        firstName: fName,
        lastName: lName,
        phone: phoneNumber,
    });
    await user.save();
}

const generateAccessToken = (code) => {
    return jwt.sign(code, process.env.TOKEN_SECRET, {});
}


module.exports = {
    login,
    confirm,
    update
};