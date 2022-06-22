module.exports = (req, res, next) => {
  const uid = req.header("user_id")

  if (uid !== "1") return res.sendStatus(400)

  next()
}
