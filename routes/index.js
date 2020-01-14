var express = require('express')
var router = express.Router()
const parse = require('csv-parse')
const axios = require('axios')
const googleSheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQf-z7Z9vn6MDmQPO25aamsdAV6oORGDTHhVO_n-CvMdPtKykuH5RDJ9dAJeQkJEUTTHmANmznPeM3C/pub?gid=0&output=csv'

router.get('/articles', async (req, res, next) => {
  const getCsv = async url => {
    const res = await axios.get(url)
    return await new Promise((resolve, reject) => {
      parse(res.data, { columns: true }, (err, output) => err ? reject(err) : resolve(output))
    })
  }
  const datas = await getCsv(googleSheet)
  console.log(datas)
  res.status(200).json({ retCode: 1, retMsg: '', retData: datas })
})

module.exports = router
