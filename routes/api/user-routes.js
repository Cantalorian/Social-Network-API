const router = require('express').Router();

/** Need routes to:
 * GET all users
 * GET a single user by _id
 * POST a new user
 * POST a new friend to users list
 * PUT to update a user by _id
 * DELETE a user by _id
 * DELETE to remove a friend from user's list
 */

const {
  findAllUsers,
  findUserById,
  newUser,
  addFriend,
  updateUser,
  deleteUser,
  removeFriend
} = require('../../controllers/user-controllers');

router
  .route('/')
  .get(findAllUsers)
  .post(newUser)

router
  .route('/:id')
  .get(findUserById)
  .put(updateUser)
  .delete(deleteUser)

router
  .route('/:userId/friends/:friendsId')
  .post(addFriend)
  .delete(removeFriend)

module.exports = router;