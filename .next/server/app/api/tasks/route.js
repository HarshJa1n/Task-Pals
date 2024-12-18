/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/tasks/route";
exports.ids = ["app/api/tasks/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.ts&appDir=%2FUsers%2Fharshjain%2Fcode%2Fappointy%2Fmeet-sense-app%2Ftask_competition%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshjain%2Fcode%2Fappointy%2Fmeet-sense-app%2Ftask_competition&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.ts&appDir=%2FUsers%2Fharshjain%2Fcode%2Fappointy%2Fmeet-sense-app%2Ftask_competition%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshjain%2Fcode%2Fappointy%2Fmeet-sense-app%2Ftask_competition&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_harshjain_code_appointy_meet_sense_app_task_competition_src_app_api_tasks_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/tasks/route.ts */ \"(rsc)/./src/app/api/tasks/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/route\",\n        pathname: \"/api/tasks\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/route\"\n    },\n    resolvedPagePath: \"/Users/harshjain/code/appointy/meet-sense-app/task_competition/src/app/api/tasks/route.ts\",\n    nextConfigOutput,\n    userland: _Users_harshjain_code_appointy_meet_sense_app_task_competition_src_app_api_tasks_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdGFza3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0YXNrcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmhhcnNoamFpbiUyRmNvZGUlMkZhcHBvaW50eSUyRm1lZXQtc2Vuc2UtYXBwJTJGdGFza19jb21wZXRpdGlvbiUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZoYXJzaGphaW4lMkZjb2RlJTJGYXBwb2ludHklMkZtZWV0LXNlbnNlLWFwcCUyRnRhc2tfY29tcGV0aXRpb24maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaGFyc2hqYWluL2NvZGUvYXBwb2ludHkvbWVldC1zZW5zZS1hcHAvdGFza19jb21wZXRpdGlvbi9zcmMvYXBwL2FwaS90YXNrcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGFza3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90YXNrc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdGFza3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaGFyc2hqYWluL2NvZGUvYXBwb2ludHkvbWVldC1zZW5zZS1hcHAvdGFza19jb21wZXRpdGlvbi9zcmMvYXBwL2FwaS90YXNrcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.ts&appDir=%2FUsers%2Fharshjain%2Fcode%2Fappointy%2Fmeet-sense-app%2Ftask_competition%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshjain%2Fcode%2Fappointy%2Fmeet-sense-app%2Ftask_competition&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/tasks/route.ts":
/*!************************************!*\
  !*** ./src/app/api/tasks/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/data */ \"(rsc)/./src/lib/data.ts\");\n\n\nasync function GET() {\n    try {\n        const data = await (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.getData)();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90YXNrcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDTjtBQUU5QixlQUFlRTtJQUNwQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRixrREFBT0E7UUFDMUIsT0FBT0QscURBQVlBLENBQUNJLElBQUksQ0FBQ0Q7SUFDM0IsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsT0FBT0wscURBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2hhcnNoamFpbi9jb2RlL2FwcG9pbnR5L21lZXQtc2Vuc2UtYXBwL3Rhc2tfY29tcGV0aXRpb24vc3JjL2FwcC9hcGkvdGFza3Mvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJ0AvbGliL2RhdGEnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXREYXRhIiwiR0VUIiwiZGF0YSIsImpzb24iLCJlcnJvciIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tasks/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/data.ts":
/*!*************************!*\
  !*** ./src/lib/data.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   saveData: () => (/* binding */ saveData),\n/* harmony export */   updateTaskStatus: () => (/* binding */ updateTaskStatus)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst dataFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'src/lib/data.json');\nasync function getData() {\n    const data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(dataFilePath, 'utf8');\n    return JSON.parse(data);\n}\nasync function saveData(data) {\n    await fs__WEBPACK_IMPORTED_MODULE_0__.promises.writeFile(dataFilePath, JSON.stringify(data, null, 2));\n}\nasync function updateTaskStatus(taskId, userId) {\n    const data = await getData();\n    const taskIndex = data.tasks.findIndex((task)=>task.id === taskId);\n    if (taskIndex === -1) return null;\n    const task = data.tasks[taskIndex];\n    if (task.assignedTo !== userId) return null;\n    task.completed = true;\n    task.completedBy = userId;\n    task.completedAt = new Date().toISOString();\n    data.tasks[taskIndex] = task;\n    await saveData(data);\n    return task;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvQztBQUNaO0FBR3hCLE1BQU1HLGVBQWVELGdEQUFTLENBQUNHLFFBQVFDLEdBQUcsSUFBSTtBQUV2QyxlQUFlQztJQUNwQixNQUFNQyxPQUFPLE1BQU1QLHdDQUFFQSxDQUFDUSxRQUFRLENBQUNOLGNBQWM7SUFDN0MsT0FBT08sS0FBS0MsS0FBSyxDQUFDSDtBQUNwQjtBQUVPLGVBQWVJLFNBQVNKLElBQWU7SUFDNUMsTUFBTVAsd0NBQUVBLENBQUNZLFNBQVMsQ0FBQ1YsY0FBY08sS0FBS0ksU0FBUyxDQUFDTixNQUFNLE1BQU07QUFDOUQ7QUFFTyxlQUFlTyxpQkFBaUJDLE1BQWMsRUFBRUMsTUFBeUI7SUFDOUUsTUFBTVQsT0FBTyxNQUFNRDtJQUNuQixNQUFNVyxZQUFZVixLQUFLVyxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsRUFBRSxLQUFLTjtJQUUzRCxJQUFJRSxjQUFjLENBQUMsR0FBRyxPQUFPO0lBRTdCLE1BQU1HLE9BQU9iLEtBQUtXLEtBQUssQ0FBQ0QsVUFBVTtJQUNsQyxJQUFJRyxLQUFLRSxVQUFVLEtBQUtOLFFBQVEsT0FBTztJQUV2Q0ksS0FBS0csU0FBUyxHQUFHO0lBQ2pCSCxLQUFLSSxXQUFXLEdBQUdSO0lBQ25CSSxLQUFLSyxXQUFXLEdBQUcsSUFBSUMsT0FBT0MsV0FBVztJQUV6Q3BCLEtBQUtXLEtBQUssQ0FBQ0QsVUFBVSxHQUFHRztJQUN4QixNQUFNVCxTQUFTSjtJQUVmLE9BQU9hO0FBQ1QiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaGphaW4vY29kZS9hcHBvaW50eS9tZWV0LXNlbnNlLWFwcC90YXNrX2NvbXBldGl0aW9uL3NyYy9saWIvZGF0YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgVGFzaywgVGFza1N0YXRlIH0gZnJvbSAnQC90eXBlcyc7XG5cbmNvbnN0IGRhdGFGaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2xpYi9kYXRhLmpzb24nKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKTogUHJvbWlzZTxUYXNrU3RhdGU+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGRhdGFGaWxlUGF0aCwgJ3V0ZjgnKTtcbiAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlRGF0YShkYXRhOiBUYXNrU3RhdGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgZnMud3JpdGVGaWxlKGRhdGFGaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFza1N0YXR1cyh0YXNrSWQ6IHN0cmluZywgdXNlcklkOiAndXNlcjEnIHwgJ3VzZXIyJyk6IFByb21pc2U8VGFzayB8IG51bGw+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKTtcbiAgY29uc3QgdGFza0luZGV4ID0gZGF0YS50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICBcbiAgaWYgKHRhc2tJbmRleCA9PT0gLTEpIHJldHVybiBudWxsO1xuICBcbiAgY29uc3QgdGFzayA9IGRhdGEudGFza3NbdGFza0luZGV4XTtcbiAgaWYgKHRhc2suYXNzaWduZWRUbyAhPT0gdXNlcklkKSByZXR1cm4gbnVsbDtcbiAgXG4gIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgdGFzay5jb21wbGV0ZWRCeSA9IHVzZXJJZDtcbiAgdGFzay5jb21wbGV0ZWRBdCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgXG4gIGRhdGEudGFza3NbdGFza0luZGV4XSA9IHRhc2s7XG4gIGF3YWl0IHNhdmVEYXRhKGRhdGEpO1xuICBcbiAgcmV0dXJuIHRhc2s7XG59ICJdLCJuYW1lcyI6WyJwcm9taXNlcyIsImZzIiwicGF0aCIsImRhdGFGaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0RGF0YSIsImRhdGEiLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSIsInNhdmVEYXRhIiwid3JpdGVGaWxlIiwic3RyaW5naWZ5IiwidXBkYXRlVGFza1N0YXR1cyIsInRhc2tJZCIsInVzZXJJZCIsInRhc2tJbmRleCIsInRhc2tzIiwiZmluZEluZGV4IiwidGFzayIsImlkIiwiYXNzaWduZWRUbyIsImNvbXBsZXRlZCIsImNvbXBsZXRlZEJ5IiwiY29tcGxldGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/data.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.ts&appDir=%2FUsers%2Fharshjain%2Fcode%2Fappointy%2Fmeet-sense-app%2Ftask_competition%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshjain%2Fcode%2Fappointy%2Fmeet-sense-app%2Ftask_competition&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();