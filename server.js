const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({dest: 'main/uploads/'});

app.use(express.static(__dirname + '/main'));
app.get('/',function(req, res) {
		  res.sendFile('index.html');
    })


    app.post('/',upload.single('myFile'),(req,res)=>{
        let sise = req.file.size;
        res.send({"size":sise})
    })

    app.listen(8085)






