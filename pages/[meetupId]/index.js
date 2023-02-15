import MeetupDetails from "../../components/meetups/MeetupDetails";
import Head from 'next/head';

function MeetupDetailsPage(props) {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupDetails
        key={props.meetup.id}
        image={props.meetup.image}
        title={props.meetup.title}
        address={props.meetup.address}
        description={props.meetup.description}
      />
    </>
  );
}

export default MeetupDetailsPage;
