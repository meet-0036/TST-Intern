import { forwardRef, useImperativeHandle, useRef } from "react";
import PortalReactDOM from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // console.log(formattedRemainingTime);

  useImperativeHandle(ref, () => ({
    open() {
      dialog?.current?.showModal();
      // so we can write an logic in this function for container opening
    },
  }));

  return PortalReactDOM.createPortal(
    <dialog ref={dialog} onClose={onReset} className="result-modal">
      {userLost ? <h2>You Lost!</h2> : <h2>Your score : {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;

// When use React 18 or below version
// wrap function and pass as second perameter
// 2. export cosnt ResultModel = forwardRef(function ResultModel({props}, ref))

// React Hook that lets you customize the handle exposed as a ref. {support in React 18 so need forwardRef()}
// useImperativeHandle(ref, createHandle, dependencies?)

// CreatePortal : The createPortal function is not used in this component. It is typically used to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
