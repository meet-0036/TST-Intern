import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter.js";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  // const counter = useSelector((state) => state.counter);
  // const show = useSelector((state) => state.showCounter);
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // test
  // console.log(useSelector((state) => state));
  // console.log(useSelector((state) => state.counter));
  // console.log(useSelector((state) => state.counter.counter));

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 } - default
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const increaseHandler = () => {
  //   dispatch({ type: "increase", amount: 5 });
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// when use class based component, must be import connnect() Hook.
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// //Connect - higher order component.
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// useSelector : taking latest portion, return by Store.
// Selects a specific part of the Redux state.
// component re-renders automatically when the state updates.
