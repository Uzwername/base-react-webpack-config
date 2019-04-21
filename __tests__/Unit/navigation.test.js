import React from "react";
import { shallow, render } from "enzyme";
import { Navigation } from "IndexComponents/navigation";

describe (`<Navigation />`, () => {

	const view = render(<Navigation />);

	test(`Is defined`, () => {

		expect(<Navigation />).toBeDefined();

	});

	test(`Contains <nav> tag`, () => {

		expect( view.get(0).tagName ).toEqual(`nav`);

	});

	test(`<Navigation> contains h1 tag`, () => {

		expect( view.children(`h1`).length )
			.toEqual(1);

	});

	test(`A test`, () => {
		
		//expect
	
	});
});