module.exports.root = (req, res, next) => {
    return res.json({ message: 'From app controller'} )
}

module.exports.head = (req, res, next) => {
    if (!req.body.name) return res.json(
        {
            message: 'User must have a name'
        }
    )
    // if (!req.user) return res.json({ message: 'You must send user data' })
    console.log(req.headers)
    next()
}

module.exports.login = (req, res, next) => {
    if (!req.body.email) {
        return res.json(
            {
                message: 'Email required'
            }
        )
    } else if (!req.body.password) {
        return res.json(
            {
                message: "Password also required"
            }
        )
    } else {
        return res.json(
            {
                message: 'You didn\'t submit your email and password'
            }
        )
    }

    console.log(req.headers)
    next()
}

module.exports.product = (req, res, next) => {
    return res.json({ message: 'product controller'} )
}