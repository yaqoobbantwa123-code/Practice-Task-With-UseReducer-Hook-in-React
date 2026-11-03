import { useReducer } from 'react';
import './App.css';

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
    
    case "RESET":
      return 0;
    
    case "INCREMENT_BY_5":
      return state + 5;

    case "DECREMENT_BY_5":
      return state - 5;
    
    default:
      return state;
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer,initialState);

  return (
    <div className='app'>
      
      <div className='counter-card'>

        <span className='tag'>REACT HOOK PRACTICE</span>

        <h1>Counter App</h1>

        <p className='subtitle'>
          Manage your counter with useReducer. 
        </p>

        <div className='counter-display'>
          <span>{count}</span>
        </div>

        <div className='button-group'>

          <button className='btn increment' onClick={() => dispatch({type: "INCREMENT"})}>
            + Increment
          </button>

          <button className='btn decrement' onClick={() => dispatch({type: "DECREMENT"})}>
            - Decrement
          </button>

          <button className='btn increment-five' onClick={() => dispatch({type: "INCREMENT_BY_5"})}>
            +5 Add
          </button>

          <button className='btn decrement-five' onClick={() => dispatch({type: "DECREMENT_BY_5"})}>
            -5 Subtract
          </button>

          <button className='btn reset' onClick={() => dispatch({type: "RESET"})}>
            Reset Counter
          </button>

        </div>

        <p className='footer-text'>
          Built with React useReducer Hook.
        </p>
      </div>
    </div>
  )
}

export default App
