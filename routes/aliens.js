const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');
module.exports = router;

router.get('/', async(req, res) => {
        try {
            const aliens = await Alien.find();
            res.json(aliens);
        } catch( err ) {
            res.send('Error ' + err);
        }
});

router.get('/:id', async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch( err ) {
        res.send('Error ' + err);
    }
});

router.patch('/:id', async(req, res) => {

    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub= req.body.sub;
        const a1= await alien.save()
        res.json(a1);
    }catch(err) {
        res.send('Error')
    }
})

router.delete('/:id', async(req, res) => {

    try {
        console.log(req.params.id)
        const alien = await Alien.remove({"_id":req.params.id})
        console.log(alien)
        res.json(alien);
    }catch(err) {
        res.send('Error')
    }
})

router.post('/', async(req, res) => {

        const alien = new Alien({
                name: req.body.name,
                tech: req.body.tech,
                sub: req.body.sub

            })

            try{
            const a1 = await alien.save();
            res.json(a1);

            }catch(err) {
                res.send('Error');
            }

})

