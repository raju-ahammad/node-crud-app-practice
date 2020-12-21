const Post = require('../../models/post')

const getAllPostController = (req, res, next) => {
    Post.find()
        .then(post => {
            res.status(200).json({
                message: "All posts",
                post
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "error ocured",
                error
            })
        })
}

const postPostController = (req, res, next) => {
    const body = req.body;

    const post = new Post({
        title: body.title,
        description: body.description
    })
    post.save()
        .then(data => {
            res.status(201).json({
                message: 'post added',
                post: data
            })
        })
        .catch(err => console.log("error",err))
}

const getSinglePost = (req, res, next) => {
    const id = req.params.id
    Post.findById(id)
        .then(data => {
            res.status(200).json({
                message: "single data",
                data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "error ocured",
                err
            })
        })
}

const postUpdateController = (req, res, next) => {
    const id = req.params.id;
    const body = req.body;

    const post = {
        title: body.title,
        description: body.description
    }

    Post.findByIdAndUpdate(id, post, {new: true})
        .then(updatedData => {
            res.json({
                message: "Updated an item",
                updatedData
            })
        })
        .catch(err => next(err))
}    

const postDeleteController = (req, res, next) => {
    const id = req.params.id;

    Post.findByIdAndRemove(id)
        .then(result => {
            res.json({
                message: "delete a post item",
                result
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "error ocured",
                error: err
            })
        })
}

module.exports = {
    getAllPostController,
    postPostController,
    getSinglePost,
    postUpdateController,
    postDeleteController
}