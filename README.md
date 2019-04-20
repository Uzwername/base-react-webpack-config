Alt-React + Webpack base setup
------

This is just a base config of the development environment. It is intended to be used for building React projects that use webpack as the build tool.

The difference with `npx create-react-app rootFolder` is that it's slightly more automatized & extended.

This base is intended to be as homogeneous as possible for any project, yet, there are several minor things that **must be changed before using it**:

+ Git Setup
••1. Folder includes ".gitignore" file but the repository itself is not started. One needs to start it with `git init` or similar if needed.

+ package.json
••0. You obviously need to run `npm install`. Preferably, before that, to also might run `ncu` if you have corresponding package installed globally.
••1. "homepage"
••2. "author"
••3. "name"
••4. "description"
••5. "repository"
••6. "bugs"
••7. "browserslist"
••8. ...probably some other information must be changed.

+ HTML Content
••1. Particularly title tags in src/markup/index_template.prod.html

+ webpack.common.js
••1. title property in webpack.common.js plugins -> FaviconsWebpackPlugin

+ It is reccomendable to run `npm run dev` & `npm run test` in parallel.