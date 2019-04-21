#React + Webpack base setup#

This is just a base config of the development environment. It is intended to be used for building React projects & use webpack as the build tool.

The difference with "npx create-react-app rootFolder" is that it is a little bit more automatized & extended.

This base is intended to be as homogeneous as possible for any project, yet, there are several minor things that must be changed before using it:

- Git Setup
Folder includes ".gitignore" file but the repository itself is not started. One needs to start it with something like "git init"

- package.json
"homepage", "author", "name", "description", "repository", "bugs", "browserslist" & probably some other information must be changed.

- Content of HTML title tag in src/markup/index_template.html must be changed.

- webpack.common.js
title in plugins -> FaviconsWebpackPlugin

- It is reccomendable to run "npm run dev" & "npm run test" in parallel.