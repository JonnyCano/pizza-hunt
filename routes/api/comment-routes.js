const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
// This route makes a POST request to the api endpoint for comments, addComment() method in the comment-routes is the callback method arg, mongoose returns the updated data
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
// this route makes a delete request to the api endpoint for comments, removeComment() method in the comment-routes is the callback method arg, mongoose returns the updated data
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;