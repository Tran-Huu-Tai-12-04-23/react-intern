import React, { useEffect } from 'react';
import { Layout, Card, Button, List, Divider } from 'antd';
import AddTodoForm from './component/AddTodoForm';
import { TodoItem } from './component/TodoItem';
import { TodoState, actionCreators } from './state';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '50rem',
    background: '#fff',
    margin: 'auto',
    position: 'relative',
    padding: '1rem',
    borderRadius: '0.5rem',
};

function MainApp() {
    const dispatch = useDispatch();
    const { addTodo, removeTodo, changeStatusTodo, clearTodo, loadData } = bindActionCreators(actionCreators, dispatch);
    const data = useSelector((state: TodoState) => state.todo);

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <Divider />
            <Content style={contentStyle}>
                <AddTodoForm
                    onAddTodo={(todo) => {
                        addTodo(todo);
                    }}
                />
            </Content>
            <Divider />
            <Content style={contentStyle}>
                <Card title="Todo List">
                    <List
                        locale={{
                            emptyText: "There's nothing to do ^.^:>",
                        }}
                        dataSource={data.todoList}
                        renderItem={(todo) => (
                            <TodoItem
                                todo={todo}
                                onRemove={(id: string) => removeTodo(id)}
                                onChangeStatus={(id: string, status: boolean) => changeStatusTodo(id, status)}
                            />
                        )}
                        pagination={{
                            position: 'bottom',
                            pageSize: 5,
                        }}
                    />
                    {data.todoList.length > 0 && (
                        <Button
                            style={{
                                float: 'left',
                                marginTop: '1rem',
                            }}
                            type="dashed"
                            onClick={clearTodo}
                        >
                            Clear todos
                        </Button>
                    )}
                </Card>
            </Content>
        </>
    );
}

export default MainApp;
