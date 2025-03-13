// handle 4th way of forwading message & status
import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent.js";
// import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error is occurred!";
  let message = "Something went wrong!";

  // Gives Faciltity to handle multiple Error.status
  if (error.status === 500) {
    // for new Response()
    // message = JSON.parse(error.data).message;

    // for json()
    message = error.data.message;
  }

  if (error.status === 422) {
    message = "Entered value is incorrect!";
  }
  if (error.status === 404) {
    title = "Not Fould!";
    message = "Could not find resources or Page!";
  }

  return (
    <>
      {/* <MainNavigation /> */}
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
