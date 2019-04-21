React + Webpack base setup
======

This is just a base config of the development environment. It is intended to be used for building React projects that use webpack as the build tool.

The difference with `npx create-react-app rootFolder` is that it's slightly more automatized & extended.

This base is intended to be as homogeneous as possible for any project, yet, there are several minor things that **must be changed before using it**:

+ Git Setup

  - Set-up includes ".gitignore" file & an empty .git folder (created with `git init`). One should set the repo as needed or remove .git.

+ package.json
  - You obviously need to run `npm install`. Preferably, before that, to also might run `ncu` if you have corresponding package installed globally.
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

#### It is reccomendable to run `npm run dev` & `npm run test` in parallel since it will play nice together with E2E testing.
