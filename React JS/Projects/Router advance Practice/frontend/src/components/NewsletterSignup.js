import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

import classes from './NewsletterSignup.module.css';


function NewsletterSignup() {

  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if(state === "idle" && data?.message){
      window.alert(data.message);
    }
  },[data, state]);

  // useFetcher -  interect with loader & action without loading/transitioning.
  // when some data update behind the sinces.
  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
