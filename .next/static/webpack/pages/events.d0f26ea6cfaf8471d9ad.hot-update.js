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
                console.log(array.data.rates);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJFdmVudHNTZWFyY2giLCJwcm9wcyIsInllYXJJbnB1dFJlZiIsInVzZVJlZiIsIm1vbnRoSW5wdXRyZWYiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJ0ZXN0ZSIsImF4aW9zIiwiZ2V0IiwiYXJyYXkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJhdGVzIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RZZWFyIiwiY3VycmVudCIsInZhbHVlIiwic2VsZWN0TW9udGgiLCJvblNlYXJjaCIsInN0eWxlcyIsImZvcm0iLCJjb250cm9scyIsImNvbnRyb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQzNCLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBM0I7QUFDQSxNQUFNQyxhQUFhLEdBQUdELG9EQUFNLEVBQTVCO0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEdBQUcsR0FDUCxzRkFERjs7QUFHQSxRQUFNQyxLQUFLO0FBQUEsa1pBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDUUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVSCxHQUFWLENBRFI7O0FBQUE7QUFDTkkscUJBRE07QUFFWkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsS0FBdkI7O0FBRlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBTFAsS0FBSztBQUFBO0FBQUE7QUFBQSxPQUFYOztBQUlBQSxTQUFLO0FBQ04sR0FUUSxFQVNOLEVBVE0sQ0FBVDs7QUFXQSxXQUFTUSxhQUFULENB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InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy5kMGYyNmVhNmNmYWY4NDcxZDlhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2V2ZW50cy1zZWFyY2gubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBFdmVudHNTZWFyY2gocHJvcHMpIHtcclxuICBjb25zdCB5ZWFySW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBtb250aElucHV0cmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPVxyXG4gICAgICBcImh0dHA6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby92MS9sYXRlc3Q/YWNjZXNzX2tleT0wMjE2ZmE5Y2ZjNGFmNGQ1OTM0ZGEzMTdlN2VjYjY5YlwiO1xyXG5cclxuICAgIGNvbnN0IHRlc3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBhcnJheSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhcnJheS5kYXRhLnJhdGVzKTtcclxuICAgIH07XHJcbiAgICB0ZXN0ZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgLy9ET05UIExPU0UgVEhFIFNUQVRFXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc2VsZWN0WWVhciA9IHllYXJJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3Qgc2VsZWN0TW9udGggPSBtb250aElucHV0cmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgcHJvcHMub25TZWFyY2goc2VsZWN0WWVhciwgc2VsZWN0TW9udGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwieWVhclwiPlllYXI8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdCBpZD1cInllYXJcIiByZWY9e3llYXJJbnB1dFJlZn0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDIxXCI+MjAyMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAyMVwiPjIwMjI8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb250aFwiPk1vbnRoPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb250aFwiIHJlZj17bW9udGhJbnB1dHJlZn0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+amFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+ZmV2PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+bWFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+YWJyPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+bWFpPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+anVuPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+anVsPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+YWdvPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+c2V0PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPm91dDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTFcIj5ub3Y8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyXCI+ZGV6PC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCdXR0b24+RmluZDwvQnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50c1NlYXJjaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==