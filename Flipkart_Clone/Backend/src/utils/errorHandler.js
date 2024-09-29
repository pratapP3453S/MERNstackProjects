import { ApiError } from "./ApiError.js"

const errorHandler = (err, req, res, next) => {
    if(err instanceof ApiError) {
        return res.status(err.statusCode).json({
            status: "error",
            statusCode: err.statusCode,
            message: err.message,
        });
    }
    return res.status(500).json({
        status: "error",
        statusCode: 500,
        message: "An unexpected error occured",
    })
    next();
}
export { errorHandler }