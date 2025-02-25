import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();

  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </p>
  );
}

//  useFormStatus: gives you status information of the last form submission.
// const { pending, data, method, action } = useFormStatus();

// pending : true - parent <form> is pending submission. Otherwise - false.
// data :  data the parent <form> is submitting,no active submission or no parent <form>, it will be null.
// method : string value of either 'get' or 'post'.
// action : reference to the function passed to the action prop on the parent <form> or (null).
