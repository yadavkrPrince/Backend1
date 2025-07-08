const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName="Adidas"
  let SearchText="Search Now"
  let arr=['prince',0,2]
  //ejs ke help se se niche ke sare variable index.ejs me pass ho rhe ahi
  res.render("index",{siteName : siteName, SearchText : SearchText,arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
