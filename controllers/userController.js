module.exports.contact = (req, res, next) => {
    console.log(req.body)

    return res.json({ message: 'contact page'})
}