const { Router } = require('express');

const router = Router()

router.get('/files', (req, res, next) => {
  res.json([
      { name: "file1.jpg"}
  ])
})


module.exports = router