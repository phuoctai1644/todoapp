import Todo from "../models/Todo.js"

class TodoController {
    // [GET] /api/todo
    getAllTodo(req, res, next) {
        Todo.find({})
            .then(todo => res.json(todo))
            .catch(err => {
                res.status(404).json({message: 'Todo not found', error: err.message})
            })
    }

    // [POST] /api/todo
    postTodo(req, res, next) {
        const todo = new Todo(req.body)
        todo.save()
    }

    // [PUT] /api/todo/:id
    updateTodo(req, res, next) {
        console.log('Request body', req.body)
        Todo.updateOne({_id: req.params.id}, req.body)
            .then(data => res.json({message: 'Update Successful'}))
    }

    // [DELETE] /api/todo/:id
    deleteTodo(req, res, next) {
        Todo.deleteOne({_id: req.params.id})
            .then(data => res.json({
                message: 'Todo deleted successfully',
                data
            }))
            .catch(err => res.status(404).json({
                message: 'Todo not found',
                error: err.message
            }))
    }
}

export default new TodoController
