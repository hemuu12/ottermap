"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map */ \"./node_modules/ol/Map.js\");\n/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/View */ \"./node_modules/ol/View.js\");\n/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile */ \"./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM */ \"./node_modules/ol/source/OSM.js\");\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj */ \"./node_modules/ol/proj.js\");\n/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/interaction */ \"./node_modules/ol/interaction.js\");\n/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/layer/Vector */ \"./node_modules/ol/layer/Vector.js\");\n/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/Vector */ \"./node_modules/ol/source/Vector.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style.js\");\n\nvar _s = $RefreshSig$();\n\n // Import the Map class from OpenLayers\n // Import the View class from OpenLayers\n // Import the TileLayer class from OpenLayers\n // Import the OSM class from OpenLayers\n // Import the fromLonLat function from OpenLayers\n // Import interaction classes from OpenLayers\n // Import the VectorLayer class from OpenLayers\n // Import the VectorSource class from OpenLayers\n // Import style classes from OpenLayers\nconst Home = ()=>{\n    _s();\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Create a ref for the map container\n    const map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Create a ref for the map instance\n    const vectorLayer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Create a ref for the vector layer\n    const drawInteraction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Create a ref for the draw interaction\n    const modifyInteraction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Create a ref for the modify interaction\n    const snapInteraction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Create a ref for the snap interaction\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!mapRef.current) return; // Check if the map container ref is valid\n        // Create a new Map instance with a TileLayer using OpenStreetMap (OSM) as the source\n        map.current = new ol_Map__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            target: mapRef.current,\n            layers: [\n                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n                    source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__[\"default\"]()\n                })\n            ],\n            view: new ol_View__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n                center: (0,ol_proj__WEBPACK_IMPORTED_MODULE_2__.fromLonLat)([\n                    0,\n                    0\n                ]),\n                zoom: 2\n            })\n        });\n        // Create a new VectorLayer instance with a VectorSource\n        vectorLayer.current = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n            source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_8__[\"default\"](),\n            style: new ol_style__WEBPACK_IMPORTED_MODULE_9__.Style({\n                fill: new ol_style__WEBPACK_IMPORTED_MODULE_9__.Fill({\n                    color: \"rgba(255, 215, 0, 0.2)\"\n                }),\n                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_9__.Stroke({\n                    color: \"rgba(0, 0, 0, 0.8)\",\n                    width: 2\n                }),\n                image: new ol_style__WEBPACK_IMPORTED_MODULE_9__.Circle({\n                    radius: 7,\n                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_9__.Fill({\n                        color: \"rgba(255, 215, 0, 0.8)\"\n                    }),\n                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_9__.Stroke({\n                        color: \"#fff\",\n                        width: 2\n                    })\n                })\n            })\n        });\n        // Add the vector layer to the map\n        map.current.addLayer(vectorLayer.current);\n        // Create a new Draw interaction for drawing points\n        drawInteraction.current = new ol_interaction__WEBPACK_IMPORTED_MODULE_10__.Draw({\n            source: vectorLayer.current.getSource(),\n            type: \"Point\"\n        });\n        // Add the draw interaction to the map\n        map.current.addInteraction(drawInteraction.current);\n        // Create a new Modify interaction for modifying drawn features\n        modifyInteraction.current = new ol_interaction__WEBPACK_IMPORTED_MODULE_10__.Modify({\n            source: vectorLayer.current.getSource()\n        });\n        // Add the modify interaction to the map\n        map.current.addInteraction(modifyInteraction.current);\n        // Create a new Snap interaction for snapping to nearby points\n        snapInteraction.current = new ol_interaction__WEBPACK_IMPORTED_MODULE_10__.Snap({\n            source: vectorLayer.current.getSource()\n        });\n        // Add the snap interaction to the map\n        map.current.addInteraction(snapInteraction.current);\n        // Cleanup function to dispose the map instance when the component unmounts\n        return ()=>{\n            if (map.current) {\n                map.current.dispose();\n            }\n        };\n    }, []); // Run this effect only once after the initial render\n    // Return the map container element\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mapRef,\n        style: {\n            width: \"100%\",\n            height: \"700px\",\n            color: \"black\"\n        }\n    }, void 0, false, {\n        fileName: \"/home/hari/Desktop/ottermap/pages/index.tsx\",\n        lineNumber: 96,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Home, \"hWK8vQdbHUywSW49P+9t2IrFju8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87UUFFbEQsMkVBQTJFO1FBQzNFLE9BQU87WUFDTCxJQUFJTCxJQUFJSyxPQUFPLEVBQUU7Z0JBQ2ZMLElBQUlLLE9BQU8sQ0FBQ2tCLE9BQU87WUFDckI7UUFDRjtJQUNGLEdBQUcsRUFBRSxHQUFHLHFEQUFxRDtJQUU3RCxtQ0FBbUM7SUFDbkMscUJBQU8sOERBQUNDO1FBQUlDLEtBQUsxQjtRQUFRYSxPQUFPO1lBQUVJLE9BQU87WUFBUVUsUUFBUTtZQUFVWixPQUFNO1FBQU87Ozs7OztBQUNsRjtHQXBGTWhCO0tBQUFBO0FBc0ZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwJzsgLy8gSW1wb3J0IHRoZSBNYXAgY2xhc3MgZnJvbSBPcGVuTGF5ZXJzXG5pbXBvcnQgVmlldyBmcm9tICdvbC9WaWV3JzsgLy8gSW1wb3J0IHRoZSBWaWV3IGNsYXNzIGZyb20gT3BlbkxheWVyc1xuaW1wb3J0IFRpbGVMYXllciBmcm9tICdvbC9sYXllci9UaWxlJzsgLy8gSW1wb3J0IHRoZSBUaWxlTGF5ZXIgY2xhc3MgZnJvbSBPcGVuTGF5ZXJzXG5pbXBvcnQgT1NNIGZyb20gJ29sL3NvdXJjZS9PU00nOyAvLyBJbXBvcnQgdGhlIE9TTSBjbGFzcyBmcm9tIE9wZW5MYXllcnNcbmltcG9ydCB7IGZyb21Mb25MYXQgfSBmcm9tICdvbC9wcm9qJzsgLy8gSW1wb3J0IHRoZSBmcm9tTG9uTGF0IGZ1bmN0aW9uIGZyb20gT3BlbkxheWVyc1xuaW1wb3J0IHsgRHJhdywgTW9kaWZ5LCBTbmFwIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nOyAvLyBJbXBvcnQgaW50ZXJhY3Rpb24gY2xhc3NlcyBmcm9tIE9wZW5MYXllcnNcbmltcG9ydCBWZWN0b3JMYXllciBmcm9tICdvbC9sYXllci9WZWN0b3InOyAvLyBJbXBvcnQgdGhlIFZlY3RvckxheWVyIGNsYXNzIGZyb20gT3BlbkxheWVyc1xuaW1wb3J0IFZlY3RvclNvdXJjZSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJzsgLy8gSW1wb3J0IHRoZSBWZWN0b3JTb3VyY2UgY2xhc3MgZnJvbSBPcGVuTGF5ZXJzXG5pbXBvcnQgeyBDaXJjbGUgYXMgQ2lyY2xlU3R5bGUsIEZpbGwsIFN0cm9rZSwgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7IC8vIEltcG9ydCBzdHlsZSBjbGFzc2VzIGZyb20gT3BlbkxheWVyc1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBtYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpOyAvLyBDcmVhdGUgYSByZWYgZm9yIHRoZSBtYXAgY29udGFpbmVyXG4gIGNvbnN0IG1hcCA9IHVzZVJlZjxNYXAgfCBudWxsPihudWxsKTsgLy8gQ3JlYXRlIGEgcmVmIGZvciB0aGUgbWFwIGluc3RhbmNlXG4gIGNvbnN0IHZlY3RvckxheWVyID0gdXNlUmVmPFZlY3RvckxheWVyPFZlY3RvclNvdXJjZTxGZWF0dXJlPj4gfCBudWxsPihudWxsKTsgLy8gQ3JlYXRlIGEgcmVmIGZvciB0aGUgdmVjdG9yIGxheWVyXG4gIGNvbnN0IGRyYXdJbnRlcmFjdGlvbiA9IHVzZVJlZjxEcmF3IHwgbnVsbD4obnVsbCk7IC8vIENyZWF0ZSBhIHJlZiBmb3IgdGhlIGRyYXcgaW50ZXJhY3Rpb25cbiAgY29uc3QgbW9kaWZ5SW50ZXJhY3Rpb24gPSB1c2VSZWY8TW9kaWZ5IHwgbnVsbD4obnVsbCk7IC8vIENyZWF0ZSBhIHJlZiBmb3IgdGhlIG1vZGlmeSBpbnRlcmFjdGlvblxuICBjb25zdCBzbmFwSW50ZXJhY3Rpb24gPSB1c2VSZWY8U25hcCB8IG51bGw+KG51bGwpOyAvLyBDcmVhdGUgYSByZWYgZm9yIHRoZSBzbmFwIGludGVyYWN0aW9uXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1hcFJlZi5jdXJyZW50KSByZXR1cm47IC8vIENoZWNrIGlmIHRoZSBtYXAgY29udGFpbmVyIHJlZiBpcyB2YWxpZFxuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IE1hcCBpbnN0YW5jZSB3aXRoIGEgVGlsZUxheWVyIHVzaW5nIE9wZW5TdHJlZXRNYXAgKE9TTSkgYXMgdGhlIHNvdXJjZVxuICAgIG1hcC5jdXJyZW50ID0gbmV3IE1hcCh7XG4gICAgICB0YXJnZXQ6IG1hcFJlZi5jdXJyZW50LCAvLyBTZXQgdGhlIHRhcmdldCB0byB0aGUgbWFwIGNvbnRhaW5lciByZWZcbiAgICAgIGxheWVyczogW1xuICAgICAgICBuZXcgVGlsZUxheWVyKHtcbiAgICAgICAgICBzb3VyY2U6IG5ldyBPU00oKSwgLy8gVXNlIE9TTSBhcyB0aGUgdGlsZSBzb3VyY2VcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdmlldzogbmV3IFZpZXcoe1xuICAgICAgICBjZW50ZXI6IGZyb21Mb25MYXQoWzAsIDBdKSwgLy8gU2V0IHRoZSBpbml0aWFsIGNlbnRlciBvZiB0aGUgbWFwIHRvICgwLCAwKSAobG9uZ2l0dWRlLCBsYXRpdHVkZSlcbiAgICAgICAgem9vbTogMiwgLy8gU2V0IHRoZSBpbml0aWFsIHpvb20gbGV2ZWwgb2YgdGhlIG1hcFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgVmVjdG9yTGF5ZXIgaW5zdGFuY2Ugd2l0aCBhIFZlY3RvclNvdXJjZVxuICAgIHZlY3RvckxheWVyLmN1cnJlbnQgPSBuZXcgVmVjdG9yTGF5ZXIoe1xuICAgICAgc291cmNlOiBuZXcgVmVjdG9yU291cmNlKCksIC8vIFVzZSBhIFZlY3RvclNvdXJjZSBmb3IgdGhlIGxheWVyXG4gICAgICBzdHlsZTogbmV3IFN0eWxlKHsgLy8gQXBwbHkgc3R5bGVzIHRvIHRoZSB2ZWN0b3IgbGF5ZXJcbiAgICAgICAgZmlsbDogbmV3IEZpbGwoe1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDIxNSwgMCwgMC4yKScsIC8vIEdvbGRlbiBjb2xvciB3aXRoIG9wYWNpdHlcbiAgICAgICAgfSksXG4gICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuOCknLCAvLyBCbGFjayBjb2xvciB3aXRoIG9wYWNpdHlcbiAgICAgICAgICB3aWR0aDogMiwgLy8gU2V0IHRoZSBzdHJva2Ugd2lkdGggdG8gMiBwaXhlbHNcbiAgICAgICAgfSksXG4gICAgICAgIGltYWdlOiBuZXcgQ2lyY2xlU3R5bGUoeyAvLyBVc2UgYSBjaXJjbGUgc3R5bGUgZm9yIHBvaW50c1xuICAgICAgICAgIHJhZGl1czogNywgLy8gU2V0IHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZVxuICAgICAgICAgIGZpbGw6IG5ldyBGaWxsKHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDIxNSwgMCwgMC44KScsIC8vIEdvbGRlbiBjb2xvciB3aXRoIG9wYWNpdHlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6ICcjZmZmJywgLy8gV2hpdGUgY29sb3IgZm9yIHRoZSBzdHJva2VcbiAgICAgICAgICAgIHdpZHRoOiAyLCAvLyBTZXQgdGhlIHN0cm9rZSB3aWR0aCB0byAyIHBpeGVsc1xuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIHRoZSB2ZWN0b3IgbGF5ZXIgdG8gdGhlIG1hcFxuICAgIG1hcC5jdXJyZW50LmFkZExheWVyKHZlY3RvckxheWVyLmN1cnJlbnQpO1xuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IERyYXcgaW50ZXJhY3Rpb24gZm9yIGRyYXdpbmcgcG9pbnRzXG4gICAgZHJhd0ludGVyYWN0aW9uLmN1cnJlbnQgPSBuZXcgRHJhdyh7XG4gICAgICBzb3VyY2U6IHZlY3RvckxheWVyLmN1cnJlbnQuZ2V0U291cmNlKCksIC8vIFNldCB0aGUgc291cmNlIG9mIHRoZSBkcmF3IGludGVyYWN0aW9uIHRvIHRoZSB2ZWN0b3IgbGF5ZXIgc291cmNlXG4gICAgICB0eXBlOiAnUG9pbnQnLCAvLyBTZXQgdGhlIHR5cGUgb2YgZ2VvbWV0cnkgdG8gZHJhdyAoUG9pbnQsIExpbmVTdHJpbmcsIFBvbHlnb24sIGV0Yy4pXG4gICAgfSk7XG4gICAgLy8gQWRkIHRoZSBkcmF3IGludGVyYWN0aW9uIHRvIHRoZSBtYXBcbiAgICBtYXAuY3VycmVudC5hZGRJbnRlcmFjdGlvbihkcmF3SW50ZXJhY3Rpb24uY3VycmVudCk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgTW9kaWZ5IGludGVyYWN0aW9uIGZvciBtb2RpZnlpbmcgZHJhd24gZmVhdHVyZXNcbiAgICBtb2RpZnlJbnRlcmFjdGlvbi5jdXJyZW50ID0gbmV3IE1vZGlmeSh7XG4gICAgICBzb3VyY2U6IHZlY3RvckxheWVyLmN1cnJlbnQuZ2V0U291cmNlKCksIC8vIFNldCB0aGUgc291cmNlIG9mIHRoZSBtb2RpZnkgaW50ZXJhY3Rpb24gdG8gdGhlIHZlY3RvciBsYXllciBzb3VyY2VcbiAgICB9KTtcbiAgICAvLyBBZGQgdGhlIG1vZGlmeSBpbnRlcmFjdGlvbiB0byB0aGUgbWFwXG4gICAgbWFwLmN1cnJlbnQuYWRkSW50ZXJhY3Rpb24obW9kaWZ5SW50ZXJhY3Rpb24uY3VycmVudCk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgU25hcCBpbnRlcmFjdGlvbiBmb3Igc25hcHBpbmcgdG8gbmVhcmJ5IHBvaW50c1xuICAgIHNuYXBJbnRlcmFjdGlvbi5jdXJyZW50ID0gbmV3IFNuYXAoe1xuICAgICAgc291cmNlOiB2ZWN0b3JMYXllci5jdXJyZW50LmdldFNvdXJjZSgpLCAvLyBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgc25hcCBpbnRlcmFjdGlvbiB0byB0aGUgdmVjdG9yIGxheWVyIHNvdXJjZVxuICAgIH0pO1xuICAgIC8vIEFkZCB0aGUgc25hcCBpbnRlcmFjdGlvbiB0byB0aGUgbWFwXG4gICAgbWFwLmN1cnJlbnQuYWRkSW50ZXJhY3Rpb24oc25hcEludGVyYWN0aW9uLmN1cnJlbnQpO1xuXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byBkaXNwb3NlIHRoZSBtYXAgaW5zdGFuY2Ugd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChtYXAuY3VycmVudCkge1xuICAgICAgICBtYXAuY3VycmVudC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pOyAvLyBSdW4gdGhpcyBlZmZlY3Qgb25seSBvbmNlIGFmdGVyIHRoZSBpbml0aWFsIHJlbmRlclxuXG4gIC8vIFJldHVybiB0aGUgbWFwIGNvbnRhaW5lciBlbGVtZW50XG4gIHJldHVybiA8ZGl2IHJlZj17bWFwUmVmfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc3MDBweCcgLCBjb2xvcjpcImJsYWNrXCJ9fT48L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTWFwIiwiVmlldyIsIlRpbGVMYXllciIsIk9TTSIsImZyb21Mb25MYXQiLCJEcmF3IiwiTW9kaWZ5IiwiU25hcCIsIlZlY3RvckxheWVyIiwiVmVjdG9yU291cmNlIiwiQ2lyY2xlIiwiQ2lyY2xlU3R5bGUiLCJGaWxsIiwiU3Ryb2tlIiwiU3R5bGUiLCJIb21lIiwibWFwUmVmIiwibWFwIiwidmVjdG9yTGF5ZXIiLCJkcmF3SW50ZXJhY3Rpb24iLCJtb2RpZnlJbnRlcmFjdGlvbiIsInNuYXBJbnRlcmFjdGlvbiIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXllcnMiLCJzb3VyY2UiLCJ2aWV3IiwiY2VudGVyIiwiem9vbSIsInN0eWxlIiwiZmlsbCIsImNvbG9yIiwic3Ryb2tlIiwid2lkdGgiLCJpbWFnZSIsInJhZGl1cyIsImFkZExheWVyIiwiZ2V0U291cmNlIiwidHlwZSIsImFkZEludGVyYWN0aW9uIiwiZGlzcG9zZSIsImRpdiIsInJlZiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});