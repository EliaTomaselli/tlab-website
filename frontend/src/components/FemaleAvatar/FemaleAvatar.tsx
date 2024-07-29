import styles from "./FemaleAvatar.module.css";

import clsx from "clsx";
import { useEffect, useRef } from "react";

type FemaleAvatarProps = {
	className?: string;
	alt: string;
};

const teacherPivotOriginX = 173;
const teacherPivotOriginY = 292;

const armPivotOriginX = 225;
const armPivotOriginY = 181;

const armPointerX = 0;
const armPointerY = 0;

function FemaleAvatar(props: FemaleAvatarProps) {
	const armRef = useRef<HTMLImageElement>(null);
	const teacherRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (!teacherRef.current) return;
		if (!armRef.current) return;

		armRef.current.style.left = `${teacherPivotOriginX - armPivotOriginX}px`;
		armRef.current.style.top = `${teacherPivotOriginY - armPivotOriginY}px`;
		armRef.current.style.transformOrigin = `${armPivotOriginX}px ${armPivotOriginY}px`;

		const onMouseMove = (e: MouseEvent) => {
			const rect = teacherRef.current!.getBoundingClientRect();

			const armStartX = rect.x + teacherPivotOriginX;
			const armStartY = rect.y + teacherPivotOriginY;

			const armEndX = rect.x + teacherPivotOriginX + (armPointerX - armPivotOriginX);
			const armEndY = rect.y + teacherPivotOriginY + (armPointerY - armPivotOriginY);

			const armAngle = (Math.atan2(armEndY - armStartY, armEndX - armStartX) * 180) / Math.PI;

			const mouseX = e.clientX;
			const mouseY = e.clientY;

			const angleDelta = (Math.atan2(mouseY - armStartY, mouseX - armStartX) * 180) / Math.PI - armAngle;

			armRef.current!.style.transform = `rotate(${angleDelta}deg)`;
		};

		window.addEventListener("mousemove", onMouseMove);

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<div className={clsx(styles.FemaleAvatar, props.className)}>
			<img ref={teacherRef} className={styles.teacher} src="/tlab-website/images/maestra.png" alt={props.alt} />
			<img ref={armRef} className={styles.arm} src="/tlab-website/images/maestra-braccio.png" />
		</div>
	);
}

export default FemaleAvatar;
