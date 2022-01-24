import React, {useEffect} from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { TodoState } from "../types/todo";

export const TodoList: React.FC = () => {
    const { page, error, loading, todos, limit } : TodoState = useTypedSelector(state => state.todo)
    const { fetchTodos, setTodoActions } = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div style={{display: 'flex'}}>
            {
                pages.map(p =>
                    <div key={p} onClick={() => setTodoActions(p)} style={{border: p === page ? '2px solid green' : '1px solid gray', padding: '5px'}}>
                        {p}
                    </div>)
            }
            </div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
        </div>
    );
};
