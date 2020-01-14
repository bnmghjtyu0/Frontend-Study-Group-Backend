const express = require('express')

const router = express.Router()

router.get('/1', async (req, res, next) => {
  res.status(200).send({ text: 'this is testing 1' })
})

router.get('/2', async (req, res, next) => {
  await setTimeout(() => res.status(200).json({ text: 'this is testing 22222222222' }), 3000)
})

module.exports = router
