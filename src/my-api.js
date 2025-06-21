export const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) throw new Error('Network error');
  return res.json();
};

export const postTodo = async (newTodo) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Failed to post todo');
  return res.json();
};
