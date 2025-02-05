const {schema} = require("../Models/user-model");

const valid = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody; // Replace req.body with parsed data
        next(); 
    } catch (err) {
        const message=err.errors[0].message;
        console.log(message );
        // console.log(error);

        return res.status(400).json({
            message: message,
        });
    }
};




module.exports =valid;