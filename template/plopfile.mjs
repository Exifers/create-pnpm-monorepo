/** @param plop {import('plop').NodePlopAPI} */
export default function (plop) {
  plop.setGenerator("general", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "package name",
      },
      {
        type: "list",
        name: "type",
        choices: [
          "dom-library",
          "iso-library",
          "node-library",
          "react-app",
          "react-library",
          "node-app",
        ],
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "packages/{{name}}/",
        base: "templates/{{type}}",
        templateFiles: "templates/{{type}}/**/*",
        globOptions: {dot: true},
      },
    ],
  });
}
