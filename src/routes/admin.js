const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

//Aquí dispongo lo referido al nombre del arhivo y a donde se va a guardar
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','img' ,'compus'));
    },
    filename: function (req, file, cb) {
      cb(null, 'compu-'+Date.now() + path.extname(file.originalname));
    }
  })
   
const upload = multer({ storage })

const controllersAdmin = require(path.resolve(__dirname, '..', 'controllers', 'controllersAdmin'));

router.get('/administrar', controllersAdmin.index);
router.get("/administrar/create", controllersAdmin.create);
router.post("/administrar/create", upload.single('image'), controllersAdmin.save);
router.get('/administrar/detail/:id', controllersAdmin.show);
router.get('/administrar/delete/:id', controllersAdmin.destroy);
router.get('/administrar/edit/:id', controllersAdmin.edit);
router.put('/administrar/edit/:id', controllersAdmin.update);



module.exports = router;