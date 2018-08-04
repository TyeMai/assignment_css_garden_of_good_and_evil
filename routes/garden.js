const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  const preferences = req.cookies.preferences
  if(!preferences.name){
    preferences.name = "new you!"
  }

  res.render("garden", {
    preferences
  })
})

router.post('/', (req, res) => {
  const preferences = req.cookies.preferences || {} //but in the examples they use []
  const good_evil = req.body.good_evil
  const food = req.body.food
  const color = req.body.color
  const insanity_level = req.body.insanity_level
  const { name } = req.body

  res.cookie('preferences', {good_evil, food, color, insanity_level, name})

  console.log(preferences)
  res.redirect('/garden') //interesting

})



module.exports = router
