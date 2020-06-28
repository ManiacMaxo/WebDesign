const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Hello World' })
})

router.get('/about', (req, res, next) => {
    let paragraphs = [
        `First off it's pronounced "buh-goon" and we've a bunch of
        16-17 year olds from Bulgaria who love playing PVP games
        mostly on ps4 but now on PC as well. The clan was first
        created for Destiny 1 when everyone loved the game, but as
        time went on no one really stuck around, however the time
        for Destiny 2 came around and Bungie descided to create a
        reward system for clans so the gang was back together. The
        first year of Destiny 2 was some of the best time for this
        clan, but the PVP was not what it used to be, ultimately
        everyone stopped playing that as well.`,
        `Rainbow Six Siege was the game to bring back hope for the
        clan. When everyone got it, Dark was the first to start
        playing competitively as always, and soon after the rest
        followed. The first few months were chill as no one knew
        really how to play and only admired the pros. Dark and
        ManiacMaxo started duo queueing to reach that diamond rank,
        but school and M&K cheaters would not allow that. They
        peaked at low Platinum 2.`,
        `From the good old days of Black Ops 3 custom games to
        evolving into actual professionals, the Bagun clan has come
        a long way. Now only 4 of the original 13 play regularly but
        some others have also joined.`,
    ]
    res.render('article', { title: 'About Bagun Esports', content: paragraphs })
})

module.exports = router
