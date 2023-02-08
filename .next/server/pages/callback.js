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
exports.id = "pages/callback";
exports.ids = ["pages/callback"];
exports.modules = {

/***/ "./src/pages/callback.js":
/*!*******************************!*\
  !*** ./src/pages/callback.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);\n\n/* eslint-disable react-hooks/rules-of-hooks */ \n\n\n\nconst callback = ({ query  })=>{\n    const { 0: access_token , 1: setaccess_token  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (query.code) {\n            axios__WEBPACK_IMPORTED_MODULE_2___default().get(`http://192.168.215.210:9001/callback?code=${query.code}`).then(({ data  })=>{\n                (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.setCookies)(\"Token\", data.accessToken);\n                setaccess_token(data.accessToken);\n            }).catch((err)=>{\n                console.log('Error:', err);\n            });\n        }\n    }, []);\n    // redirect to vehicles page\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (access_token) {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/vehicles');\n        }\n    }, [\n        access_token\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abdishakuurally/Downloads/vehicle/src/pages/callback.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined));\n};\ncallback.getInitialProps = async (context)=>{\n    return {\n        query: context.query\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callback);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FsbGJhY2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBK0MsOENBQ0o7QUFDbEI7QUFDTztBQUNTO0FBRXpDLEtBQUssQ0FBQ0ssUUFBUSxJQUFJLENBQUNDLENBQUFBLEtBQUssR0FBQyxHQUFLLENBQUM7SUFDM0IsS0FBSyxNQUFFQyxZQUFZLE1BQUVDLGVBQWUsTUFBSVAsK0NBQVEsQ0FBQyxJQUFJO0lBQ3JERCxnREFBUyxLQUFPLENBQUM7UUFDYixFQUFFLEVBQUNNLEtBQUssQ0FBQ0csSUFBSSxFQUFFLENBQUM7WUFDWlAsZ0RBQVMsRUFBRSwwQ0FBMEMsRUFBRUksS0FBSyxDQUFDRyxJQUFJLElBQ2hFRSxJQUFJLEVBQUUsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFDLEdBQUssQ0FBQztnQkFDbEJSLHdEQUFVLENBQUMsQ0FBTyxRQUFFUSxJQUFJLENBQUNDLFdBQVc7Z0JBQ3BDTCxlQUFlLENBQUNJLElBQUksQ0FBQ0MsV0FBVztZQUNqQyxDQUFDLEVBQ0FDLEtBQUssRUFBQ0MsR0FBRyxHQUFJLENBQUM7Z0JBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVEsU0FBRUYsR0FBRztZQUM3QixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixFQUE0QjtJQUM1QmYsZ0RBQVMsS0FBTyxDQUFDO1FBQ2IsRUFBRSxFQUFDTyxZQUFZLEVBQUUsQ0FBQztZQUNkSix1REFBVyxDQUFDLENBQVc7UUFDM0IsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDSTtRQUFBQSxZQUFZO0lBQUEsQ0FBQztJQUNoQixNQUFNLDZFQUNEWSxDQUFHO2tCQUFDLENBQVU7Ozs7OztBQUV2QixDQUFDO0FBQ0RkLFFBQVEsQ0FBQ2UsZUFBZSxVQUFVQyxPQUFPLEdBQUssQ0FBQztJQUMzQyxNQUFNLENBQUMsQ0FBQztRQUFDZixLQUFLLEVBQUVlLE9BQU8sQ0FBQ2YsS0FBSztJQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELGlFQUFlRCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhjaGFuZ2Utc3lzdGVtLy4vc3JjL3BhZ2VzL2NhbGxiYWNrLmpzP2M5MDMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBzZXRDb29raWVzIH0gZnJvbSAnY29va2llcy1uZXh0J1xuXG5jb25zdCBjYWxsYmFjayA9ICh7cXVlcnl9KSA9PiB7XG4gICAgY29uc3QgW2FjY2Vzc190b2tlbiwgc2V0YWNjZXNzX3Rva2VuXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYocXVlcnkuY29kZSkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vMTkyLjE2OC4yMTUuMjEwOjkwMDEvY2FsbGJhY2s/Y29kZT0ke3F1ZXJ5LmNvZGV9YClcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHsgXG4gICAgICAgICAgICAgc2V0Q29va2llcyhcIlRva2VuXCIsIGRhdGEuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgIHNldGFjY2Vzc190b2tlbihkYXRhLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFtdKVxuXG4gICAgLy8gcmVkaXJlY3QgdG8gdmVoaWNsZXMgcGFnZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy92ZWhpY2xlcycpO1xuICAgICAgICB9XG4gICAgfSxbYWNjZXNzX3Rva2VuXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICApXG59XG5jYWxsYmFjay5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIHJldHVybiB7IHF1ZXJ5OiBjb250ZXh0LnF1ZXJ5IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FsbGJhY2tcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUm91dGVyIiwic2V0Q29va2llcyIsImNhbGxiYWNrIiwicXVlcnkiLCJhY2Nlc3NfdG9rZW4iLCJzZXRhY2Nlc3NfdG9rZW4iLCJjb2RlIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJhY2Nlc3NUb2tlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJkaXYiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/callback.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/callback.js"));
module.exports = __webpack_exports__;

})();