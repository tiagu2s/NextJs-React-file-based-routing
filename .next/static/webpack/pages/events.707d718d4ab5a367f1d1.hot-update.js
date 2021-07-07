webpackHotUpdate_N_E("pages/events",{

/***/ "./components/events/events-search.js":
/*!********************************************!*\
  !*** ./components/events/events-search.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_tiagu_OneDrive_Documentos_NEXTJS_REACT_COURSE_nextjs_course_code_file_based_routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_tiagu_OneDrive_Documentos_NEXTJS_REACT_COURSE_nextjs_course_code_file_based_routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_tiagu_OneDrive_Documentos_NEXTJS_REACT_COURSE_nextjs_course_code_file_based_routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_tiagu_OneDrive_Documentos_NEXTJS_REACT_COURSE_nextjs_course_code_file_based_routing_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");
/* harmony import */ var _events_search_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-search.module.css */ "./components/events/events-search.module.css");
/* harmony import */ var _events_search_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_events_search_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\tiagu\\OneDrive\\Documentos\\NEXTJS_REACT_COURSE\\nextjs-course-code-file-based-routing\\components\\events\\events-search.js",
    _s = $RefreshSig$();






function EventsSearch(props) {
  _s();

  var yearInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var monthInputref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var url = "http://api.exchangeratesapi.io/v1/latest?access_key=0216fa9cfc4af4d5934da317e7ecb69b";

    var teste = /*#__PURE__*/function () {
      var _ref = Object(C_Users_tiagu_OneDrive_Documentos_NEXTJS_REACT_COURSE_nextjs_course_code_file_based_routing_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_tiagu_OneDrive_Documentos_NEXTJS_REACT_COURSE_nextjs_course_code_file_based_routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var array;
        return C_Users_tiagu_OneDrive_Documentos_NEXTJS_REACT_COURSE_nextjs_course_code_file_based_routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url);

              case 2:
                array = _context.sent;
                console.log(array.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function teste() {
        return _ref.apply(this, arguments);
      };
    }();

    teste();
  }, []);

  function submitHandler(event) {
    //DONT LOSE THE STATE
    event.preventDefault();
    var selectYear = yearInputRef.current.value;
    var selectMonth = monthInputref.current.value;
    props.onSearch(selectYear, selectMonth);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _events_search_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form,
    onSubmit: submitHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _events_search_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.controls,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _events_search_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "year",
          children: "Year"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          id: "year",
          ref: yearInputRef,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "2021",
            children: "2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "2021",
            children: "2022"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _events_search_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "month",
          children: "Month"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          id: "month",
          ref: monthInputref,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "1",
            children: "jan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "2",
            children: "fev"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "3",
            children: "mar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "4",
            children: "abr"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "5",
            children: "mai"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "6",
            children: "jun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "7",
            children: "jul"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "8",
            children: "ago"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "9",
            children: "set"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "10",
            children: "out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "11",
            children: "nov"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "12",
            children: "dez"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: "Find"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(EventsSearch, "m1qNAmMfVYmzn0bwly1G5QbjTeg=");

_c = EventsSearch;
/* harmony default export */ __webpack_exports__["default"] = (EventsSearch);

var _c;

$RefreshReg$(_c, "EventsSearch");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJFdmVudHNTZWFyY2giLCJwcm9wcyIsInllYXJJbnB1dFJlZiIsInVzZVJlZiIsIm1vbnRoSW5wdXRyZWYiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJ0ZXN0ZSIsImF4aW9zIiwiZ2V0IiwiYXJyYXkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0WWVhciIsImN1cnJlbnQiLCJ2YWx1ZSIsInNlbGVjdE1vbnRoIiwib25TZWFyY2giLCJzdHlsZXMiLCJmb3JtIiwiY29udHJvbHMiLCJjb250cm9sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUMzQixNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxvREFBTSxFQUE1QjtBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxHQUFHLEdBQ1Asc0ZBREY7O0FBR0EsUUFBTUMsS0FBSztBQUFBLGtaQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1FDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUgsR0FBVixDQURSOztBQUFBO0FBQ05JLHFCQURNO0FBRVpDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxJQUFsQjs7QUFGWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFMTixLQUFLO0FBQUE7QUFBQTtBQUFBLE9BQVg7O0FBSUFBLFNBQUs7QUFDTixHQVRRLEVBU04sRUFUTSxDQUFUOztBQVdBLFdBQVNPLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FB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cy9ldmVudHMuNzA3ZDcxOGQ0YWI1YTM2N2YxZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi91aS9idXR0b25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ldmVudHMtc2VhcmNoLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gRXZlbnRzU2VhcmNoKHByb3BzKSB7XHJcbiAgY29uc3QgeWVhcklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbW9udGhJbnB1dHJlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID1cclxuICAgICAgXCJodHRwOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vdjEvbGF0ZXN0P2FjY2Vzc19rZXk9MDIxNmZhOWNmYzRhZjRkNTkzNGRhMzE3ZTdlY2I2OWJcIjtcclxuXHJcbiAgICBjb25zdCB0ZXN0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYXJyYXkgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICAgICAgY29uc29sZS5sb2coYXJyYXkuZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgdGVzdGUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIC8vRE9OVCBMT1NFIFRIRSBTVEFURVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNlbGVjdFllYXIgPSB5ZWFySW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdE1vbnRoID0gbW9udGhJbnB1dHJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIHByb3BzLm9uU2VhcmNoKHNlbGVjdFllYXIsIHNlbGVjdE1vbnRoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbHN9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInllYXJcIj5ZZWFyPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ5ZWFyXCIgcmVmPXt5ZWFySW5wdXRSZWZ9PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAyMVwiPjIwMjE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMjFcIj4yMDIyPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibW9udGhcIj5Nb250aDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0IGlkPVwibW9udGhcIiByZWY9e21vbnRoSW5wdXRyZWZ9PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPmphbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPmZldjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPm1hcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPmFicjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPm1haTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPmp1bjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPmp1bDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPmFnbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPnNldDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj5vdXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjExXCI+bm92PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMlwiPmRlejwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnV0dG9uPkZpbmQ8L0J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudHNTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=