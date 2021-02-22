import React from 'react';

const Home: React.FC = () => {
  const [todo, setTodo] = React.useState('');

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => setTodo(target.value);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <h2>Home</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">
          What do you need to do?
          <input type="text" id="todo" onChange={handleInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
