import styles from "./Checkbox.module.css";

type CheckboxProps = {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Checkbox(props: CheckboxProps) {
	return <input className={styles.Checkbox} type="checkbox" checked={props.checked} onChange={props.onChange} />;
}

export default Checkbox;
