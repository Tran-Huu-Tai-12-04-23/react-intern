import { useState } from 'react';
import { Flex, Input, Button } from 'antd';
import { ITodo } from '../models/todo.model';
type AddTodoFormProps = {
    onAddTodo: (todo: ITodo) => void;
};

function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
    const [nameTask, setNameTask] = useState<string>('');
    return (
        <Flex vertical={false} gap={10}>
            <Input value={nameTask} onChange={(e) => setNameTask(e.target.value)} />
            <Button
                type="primary"
                onClick={() => {
                    onAddTodo({
                        name: nameTask,
                        done: false,
                    });
                    setNameTask('');
                }}
            >
                ADD
            </Button>
        </Flex>
    );
}

export default AddTodoForm;
