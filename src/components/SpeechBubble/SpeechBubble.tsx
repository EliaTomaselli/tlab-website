import styles from "./SpeechBubble.module.css";

type SpeechBubbleProps = {
  text: string;
  className?: string;
};

function SpeechBubble (props: SpeechBubbleProps) {
  return (
    <div className={props.className}>
      <div className={styles.SpeechBubble}>
        {props.text}
      </div>
    </div>
  );
}

export default SpeechBubble;