import React from "react";
import waveImgJpg from "Images/common/wave.jpg";
import waveImgWebP from "Images/webp/wave.webp";
import styles from "IndexStyles/mainContent.scss";

export const MainContent = () => {
	return (
		<main>
			<picture>
				<source className={styles.waveImg} srcSet={waveImgWebP} type="image/webp" />
				<img className={styles.waveImg} src={waveImgJpg} alt="beatiful wave" title="beatiful wave" />
			</picture>
		</main>
	);
};
