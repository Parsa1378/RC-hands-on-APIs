require('dotenv').config();
const jwt = require('jsonwebtoken');
let dict = {};

const login = (req, res) => {
    //todo:
    //input:phone output:success
    let { phoneNumber } = req.body;
    if (phoneNumber) {
        let code = Math.floor(Math.random() * 10000);
        dict[phoneNumber] = code;
        //dict.push(newObj);
        res.status(200).json({ phoneNumber, code });
    } else {
        res.status(400).json({ msg: 'phone number missing' });
    }

};

const confirm = (req, res) => {
    //todo:
    //input: req.body=phonenumber
    //output:toke
    let { phoneNumber, code } = req.body;
    if (dict[phoneNumber] === code) {
        return res.send({ 'status': 200, 'token': generateAccessToken(code) });
    }
    // dict.forEach((obj) => {
    //     if (obj.phone === phoneNumber && obj.code === code) {
    //         return res.send({ 'status': 200, 'token': generateAccessToken(code) });
    //     }
    // });

    res.status(404).json({ msg: 'no matching found with this phoneNumber' });
};

const generateAccessToken = (code) => {
    return jwt.sign(code, process.env.TOKEN_SECRET, {});
}


module.exports = {
    login,
    confirm
};