# [Not maintained] React + Webpack base setup (Client side rendering)

This is just a base config of the development environment. It is intended to be used for building React projects that use webpack as the build tool.

The difference with `npx create-react-app rootFolder` is that it's slightly more automatized & extended.

This base is intended to be as homogeneous as possible for any project, yet, there are several minor things that **must be changed before using it**:

+ Git Setup

  - Set-up includes ".gitignore" file, if you clone the repo from GitHub, there's no need to do anything additional. Otherwise, one should run `git init` in order to create an empty .git. Without .git ESLint might not work, because, for an unknown reason, it wants .git or similar to be here.

+ package.json
  - You obviously need to run `npm install`. It's advisable to run `ncu` or similar before that in order to ensure that your new project will be build on the basis of the latest packages.
  - "homepage"
  - "author"
  - "name"
  - "description"
  - "repository"
  - "bugs"
  - "browserslist"
  - ...probably some other information must be changed.

+ HTML Content
  - Particularly title tags in src/markup/index_template.prod.html

+ webpack.common.js
  - title property in webpack.common.js plugins -> FaviconsWebpackPlugin

# Known issues
The default favicon is not well-optimised and might, show a warning on compile which is ok since it is used only for demonstration.

Initially one test in E2E fails & ESLint shows 1 warning on compile which is left as-is for guidance & demonstration.

Warnings about unknown attribute :global() in .scss files are preserved in order to demonstrate the usage of CSS modules & its specific selectors.

# Additional Info

### It is recommended to run `npm run dev` & `npm run test` in parallel since it will play nice together with E2E testing.

### In src -> index -> markup -> index_template.dev.html there might be found content inside the `<div id="app">`.

  The reason for that is that since this set-up is intended for client-side rendering, it might happen that JS in user's browser is disabled. Hence, nothing will be rendered.

  In order to prevent this situation, this additional HTML content is added. It will be displayed in such a situations and automatically deleted by React otherwise.

  However, since it is not needed in 100% of cases (for instance, there's no such a probability if you develop a Chrome plug-in), it is left only in dev version of the HTML template. The production version doesn't contain it by default. So, one should customise this content as needed **and then copy the content to index_template.prod.html** if necessary. **Otherwise, the content will not be included in production build.**

  **Corresponding CSS of the element  will leak to production build if not deleted or commented out**.
