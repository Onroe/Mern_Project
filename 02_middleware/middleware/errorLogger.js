
const { logEvents }  = require('./logger')

const logger = (err,req,res,next) => {
    logEvents(`${err.name}:${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,'reqLog.log')
    console.log(err.stack)
    
    const status = res. statusCode ? res.StatusCode : 500 // server error

    res.status(status)
    res.json({message:err.message})
}

module.exports = logger
