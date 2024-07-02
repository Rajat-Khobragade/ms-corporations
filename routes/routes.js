const express = require('express');
const router = express.Router();
const { createBook,getBooks,getBook,deleteBook,updateBooks} = require("../controllers/bookController")


router.post("/books",createBook)
router.get("/books",getBooks)
router.get("/book",getBook)
router.delete("/books",deleteBook)
router.put("/books",updateBooks)


module.exports = router