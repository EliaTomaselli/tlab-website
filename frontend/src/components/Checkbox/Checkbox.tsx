import styles from "./Checkbox.module.css";

import clsx from "clsx";

type CheckboxProps = {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
};

function Checkbox(props: CheckboxProps) {
	return <input className={clsx(styles.Checkbox, props.className)} type="checkbox" checked={props.checked} onChange={props.onChange} />;
}

export default Checkbox;
