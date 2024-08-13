import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/updatePost",(req,res)=>{
    console.log(req.body);
    const idNumber = parseInt(req.body.blogId);
    var index = 0;
    for(var i = 0 ; i < blog.length ; i++){
        if(blog[i].blogId == idNumber){
            index = i;
        }
    }
    blog[index].blogName = req.body.blogName;
    blog[index].blogContent = req.body.blogContent;
    res.redirect("/");
});


app.post("/createNew",(req,res)=>{
    console.log(req.body);
    const Name = req.body.blogName;
    const Content = req.body.blogContent;
    const obj = {
        blogId : blog.length + 1,
        blogName : Name,
        blogContent : Content
    }
    blog.push(obj);
    res.redirect("/");
});


app.post("/delete-post",(req,res)=>{
    console.log(req.body);
    const idNumber = req.body.postId;
    for(var i = 0 ; i < blog.length ; i++){
        if(blog[i].blogId == idNumber){
            blog.splice(i,1);
            break;
        }
    }
    res.redirect("/");
});

app.post("/edit-post",(req,res)=>{
    console.log(req.body);
    var index = 0;
    const idNumber = req.body.postId;
    for(var i = 0 ; i < blog.length ; i++){
        if(blog[i].blogId == idNumber){
            index = i;
            break;
        }
    }
    console.log(blog[index]);
    res.render("edit.ejs",{obj : blog[index]});
});

app.post("/delete-post",(req,res)=>{
    console.log(req.body);
    res.render("index.ejs",{blog});
});

app.get("/new",(req,res)=>{
    res.render("new.ejs");
});

app.get("/",(req,res)=>{
    res.render("index.ejs",{blog});
});

app.listen(3000,()=>{
    console.log("Server started at 3000");
});




var blog = [
    {
        blogId : 1,
        blogName : "FirstBlog",
        blogContent : "This is the blog content."
    },
    {
        blogId : 2,
        blogName : "SecondBlog",
        blogContent : "This is the blog content."
    },
    {
        blogId : 3,
        blogName : "ThirdBlod",
        blogContent : "This is the blog content."
    },
    {
        blogId : 4,
        blogName : "FourthBlog",
        blogContent : "This is the blog content."
    }
]