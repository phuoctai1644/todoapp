## APIs for todo

| API | Method | Data format | Describe |
| :- | :-: | :-| :- |
| http://localhost:8000/api/todo| GET || Get all todo of user |
| http://localhost:8000/api/todo | POST | Body:<br>{<br>content: string <br> group: string<br>} | Create a new todo |
| http://localhost:8000/api/todo/:id | PUT | Body:<br>{<br>content: string <br> group: string<br>} | Update todo |
| http://localhost:8000/api/todo/:id | DELETE |  | Delete one todo |
