const express = require('express');
const router  = express.Router();

const datos = require('../estados.json');

const Add = require('../models/add'); 

router.get('/', (req, res, next) => {

  res.redirect('/1')
  
});

/* GET home page */
router.get('/:page', (req, res, next) => {

  let perPage = 20;
  let {page} = req.params || 1;

  Add.find({}, (err, add) => {
    if(err) {
      console.log(err)
    }
    Add.count({}, (err, total) => {
      let pagination = [];
      for(let i = 1; i <= Math.ceil(total/perPage); i++) {
        pagination.push(i)
      }
      res.render('index', {add, current: page, pages: Math.ceil(total/perPage), pagination})
    });  
  }).skip((perPage * page) - perPage).limit(perPage);
  
});

router.get('/anuncio/:id', (req, res, next) => {
  const {id} = req.params;
  Add.findById({_id:id}, (err, add) => {
    if(err) {
      console.log(err)
    }
    res.render('anuncio-detail',{add})
  });
});

router.get('/formulario', (req, res, next) => {
  res.render('formulario')
})


router.post('/formulario', (req, res, next) => {
  const {title, body, name, phone, email, category, state} = req.body;
  const add = new Add({title, body, name, phone, email, category, state});

  add.save((err, addPost) => {
    if(err) {
      console.log(err)
    }
    res.redirect('/')
  });
});




module.exports = router;
