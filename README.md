# React + Webpack base setup

This is just a base config of the development environment. It is intended to be used for building React projects that use webpack as the build tool.

The difference with `npx create-react-app rootFolder` is that it's slightly more automatized & extended.

This base is intended to be as homogeneous as possible for any project, yet, there are several minor things that **must be changed before using it**:

+ Git Setup

  - Set-up includes ".gitignore" file but one should run `git init` in order to create at least empty .git. Without .git ESLint might not work because of an unknown reason.

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

# Known issues
There are 2 warnings that appear on each compile one from Stylelint & another one from eslint-plugin-react.

According to corresponding repos, both are insignificant & will be fixed soon.

Also the default favicon is not well-optimized and hence, shows a warning on compile which is assumed to be ok since it most probably be replaced (or well, optimized).

Also, initially one or more (depending on environment) test in E2E fail & ESLint shows 2 warnings on compile which is left as-is for guidance & demonstration.

# Additional Info

It is reccomendable to run `npm run dev` & `npm run test` in parallel since it will play nice together with E2E testing.
