import styles from "./MaleAvatar.module.css";

import clsx from "clsx";
import { useEffect, useRef } from "react";

type MaleAvatarProps = {
	className?: string;
	alt: string;
};

const teacherPivotOriginX = 193;
const teacherPivotOriginY = 181;

const armPivotOriginX = 21;
const armPivotOriginY = 198;

const armPointerX = 373;
const armPointerY = 0;

function MaleAvatar(props: MaleAvatarProps) {
	const teacherRef = useRef<HTMLImageElement>(null);
	const armRef = useRef<HTMLImageElement>(null);

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
		<div className={clsx(styles.MaleAvatar, props.className)}>
			<img ref={teacherRef} className={styles.teacher} src="/tlab-website/images/maestro.png" alt={props.alt} />
			<img ref={armRef} className={styles.arm} src="/tlab-website/images/maestro-braccio.png" />
		</div>
	);
}

export default MaleAvatar;
