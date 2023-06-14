const Joi = require('joi')
const express = require('express');
const app = express();
app.use(express.json());
const courses = [
    {id:1,name:'BCA'},
    {id:2,name:'B.Tech'}
]
app.get('/',(req,res)=>{
    res.send("Hanji ye bi apna hi server hain bas express me bana hain");
});
const port = process.env.Port
app.listen(3000,()=>{console.log("server to fer bi chalega beshaq dynamic port ho")})
app.get('/api/courses',(req,res)=>{
    res.send(courses)
})
app.get('/pooma/:post/:year',(req,res)=>{
    res.send(req.params)
})
app.get('/woods/:post',(req,res)=>{
    res.send(req.query)
})
app.get('/api/courses/:id',(req,res)=>{
    let courseid = req.params.id;
    courses.forEach(element => {
        if (element.id == courseid) {
            res.send(element)
            res.end();
           }
      });

    res.end();
}
)

app.post('/api/courses',(req,res)=>{
    const schema = Joi.object().keys({name: Joi.string().min(3).required()});
        
        const validation = schema.validate(req.body); 
         res.send(validation);
    


    const new_course = {
        id: courses.length + 1,
        name: req.body.name
    }
     courses.push(new_course)
     res.send(courses)
})

app.put('/api/courses/:id',(req,res)=>{

    let courseid = req.params.id;
    courses.forEach(element => {
        if (element.id == courseid) {
            element.name = req.body.name
            res.send(courses)
            res.end();
           }
      });

})

app.delete('/api/courses/:id',(req,res)=>{
let id = req.params.id
courses.forEach(element => {
    if (element.id == id) {
        index = courses.indexOf(element.id)
        courses.splice(index,1)
        res.send(courses)
    }
});

})




