import { Link, useSubmit } from "react-router-dom";

import classes from './styles/EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {

    // Take final decision From user
    const proceed = window.confirm('Are you sure?');

    if (proceed) {

      // submit(wrap a formdata when form submits, methods & action="path")
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
