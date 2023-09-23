# create-pnpm-monorepo
Features:
- pnpm
- react
- fastify
- vite-plugin-node for extra-fast hmr ⚡
- hierarchical typescript and eslint configs
- packages generators using [plopjs](https://plopjs.com/)

# Usage
```
pnpm create pnpm-monorepo
```
Enter your company name. Then `cd` in the generated folder and run `pnpm install`.
Then you can start generating packages:
```
pnpm gen
```
This will prompt you what package type you want to generate, and will create files under the `packages/` folder.

# Package types
- **iso-library**
A package configured to contain code that can run either in the browser or in nodejs.
- **dom-library**
A package configured to contain code that runs in the browser.
- **react-library**
A package configured to contain react components.
- **react-app**
A package based on the official [vite](https://vitejs.dev/) react typescript starter template.
- **node-library**
A package configured to contain code that runs in nodejs.
- **node-app**
A package configured to run fastify using [vite-plugin-node](https://www.npmjs.com/package/vite-plugin-node)

