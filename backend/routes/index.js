import todoRouter from './todo.js'

function route(app) {
    app.use('/api/todo', todoRouter)
}

export default route
