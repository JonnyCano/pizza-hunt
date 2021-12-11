const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
// This route makes a POST request to the api endpoint for comments, addComment() method in the comment-routes is the callback method arg, mongoose returns the updated data
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
// this route makes a delete request to the api endpoint for comments, removeComment() method in the comment-routes is the callback method arg, mongoose returns the updated data
router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId>
// this route makes a delete request to the api endpoint for comments, removeReply() method in the comment-routes is the callback method arg, mongoose returns the updated data
// Go to this pizza, then look at this particular comment, then delete this one reply
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;