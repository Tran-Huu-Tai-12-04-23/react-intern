import { Tooltip, Tag, List, Button, Popconfirm as ModalConfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Todo } from '../type';

type TodoItemProps = {
    todo: Todo;
    onRemove: (id: string) => void;
    onChangeStatus: (id: string, status: boolean) => void;
};

export const TodoItem = ({ todo, onChangeStatus, onRemove }: TodoItemProps) => {
    return (
        <List.Item
            actions={[
                <Tooltip title={todo.done ? 'Mark as uncompleted' : 'Mark as completed'}>
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={(e) => onChangeStatus(todo.id ? todo.id : '-1', !todo.done)}
                        defaultChecked={todo.done}
                    />
                </Tooltip>,
                <ModalConfirm
                    title="Are you sure you want to delete?"
                    onConfirm={() => {
                        onRemove(todo.id ? todo.id : '-1');
                    }}
                >
                    <Button className="remove-todo-button" type="primary" danger>
                        Remove
                    </Button>
                </ModalConfirm>,
            ]}
            className="list-item"
            key={todo.id}
        >
            <div className="todo-item">
                <Tag color={todo.done ? 'cyan' : 'red'} className="todo-tag">
                    {todo.name}
                </Tag>
            </div>
        </List.Item>
    );
};
