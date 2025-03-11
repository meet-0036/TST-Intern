// import { useParams } from 'react-router-dom';
// import { useLoaderData } from "react-router-dom";
import { useRouteLoaderData, redirect } from "react-router-dom";

import EventItem from "../components/EventItem.js";

function EventDetailPage() {
  // const params = useParams();  // useLoaderData

  // const data = useLoaderData(); // when fetching own loader

  // use parent loader using key.
  const data = useRouteLoaderData("event-detail");  

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  // when fetch other url data by "request"

  const id = params.eventId;
  // console.log(id);

  const response = await fetch("http://localhost:8989/events/" + id);

  if (!response.ok) {
    return Response.json(
      { message: "Could not fetch details for selected event..." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8989/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw Response.json(
      { message: 'Could not delete event.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/events');
}



