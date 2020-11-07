// todos.js

exports.getAllTodos = (request, response) => {
    let todos = [
        {
            'id': '1',
            'title' : 'greeting',
            'body' : 'Hello World from nkrumah sarpong'
        },
        {
            'id': '2',
            'title': 'greeting2',
            'body' : 'Hello2 world2 from nkrumah sarpong'
        }
    ]
    return response.json(todos);
}