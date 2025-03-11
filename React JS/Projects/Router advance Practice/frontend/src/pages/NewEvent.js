import EventForm from "../components/EventForm";

function NewEventPage() {

// after submiting form use should navigate by useNavigate() Hook
// Handle using hooks/refs and manually send http request.
//  function submitHandler(e) {
//   e.preventDefault();
//   ....
// }

  return <EventForm method="post"/>;
}

export default NewEventPage;
