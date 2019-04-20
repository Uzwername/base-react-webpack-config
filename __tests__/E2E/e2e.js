require("babel-polyfill");

describe(`Google`, () => {

	beforeAll( async () => {

		await page.goto(`http://localhost:8080/`);

	});

	test(`No re-direct should happen`, async () => {

		const response = await page.goto(`http://localhost:8080/`);
		const chain = response.request().redirectChain();

		expect(chain.length).toEqual(0);

	});

	test(`Page should be titled "Base Settings"`, async () => {

		await expect(page.title()).resolves.toEqual(`Base Settings`);

	});

	test(`Page's h1 tag should contain "Hello"`, async () => {

		const mainHeader = await page.$eval(
			`h1`,
			header => header.textContent
		);

		expect( mainHeader ).toEqual(`Hello`);

	});

});