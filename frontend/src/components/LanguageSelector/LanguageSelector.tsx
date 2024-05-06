import styles from "./LanguageSelector.module.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import React from "react";
import clsx from "clsx";

import Arrow from "../Arrow/Arrow";

export type Locale = "en" | "es" | "fr" | "de" | "it";

type LanguageSelectorProps = {
	locales: Locale[];
	selectedLocale: Locale;
	onLocaleChange: (locale: Locale) => void;
	className?: string;
};

type LanguageSelectorState = {
	isOpen: boolean;
};

const localeToFlag: { [key in Locale]: JSX.Element } = {
	en: <i className="fi fi-gb"></i>,
	es: <i className="fi fi-es"></i>,
	fr: <i className="fi fi-fr"></i>,
	de: <i className="fi fi-de"></i>,
	it: <i className="fi fi-it"></i>,
};

const localeToLanguage: { [key in Locale]: string } = {
	en: "English",
	es: "Español",
	fr: "Français",
	de: "Deutsch",
	it: "Italiano",
};

class LanguageSelector extends React.Component<LanguageSelectorProps, LanguageSelectorState> {
	private timeoutId: number | undefined;
	private languageSelector: React.RefObject<HTMLDivElement>;

	constructor(props: LanguageSelectorProps) {
		super(props);

		this.state = { isOpen: false };

		this.languageSelector = React.createRef();

		this.onClickHandler = this.onClickHandler.bind(this);
		this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
		this.onOptionClickHandler = this.onOptionClickHandler.bind(this);

		this.onBlurHandler = this.onBlurHandler.bind(this);
		this.onFocusHandler = this.onFocusHandler.bind(this);
	}

	onClickHandler() {
		this.setState((currentState) => ({
			isOpen: !currentState.isOpen,
		}));
	}

	onOptionClickHandler(locale: Locale) {
		this.props.onLocaleChange(locale);
		this.setState({
			isOpen: false,
		});
	}

	onClickOutsideHandler(event: MouseEvent) {
		if (this.state.isOpen && !this.languageSelector.current!.contains(event.target! as HTMLElement)) {
			this.setState({ isOpen: false });
		}
	}

	// We close the popover on the next tick by using setTimeout.
	// This is necessary because we need to first check if
	// another child of the element has received focus as
	// the blur event fires prior to the new focus event.
	onBlurHandler() {
		this.timeoutId = setTimeout(() => {
			this.setState({
				isOpen: false,
			});
		});
	}

	// If a child receives focus, do not close the popover.
	onFocusHandler() {
		clearTimeout(this.timeoutId);
	}

	componentDidMount() {
		document.addEventListener("click", this.onClickOutsideHandler);
	}

	componentWillUnmount() {
		document.removeEventListener("click", this.onClickOutsideHandler);
	}

	render() {
		return (
			<div
				className={clsx(styles.LanguageSelector, this.props.className)}
				onFocus={this.onFocusHandler}
				onBlur={this.onBlurHandler}
				ref={this.languageSelector}
			>
				<button className={styles.selected} 
				onClick={this.onClickHandler}>
					{localeToFlag[this.props.selectedLocale]}
					{localeToLanguage[this.props.selectedLocale]}
					<Arrow direction="down"></Arrow>
				</button>
				{this.state.isOpen && (
					<div className={styles.options}>
						{this.props.locales.map((locale) => (
							<button
								key={locale}
								className={styles.option}
								onClick={() => this.onOptionClickHandler(locale)}
							>
								{localeToFlag[locale]}
								{localeToLanguage[locale]}
							</button>
						))}
					</div>
				)}
			</div>
		);
	}
}

export default LanguageSelector;
