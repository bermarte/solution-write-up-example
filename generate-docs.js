const fs = require("fs");
const jsdoc2md = require("jsdoc-to-markdown");

const options = {
  files: ["./example.js", "manyTrues.js", "mul.js"],
  // Specify the path to your JavaScript source files
};

jsdoc2md
  .render(options)
  .then((markdown) => {
    fs.writeFileSync("./docs.md", markdown); // Adjust the output file path as needed
    console.log("Documentation generated successfully!");
  })
  .catch((err) => {
    console.error("Error generating documentation:", err);
  });
