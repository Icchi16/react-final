"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layouts/HomeLayout.jsx":
/*!************************************!*\
  !*** ./src/layouts/HomeLayout.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _components_header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/HomeHeader */ \"./src/components/header/HomeHeader.jsx\");\n/* harmony import */ var _components_footer_HomeFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer/HomeFooter */ \"./src/components/footer/HomeFooter.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { Footer , Content  } = antd__WEBPACK_IMPORTED_MODULE_4__.Layout;\nconst HomeLayout = (param)=>{\n    let { children  } = param;\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_4__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n        className: \"layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\quang\\\\Documents\\\\Coding\\\\react-final\\\\src\\\\layouts\\\\HomeLayout.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\quang\\\\Documents\\\\Coding\\\\react-final\\\\src\\\\layouts\\\\HomeLayout.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_HomeFooter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\quang\\\\Documents\\\\Coding\\\\react-final\\\\src\\\\layouts\\\\HomeLayout.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\quang\\\\Documents\\\\Coding\\\\react-final\\\\src\\\\layouts\\\\HomeLayout.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomeLayout, \"wj8Ruz1H9jdqesyQgOLrZqxZNvQ=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_4__.theme.useToken\n    ];\n});\n_c = HomeLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeLayout);\nvar _c;\n$RefreshReg$(_c, \"HomeLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9Ib21lTGF5b3V0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUVXO0FBRW9CO0FBQ0E7QUFFekQsTUFBTSxFQUFFSyxPQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHTCx3Q0FBTUE7QUFFbEMsTUFBTU0sYUFBYSxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQzlCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxpQkFBZ0IsRUFBRSxHQUM1QixHQUFHUixnREFBYztJQUNsQixxQkFDRSw4REFBQ0Qsd0NBQU1BO1FBQUNXLFdBQVU7OzBCQUNoQiw4REFBQ1QscUVBQVVBOzs7OzswQkFDWCw4REFBQ0c7MEJBQVNFOzs7Ozs7MEJBQ1YsOERBQUNKLHFFQUFVQTs7Ozs7Ozs7Ozs7QUFHakI7R0FYTUc7O1FBR0FMLGdEQUFjUzs7O0tBSGRKO0FBYU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvSG9tZUxheW91dC5qc3g/NmZmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXQsIHRoZW1lIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBIb21lSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9Ib21lSGVhZGVyXCI7XHJcbmltcG9ydCBIb21lRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3Rlci9Ib21lRm9vdGVyXCI7XHJcblxyXG5jb25zdCB7IEZvb3RlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgSG9tZUxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0b2tlbjogeyBjb2xvckJnQ29udGFpbmVyIH0sXHJcbiAgfSA9IHRoZW1lLnVzZVRva2VuKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgIDxIb21lSGVhZGVyIC8+XHJcbiAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XHJcbiAgICAgIDxIb21lRm9vdGVyIC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUxheW91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwidGhlbWUiLCJIb21lSGVhZGVyIiwiSG9tZUZvb3RlciIsIkZvb3RlciIsIkNvbnRlbnQiLCJIb21lTGF5b3V0IiwiY2hpbGRyZW4iLCJ0b2tlbiIsImNvbG9yQmdDb250YWluZXIiLCJ1c2VUb2tlbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/HomeLayout.jsx\n"));

/***/ })

});