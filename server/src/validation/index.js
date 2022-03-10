import Joi from "joi";

export const validator = (req, res, next) => {
    try {
        const validatorSchema = Joi.object({
            country: Joi.string().required().label("Country")
        })

        const {error} = validatorSchema.validate(req.body);
        
        if (error) {
            return res.status(400).json({
                message: error.details[0].message.split("").join("").replace(/\"/g, "")
            })
        };

        return next();
    } catch (error) {
        return res.status(500).json({
            message: "Oops! Something went wrong."
        })
    }
}