let express = require('express');
let app = express();
let fs = require('fs');

app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(express.static('Public'));

app.get('/' ,(req, res)=>{
    fs.readdir('./Notes', (err,files)=>{
        res.render('index', {files: files});
    })
})

app.post('/create',(req,res)=>{
    
    if(req.body.Title !== ""||req.body.Title !== undefined){
        fs.writeFile(`./Notes/${req.body.Title.split(" ").join("")}.txt`, req.body.Details, (err)=>{
            if (err) console.error(err);
        });
    }
    res.redirect('/');
    
})
app.get('/files/:fileName', (req, res)=>{
    
    fs.readFile(`./Notes/${req.params.fileName}`,'utf-8', (errr,data)=>{
        res.render('data.ejs', {fileName: req.params.fileName, data: data});
    })
})

app.get('/delete/:filename', (req,res)=>{
    fs.unlink(`./Notes/${req.params.filename}`, function (err){
        if(err) console.log(err);
        else{
            console.log('Done');
        }
        res.redirect('/');
    });
})
app.listen(3030);