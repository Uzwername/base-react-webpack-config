import React from "react";
import styles from "IndexStyles/navigation.scss";

export const Navigation = () => {
	return (
		<nav id={styles.mainNav}>
			<h1>
				Hello, <span className={styles.highlighted}>React</span>!
			</h1>
		</nav>
	);
};