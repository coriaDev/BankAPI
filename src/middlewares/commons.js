const {validationResult} = require("express-validator");
const {apiError} = require('../handlers/apiError');

const validResult = (req, res, next) => {
    const errors = validationResult(req)
    console.log(errors.errors[0]);
    if(!errors.isEmpty()) {
        throw new apiError('Validation Error', 400, errors.errors);
    }
    next();
}

module.exports = {
    validationResult : validResult
}