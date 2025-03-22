import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generate a unique id 

const initialState = {
    todos: [
        {
            id: 1,
            text: "This is inside a todo list object "
        }
    ]
}
// function sayHello(){
//     console.log("Say hellow ")
// }
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)

        },
    }
})

//export individual reducer
export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer