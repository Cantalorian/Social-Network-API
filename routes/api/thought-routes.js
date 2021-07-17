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