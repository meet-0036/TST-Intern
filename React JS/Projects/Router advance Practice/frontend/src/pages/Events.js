import { useLoaderData,json } from "react-router-dom";
// json is deprecated after v7+

import EventsList from "../components/EventsList";

function EventsPage() {
  // backend not work properly ...
  const data = useLoaderData();

  // for 2 way of error handling
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// can't handle hooks or states bcz it's not component.
export async function loader() {
  const response = await fetch("http://localhost:8989/events");

  if (!response.ok) {
    // 2nd. way to hadle error using simply forwarding error with message.
    // return {isError:true, message:"Could not fetch events.."};

    // 3rd. way to generate error : is check if errorElement exist or not, then bubble-up in parent root and display errorElement Component.
    // throw { message: "Could not fetch events..." };

    // 4th. way to forwarding error message in errorElement
    // throw new Response(JSON.stringify({message:"Could not fetch events...."}), {status: 500});

    // alternative of 4
    // throw json({message:"Could not fetch events...."},{status:500});  // json is Deprecated
    throw Response.json({message:"Could not fetch events...."},{status:500});
  } else {
    // const resData = await response.json();
    // return resData.events;

    // for handling Error and status
    return response;
  }
}

// loader : Can wait for fetching data completed then render component

// Response.json(data, options) - sending response

// Fetching Logic
// import { useEffect, useState } from 'react';

// const [isLoading, setIsLoading] = useState(false);
// const [fetchedEvents, setFetchedEvents] = useState();
// const [error, setError] = useState();

// useEffect(() => {
//   async function fetchEvents() {
//     setIsLoading(true);
//     const response = await fetch('http://localhost:8989/events');

//     if (!response.ok) {
//       setError('Fetching events failed.');
//     } else {
//       const resData = await response.json();
//       setFetchedEvents(resData.events);
//     }
//     setIsLoading(false);
//   }

//   fetchEvents();
// }, []);
// return (
//   <>
//     <div style={{ textAlign: 'center' }}>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//     </div>
//     {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//   </>
// );
