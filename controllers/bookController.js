
let books = []
function createBook(req,res){
try{
const {title,author,publishedDate} = req.body;
let id = Math.ceil(Math.random())
books.push({
    "id":id,
    "title":title,
    "author":author,
    "publishedDate":publishedDate
})
res.status(201).send({message:"Book Created Successfully",data:books})

}catch(error){
res.status(500).send({message:"Internal Server error",error:error.message})
}
}

function getBooks(req,res){
try{
    const result = books
    res.status(200).send({message:"Book retrive Successfully",data:result})

}catch(error){
    res.status(500).send({message:"Internal Server error",error:error.message})
}
}

function updateBooks(req,res){
try{
    const {id,title,publishedDate,author} = req.body
    for(let i = 0;i<books.length;i++){
        if(id==books[i].id){
            if(title){
                console.log(title)
                books[i].title = title
            }
            if(publishedDate){
                books[i].publishedDate = publishedDate
            }
            if(author){
                books[i].author = author
            }
        }
    }
    res.status(200).send({message:"Book updated Successfully", data:books})
}catch(error){
    res.status(500).send({message:"Internal Server error",error:error.message})
}
}


function getBook(req,res){
try{

    let result = []
    const {id} = req.body;
    for(let i = 0;i<books.length;i++){
        console.log(books[i])
        if(id==books[i].id){
        let obj = {
            "title":books[i].title,
            "title":books[i].author,
            "title":books[i].publishedDate
        }
         result.push(obj)
        }
    }
    res.status(200).send({message:"Book Created Successfully",data:result})
}catch(error){
    res.status(500).send({message:"Internal Server error",error:error.message})
}
}


function deleteBook(req,res){
try{

    const {id} = req.body;
    for(let i = 0;i<books.length;i++){
        console.log(books[i])
        if(id==books[i].id){
         books.splice(i)
        }
    }
    res.status(200).send({message:"Book deleted Successfully",data:books})
}catch(error){
    res.status(500).send({message:"Internal Server error",error:error.message})
}
}


module.exports = {
    createBook,
    getBooks,
    updateBooks,
    getBook,
    deleteBook

}
