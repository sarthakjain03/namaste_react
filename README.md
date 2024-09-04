# Namaste React 🚀

# Parcel
- npx parcel <filename> to start a local server - dev build
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds - stored in .parcel-cache folder
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browsers
- Performs Diagnostics
- Error Handling
- HTTPS option also - npx parcel <filename> --https
- Tree Shaking - removing unused code
- Difference dev and production builds - npm parcel build <filename>
- Dev build and production build stored in dist folder
- has Babel package

# Babel
- JS compiler/transpiler that converts your code to browser-compatible JS.
- Transforms syntax to compatible version of JS in both current AND older browsers or environments.
- Has a bunch of presets for React, TypeScript.
- Can convert JSX code.
- Does not do type checking of TS when converting to JS.
- For TS use Babel for transpiling and then tsc (TS Compiler) for type checking.
- Pluggable - Built out of plugins.
- Compact - tries to use the least amount of code possible.
- Debuggable - Source map support to easily debug compiled code.
- Source Map - A source map is a file that maps compiled, minified code back to the original source code files. This allows developers to debug the original source code in DevTools instead of the transformed code. Source maps can help developers quickly find the source of an error, especially when compressing code can make debugging more difficult.


Two Types of Exports/Imports:
- Default: export default <func>, import func from 'file_path';
- Named: export const <func> OR export { func }, import { func } from 'file_path';
- Can use both in a single file and import accordingly.

# React Hooks
- Normal JS utility functions.
- useState() - for creating state variables in react. React re-renders the component if this variable changes.
- useEffect() - 