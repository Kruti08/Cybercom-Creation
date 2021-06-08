import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {counterAction} from '../store/index';

const Counter = () => {

  const showCounter = useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  const incrementHandler = () =>{
    dispatch(counterAction.increment());
  }

  const decrementHandler = () =>{
    dispatch(counterAction.decrement());
  }

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
