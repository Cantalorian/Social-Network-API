const router = require('express').Router();

/**Create routes to
 * GET all thoughts
 * GET a single thought by _id
 * POST to create a new thought
 * PUT to update a thought by _id
 * DELETE to remove a thought by _id
 * POST to create a reaction
 * DELETE to remove a reaction
 */

const {
  allThoughts,
  oneThought,
  newThought,
  updateThought,
  deleteThought,
  newReaction,
  deleteReaction
} = require('../../controllers/thought-controllers');

router  
  .route('/')
  .post(newThought)
  .get(allThoughts)

router  
  .route('/:id')
  .get(oneThought)
  .put(updateThought)
  .delete(deleteThought)

router  
  .route('/:thoughtId/reactions')
  .post(newReaction)

router
  .route('/:thoughtId/:reactionId')
  .delete(deleteReaction)

module.exports = router;