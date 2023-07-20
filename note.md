# How to build this project

`npm init`
`npm install jest`
add a script to run the test by executing
`npm run <testname>` or by running
`node_modules/.bin/jest -- <testname>`

All the JSDoc comments are recognized by VSCode without installing extra SW

You can use a [VSCode extension](https://github.com/oouo-diogo-perdigao/vscode-docthis/tree/master) to help writing JSDoc comments

- We install jsdoc to be able to create the documentation with:
  `npm run doc`

- We install jsdoc-to-markdown to create a markdown file:
  `npm install --save-dev jsdoc-to-markdown`

- we also need a script to run jsdoc-to-markdown (generate-docs.js)

Watch [this tutorial](https://www.youtube.com/watch?v=3RIaH0NnG64) about JSDoc:

[Here](https://github.com/Muhammad-Tahir-S/Edabit-Challenges-Javascript) is where I got one of the code's snippets
