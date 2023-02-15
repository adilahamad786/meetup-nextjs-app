import { MongoClient } from "mongodb";
import Head from 'next/head';
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) { 
  return (
    <>
      <Head>
        <title>A Meetup App</title>
        <meta
          name='description'
          content='This is a huge list of highly active nextjs app.'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() { // this function run during the bulid process and generate meaningfull static page for helps to improve SEO.
    // also able to fetch data form APIs.
  
    const client = await MongoClient.connect(process.env.MONGO_URL);
  
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');
  
    const meetups = await meetupsCollection.find().toArray();
  
    client.close();
  
    return {
      props : {
        meetups : meetups.map(meetup => ({
            title : meetup.title,
            address : meetup.address,
            image : meetup.image,
            id : meetup._id.toString()
          }))
      },
      revalidate : 1  // this time the static page regenerate every 1 second accourding to available data on server side and generate new static page on server for serve a new page after every 1 second.
    };
};

export default HomePage;