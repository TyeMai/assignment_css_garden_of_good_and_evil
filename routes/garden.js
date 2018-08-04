const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  const preferences = req.cookies.preferences
  if(!preferences.name){
    preferences.name = "new you!"
  }
  if(!preferences.good_evil){
    preferences.good_evil = "neutral"
  }


  res.render("garden", {
    preferences
  })
})

router.post('/', (req, res) => {
  const preferences = req.cookies.preferences || {} //but in the examples they use []

  const name = req.cookies.preferences.name || req.body.name
  const good_evil =  if(req.body.good_evil === ''){

  } || req.cookies.preferences.good_evil
  const food = req.body.food || req.cookies.preferences.food
  const color = req.body.color || req.cookies.preferences.color
  const insanity_level = req.body.insanity_level || req.cookies.preferences.insanity_level


  res.cookie('preferences', {good_evil, food, color, insanity_level, name})

  console.log(preferences)
  res.redirect('/garden') //interesting

})



module.exports = router
