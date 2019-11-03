import "IndexStyles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Navigation } from "IndexComponents/navigation";
import { MainContent } from "IndexComponents/mainContent";

if (process.env.NODE_ENV !== `production`) {
	const axe = require( `react-axe` );
	axe(React, ReactDOM, 1000);
}

/* All written
above are just placeholders
to check babel
Delete it */
const getSite = async url => {

	const response = await fetch( url );

	console.log( await response.json() );

};

getSite(`https://services.arcgis.com/hkQNLKNeDVYBjvFE/arcgis/rest/services/BIC/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json`);


let map = new Map([
	[`1`,`2`],
	[`3`,`4`]
])

console.log( map );

const Index = () => {
	return (
		<>
			<Navigation />
			<MainContent />
		</>
	);
};

ReactDOM.render (
	<Index />,
	document.getElementById(`app`)
);
