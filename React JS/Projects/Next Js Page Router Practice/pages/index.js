import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
// import { useState, useEffect } from "React";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  // for check pre-rendering data
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// pre-defined function - it's job for pre-rendering props for this component

//Next Js wait for promise to resolve before rendering the component
// This code executes on build process
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://meetdhameliya:nXICEQmu3bHkkPCr@cluster0.mbngr.mongodb.net/meetups_db?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

// getStaicProps: It only executes one when project in build process, so it gives outdated data.
// Is soliving by validate entry with time period rerender data
