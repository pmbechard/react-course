import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Tasks</h1>
      <Todo text='Learn React' />
      <Todo text='Learn Angular' />
      <Todo text='Learn Vue' />
    </div>
  );
}

export default App;
