const login = (req, res) => {
    //todo:
    //input:phone output:success
    res.status(200).json(req.body);
};

const confirm = (req, res) => {
    //todo:
    //output:toke
    const code = 'sjdfbsdfbasbfidoabsfgbaldsbgls';
    res.status(200).json({ msg: 'right' });
};


module.exports = {
    login,
    confirm
};