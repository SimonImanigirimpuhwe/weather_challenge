export  const asyncHandler = (callback) => (req, res, next) => {
    try {
        return callback(req, res, next);
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
};
