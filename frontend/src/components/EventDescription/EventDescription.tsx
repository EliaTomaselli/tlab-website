import styles from "./EventDescription.module.css";

type EventDescriptionProps = {
	event: string;
};

function EventDescription(props: EventDescriptionProps) {
	const { event } = props;
  event
	return (
		<div className={styles.EventDescription}>
			<h2>Event Title</h2>
			<p>{event}</p>
		</div>
	);
}

export default EventDescription;
