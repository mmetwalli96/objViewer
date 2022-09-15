import { MyButton } from 'react-stl-obj-viewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyButton onClick={() => console.log('button clicked')}>
        Click here!
      </MyButton>
    </div>
  );
}

export default App;
