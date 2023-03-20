const express = require('express');
const app = express();
const port =3000;

app.use(express.json());



let articles = [
    {
        id: 1,
        title: 'Technology is booming',
        description: 'Technology lorem lorem lorem lorem lorem lorem ',
        author: 'Prabh'
    },
    {
        id: 2,
        title: 'Science is scary',
        description: 'Science lorem lorem lorem lorem lorem lorem ',
        author: 'Daniel'
    },
    {
        id: 3,
        title: 'Maths is boring',
        description: 'Maths lorem lorem lorem lorem lorem lorem ',
        author: 'Mike'
    },
    {
        id: 4,
        title: 'English is a must to know!',
        description: 'English lorem lorem lorem lorem lorem lorem ',
        author: 'David'
    }
]

app.get('/',(req,res)=>{
    res.send("Welcome to Home page!");
})

app.get('/articles',(req,res)=>{
    res.send(articles);
})


app.post('/articles/create',(req,res)=>{
    const newArticle = req.body;

    articles.push(newArticle);
    res.send(articles);
})

app.delete('/articles/delete/:id', (req,res)=>{
    const articleId =req.params.id;
    articles =articles.filter((article)=>article.id !=articleId?true:false);
    res.send(articles);
})

app.listen(port,()=>{
    console.log("Server running on port : "+port);
})