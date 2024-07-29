type StuddedBarProps = {
	direction: "h" | "v";
	className?: string;
};

const frameSize = 40;

const studdedBarBackgroundColor = "#c27d61";
// const studdedBarBackgroundColor = "#57433b";

function StuddedBar(props: StuddedBarProps) {
	if (props.direction === "h") {
		return (
			<svg className={props.className} width="100%" height={frameSize}>
				<rect width="100%" height={frameSize} fill={studdedBarBackgroundColor} />
				<rect width="100%" height={frameSize} fill="url(#band-h)" />
			</svg>
		);
	} else {
		return (
			<svg className={props.className} width={frameSize} height="100%">
				<rect width={frameSize} height="100%" fill={studdedBarBackgroundColor}  />
				<rect width={frameSize} height="100%" fill="url(#band-v)" />
			</svg>
		);
	}
}

export default StuddedBar;
