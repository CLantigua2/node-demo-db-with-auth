function restricted(req, res, next) {
    // if logged in
    if (req.session && req.session.userId) {
        next();
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}

module.exports = { restricted }