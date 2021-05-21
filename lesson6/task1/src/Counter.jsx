import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "./counter.actions";

const Counter = ({ counter, decr, incr, res }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decr}>
        -
      </button>
      <span className="counter__value" onClick={res}>
        {counter}
      </span>
      <button className="counter__button" onClick={incr}>
        +
      </button>
    </div>
  );
};

const mapState = (state) => {
  return {
    counter: state,
  };
};

const mapDispatch = {
  decr: decrement,
  incr: increment,
  res: reset,
};

export default connect(mapState, mapDispatch)(Counter);
