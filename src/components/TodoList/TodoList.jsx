import { useSelector } from 'react-redux';
import { todos } from 'redux/todoSlice';

import { Grid, GridItem, Text, Todo } from 'components';

export const TodoList = () => {
  const allTodos = useSelector(todos);

  return (
    <>
      {!allTodos.length && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}

      <Grid>
        {!!allTodos.length &&
          allTodos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                text={todo.text}
                counter={index + 1}
              />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
