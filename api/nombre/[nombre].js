module.exports = (req, res) => {
    const {
      query: { nombre },
    } = req
  
    res.status(200).send(`Hello ${nombre}!`)
  }
  