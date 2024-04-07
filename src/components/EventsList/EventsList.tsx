import styles from "./EventsList.module.css";

function EventsList() {
  return (
    <div className={styles.EventsList}>
      <h1>Eventi</h1>
      <ul className={styles.events}>
        <li>Evento 1</li>
        <li>Evento 2</li>
        <li>Evento 3</li>
        <li>Evento 4</li>
        <li>Evento 5</li>
        <li>Evento 6</li>
      </ul>
    </div>
  );
}

export default EventsList;