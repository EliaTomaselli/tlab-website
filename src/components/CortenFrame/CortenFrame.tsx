import clsx from "clsx";
import styles from "./CortenFrame.module.css";

type CortenFrameProps = {
  className?: string;
  children: React.ReactNode;
};

function CortenFrame(props: CortenFrameProps) {
  return (
    <div className={clsx(styles.CortenFrame, props.className)}>
      {props.children}
    </div>
  );
}

export default CortenFrame;