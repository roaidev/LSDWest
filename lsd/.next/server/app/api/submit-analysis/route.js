"use strict";
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
exports.id = "app/api/submit-analysis/route";
exports.ids = ["app/api/submit-analysis/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubmit-analysis%2Froute&page=%2Fapi%2Fsubmit-analysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-analysis%2Froute.tsx&appDir=%2Fworkspaces%2Fclaude-engineer%2Flsd%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fclaude-engineer%2Flsd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubmit-analysis%2Froute&page=%2Fapi%2Fsubmit-analysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-analysis%2Froute.tsx&appDir=%2Fworkspaces%2Fclaude-engineer%2Flsd%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fclaude-engineer%2Flsd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_claude_engineer_lsd_app_api_submit_analysis_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/submit-analysis/route.tsx */ \"(rsc)/./app/api/submit-analysis/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/submit-analysis/route\",\n        pathname: \"/api/submit-analysis\",\n        filename: \"route\",\n        bundlePath: \"app/api/submit-analysis/route\"\n    },\n    resolvedPagePath: \"/workspaces/claude-engineer/lsd/app/api/submit-analysis/route.tsx\",\n    nextConfigOutput,\n    userland: _workspaces_claude_engineer_lsd_app_api_submit_analysis_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/submit-analysis/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdWJtaXQtYW5hbHlzaXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1Ym1pdC1hbmFseXNpcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1Ym1pdC1hbmFseXNpcyUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGd29ya3NwYWNlcyUyRmNsYXVkZS1lbmdpbmVlciUyRmxzZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGd29ya3NwYWNlcyUyRmNsYXVkZS1lbmdpbmVlciUyRmxzZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWFwcC8/M2MyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvd29ya3NwYWNlcy9jbGF1ZGUtZW5naW5lZXIvbHNkL2FwcC9hcGkvc3VibWl0LWFuYWx5c2lzL3JvdXRlLnRzeFwiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc3VibWl0LWFuYWx5c2lzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3VibWl0LWFuYWx5c2lzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdWJtaXQtYW5hbHlzaXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvd29ya3NwYWNlcy9jbGF1ZGUtZW5naW5lZXIvbHNkL2FwcC9hcGkvc3VibWl0LWFuYWx5c2lzL3JvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc3VibWl0LWFuYWx5c2lzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubmit-analysis%2Froute&page=%2Fapi%2Fsubmit-analysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-analysis%2Froute.tsx&appDir=%2Fworkspaces%2Fclaude-engineer%2Flsd%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fclaude-engineer%2Flsd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/submit-analysis/route.tsx":
/*!*******************************************!*\
  !*** ./app/api/submit-analysis/route.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/server/createGetAuth.js\");\n// pages/api/submit-analysis.ts\n\n\nasync function POST(req) {\n    try {\n        const auth = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.getAuth)(req);\n        const { userId } = auth;\n        if (!userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User not authenticated\"\n            }, {\n                status: 401\n            });\n        }\n        const { case_id, content, user_id } = await req.json();\n        if (!case_id || !content || !user_id) {\n            console.error(\"Missing case_id, content, or user_id\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing case_id, content, or user_id\"\n            }, {\n                status: 400\n            });\n        }\n        console.log(\"Received data:\", {\n            case_id,\n            content,\n            user_id\n        });\n        const response = await fetch(\"http://localhost:8080/api/submit-analysis\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                case_id,\n                content,\n                user_id\n            })\n        });\n        if (!response.ok) {\n            const errorText = await response.text();\n            console.error(`HTTP error! status: ${response.status} - ${errorText}`);\n            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);\n        }\n        console.log(\"Backend response received\");\n        console.log(\"Firestore updated successfully\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Analysis submitted successfully\"\n        });\n    } catch (error) {\n        if (error instanceof Error) {\n            console.error(\"Error submitting analysis:\", error.message, error.stack);\n        } else {\n            console.error(\"Unknown error submitting analysis:\", error);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1Ym1pdC1hbmFseXNpcy9yb3V0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0JBQStCO0FBQ3lCO0FBQ1Q7QUFFeEMsZUFBZUUsS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1DLE9BQU9ILDZEQUFPQSxDQUFDRTtRQUNyQixNQUFNLEVBQUVFLE1BQU0sRUFBRSxHQUFHRDtRQUVuQixJQUFJLENBQUNDLFFBQVE7WUFDWCxPQUFPTCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM5RTtRQUVBLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHLE1BQU1SLElBQUlHLElBQUk7UUFFcEQsSUFBSSxDQUFDRyxXQUFXLENBQUNDLFdBQVcsQ0FBQ0MsU0FBUztZQUNwQ0MsUUFBUUwsS0FBSyxDQUFDO1lBQ2QsT0FBT1AscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF1QyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDNUY7UUFFQUksUUFBUUMsR0FBRyxDQUFDLGtCQUFrQjtZQUFFSjtZQUFTQztZQUFTQztRQUFRO1FBRTFELE1BQU1HLFdBQVcsTUFBTUMsTUFBTSw2Q0FBNkM7WUFDeEVDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFWDtnQkFBU0M7Z0JBQVNDO1lBQVE7UUFDbkQ7UUFFQSxJQUFJLENBQUNHLFNBQVNPLEVBQUUsRUFBRTtZQUNoQixNQUFNQyxZQUFZLE1BQU1SLFNBQVNTLElBQUk7WUFDckNYLFFBQVFMLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixFQUFFTyxTQUFTTixNQUFNLENBQUMsR0FBRyxFQUFFYyxVQUFVLENBQUM7WUFDckUsTUFBTSxJQUFJRSxNQUFNLENBQUMsb0JBQW9CLEVBQUVWLFNBQVNOLE1BQU0sQ0FBQyxHQUFHLEVBQUVjLFVBQVUsQ0FBQztRQUN6RTtRQUVBVixRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDO1FBRVosT0FBT2IscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFbUIsU0FBUztRQUFrQztJQUN4RSxFQUFFLE9BQU9sQixPQUFnQjtRQUN2QixJQUFJQSxpQkFBaUJpQixPQUFPO1lBQzFCWixRQUFRTCxLQUFLLENBQUMsOEJBQThCQSxNQUFNa0IsT0FBTyxFQUFFbEIsTUFBTW1CLEtBQUs7UUFDeEUsT0FBTztZQUNMZCxRQUFRTCxLQUFLLENBQUMsc0NBQXNDQTtRQUN0RDtRQUNBLE9BQU9QLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAvLi9hcHAvYXBpL3N1Ym1pdC1hbmFseXNpcy9yb3V0ZS50c3g/Y2RhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvc3VibWl0LWFuYWx5c2lzLnRzXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ0BjbGVyay9uZXh0anMvc2VydmVyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKHJlcSk7XG4gICAgY29uc3QgeyB1c2VySWQgfSA9IGF1dGg7XG5cbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVc2VyIG5vdCBhdXRoZW50aWNhdGVkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY2FzZV9pZCwgY29udGVudCwgdXNlcl9pZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIGlmICghY2FzZV9pZCB8fCAhY29udGVudCB8fCAhdXNlcl9pZCkge1xuICAgICAgY29uc29sZS5lcnJvcignTWlzc2luZyBjYXNlX2lkLCBjb250ZW50LCBvciB1c2VyX2lkJyk7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ01pc3NpbmcgY2FzZV9pZCwgY29udGVudCwgb3IgdXNlcl9pZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgZGF0YTonLCB7IGNhc2VfaWQsIGNvbnRlbnQsIHVzZXJfaWQgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3N1Ym1pdC1hbmFseXNpcycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2FzZV9pZCwgY29udGVudCwgdXNlcl9pZCB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9IC0gJHtlcnJvclRleHR9YCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9IC0gJHtlcnJvclRleHR9YCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ0JhY2tlbmQgcmVzcG9uc2UgcmVjZWl2ZWQnKTtcbiAgICBjb25zb2xlLmxvZygnRmlyZXN0b3JlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQW5hbHlzaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseScgfSk7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1Ym1pdHRpbmcgYW5hbHlzaXM6JywgZXJyb3IubWVzc2FnZSwgZXJyb3Iuc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIGVycm9yIHN1Ym1pdHRpbmcgYW5hbHlzaXM6JywgZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEF1dGgiLCJQT1NUIiwicmVxIiwiYXV0aCIsInVzZXJJZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImNhc2VfaWQiLCJjb250ZW50IiwidXNlcl9pZCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJlcnJvclRleHQiLCJ0ZXh0IiwiRXJyb3IiLCJtZXNzYWdlIiwic3RhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/submit-analysis/route.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@clerk","vendor-chunks/crypto-js","vendor-chunks/tslib","vendor-chunks/cookie","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubmit-analysis%2Froute&page=%2Fapi%2Fsubmit-analysis%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-analysis%2Froute.tsx&appDir=%2Fworkspaces%2Fclaude-engineer%2Flsd%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fclaude-engineer%2Flsd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();