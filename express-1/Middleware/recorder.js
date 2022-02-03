const recorder = (req, res, next) => {
    req.requestTime = new Date().toLocaleDateString() + new Date().toLocaleTimeString();
    next();
};

module.exports = recorder;