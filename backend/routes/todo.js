import express from 'express'
import todoController from '../controllers/TodoController.js';

const router = express.Router()

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get('/', todoController.getAllTodo)

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
*/
router.post("/", todoController.postTodo);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", todoController.updateTodo);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", todoController.deleteTodo)

export default router
