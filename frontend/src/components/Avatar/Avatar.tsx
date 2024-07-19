import styles from "./Avatar.module.css";

import clsx from "clsx";
import React, { useEffect, useRef } from "react";

type AvatarProps = {
	className?: string;
	alt: string;
};

const teacherPivotOriginX = 250;
const teacherPivotOriginY = 216;

const armPivotOriginX = 23;
const armPivotOriginY = 291;

const armPointerX = 517;
const armPointerY = 0;

function Avatar(props: AvatarProps) {
  const armRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
    if (!armRef.current)
      return;

    armRef.current.style.transformOrigin = `${armPivotOriginX}px ${armPivotOriginY}px`;

    const rect = armRef.current.getBoundingClientRect();

		const onMouseMove = (e: MouseEvent) => {
      const armStartX = rect.x + armPivotOriginX;
      const armStartY = rect.y + armPivotOriginY;

      const armEndX = rect.x + armPointerX;
      const armEndY = rect.y + armPointerY;

      const armAngle = Math.atan2(armEndY - armStartY, armEndX - armStartX) * 180 / Math.PI;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angleDelta = Math.atan2(mouseY - armStartY, mouseX - armStartX) * 180 / Math.PI - armAngle;
    
      armRef.current.style.transform = `rotate(${angleDelta}deg)`;
    };

		window.addEventListener("mousemove", onMouseMove);

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

  armRef

	return (
		<div className={clsx(styles.Avatar, props.className)}>
			<img className={styles.teacher} src="/tlab-website/images/maestro.png" alt={props.alt} />
			<img ref={armRef} className={styles.arm} src="/tlab-website/images/maestro-braccio.png" alt={props.alt} />
		</div>
	);
}

export default Avatar;
