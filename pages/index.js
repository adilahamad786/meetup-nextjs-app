import Head from 'next/head';
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "a1",
    title: "A First Meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5, 12345 some city",
    description: "This is a first meetup!",
  },
  {
    id: "a2",
    title: "A Second Meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5, 12345 some city",
    description: "This is a second meetup!",
  },
];

function HomePage() { 
  return (
    <>
      <Head>
        <title>A Meetup App</title>
        <meta
          name='description'
          content='This is a huge list of highly active nextjs app.'
        />
      </Head>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
}

export default HomePage;