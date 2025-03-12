import { Suspense } from "react";

// import { useParams } from 'react-router-dom';
// import { useLoaderData } from "react-router-dom";
import { useRouteLoaderData, redirect, Await } from "react-router-dom";

import EventItem from "../components/EventItem.js";
import EventsList from "../components/EventsList.js";

function EventDetailPage() {
  // const params = useParams();  // useLoaderData

  // const data = useLoaderData(); // when fetching own loader

  // use parent loader using key.
  // const data = useRouteLoaderData("event-detail");  

  // check defer for wait multiple loads.
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
    
      {/* <EventItem event={data.event} /> */}

      {/* Defer testing - load multiple fetches */}

      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

// Defer testing
async function loadEvent(id) {
  const response = await fetch('http://localhost:8989/events/' + id);

  if (!response.ok) {
    throw Response.json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8989/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw Response.json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;

  return {
    // handle both events for parallel process(Load equal)
    event: await loadEvent(id),
    events:  loadEvents(),
  };
}


/*

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

*/


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



