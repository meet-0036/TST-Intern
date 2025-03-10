import { redirect } from 'react-router-dom';
import EventForm from "../components/EventForm";

function NewEventPage() {

// after submiting form use should navigate by useNavigate() Hook
//  function submitHandler(e) {
//   e.preventDefault();
//   ....
// }

  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, params }) {

  // Forward using special "Form" element from "react-router"
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw Response.json({ message: 'Could not save event.' }, { status: 500 });
  }

  // handle route by react-router when form submit
  return redirect('/events');
}