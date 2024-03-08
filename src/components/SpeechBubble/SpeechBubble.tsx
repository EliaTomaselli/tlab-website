import styles from "./SpeechBubble.module.css";

import clsx from "clsx";

type SpeechBubbleProps = {
  text: string;
  className?: string;
};

function SpeechBubble (props: SpeechBubbleProps) {
  return (
    <div className={clsx(styles.SpeechBubble, props.className)}>
      {props.text}
    </div>
  );
}

export default SpeechBubble;