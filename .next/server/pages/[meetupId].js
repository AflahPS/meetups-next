module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupDetails.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupDetails.module.css */ \"./components/meetups/MeetupDetails.module.css\");\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/aflah/Documents/React Trials/06-onwards-to-a-bigger-project-starting-project/components/meetups/MeetupDetails.js\";\n\n\n\nfunction MeetupDetails(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.details,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: props.image,\n        alt: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n        children: props.address\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: props.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5qcz82ZTNkIl0sIm5hbWVzIjpbIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsInN0eWxlcyIsImRldGFpbHMiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QixzQkFDRTtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFFQyxnRUFBTSxDQUFDQyxPQUEzQjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFRixLQUFLLENBQUNHLEtBQWhCO0FBQXVCLFdBQUcsRUFBRUgsS0FBSyxDQUFDSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFLSixLQUFLLENBQUNJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBQSxrQkFBVUosS0FBSyxDQUFDSztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFBLGtCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBVUQ7O0FBRWNQLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVldHVwRGV0YWlscy5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cbiAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetails.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetails.module.css":
/*!*****************************************************!*\
  !*** ./components/meetups/MeetupDetails.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"details\": \"MeetupDetails_details__3zPqQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5tb2R1bGUuY3NzPzY1NjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsc1wiOiBcIk1lZXR1cERldGFpbHNfZGV0YWlsc19fM3pQcVFcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetails.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n\nvar _jsxFileName = \"/home/aflah/Documents/React Trials/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js\";\n\n\n\nfunction MeetupDetailsPage({\n  meetupsData\n}) {\n  console.log(\"greeny321\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: meetupsData.title,\n    image: meetupsData.image,\n    description: meetupsData.description,\n    address: meetupsData.address\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\nasync function getMeetups(id = null) {\n  try {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect(`mongodb+srv://greeny:${\"greeny321\"}@greeny.z2jivg0.mongodb.net/meetup?retryWrites=true&w=majority`);\n    const db = client.db();\n    const meetupColl = db.collection(\"meetups\");\n    let result;\n\n    if (!id) {\n      result = await meetupColl.find().toArray();\n    } else {\n      result = await meetupColl.findOne({\n        _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(id)\n      });\n      result = [result];\n    }\n\n    const serializedResult = result.map(meet => {\n      return {\n        id: meet._id.toString(),\n        title: meet.title,\n        image: meet.image,\n        description: meet.description,\n        address: meet.address\n      };\n    });\n    client.close();\n    return serializedResult;\n  } catch (er) {\n    console.log(er.message);\n  }\n}\n\nasync function getStaticPaths() {\n  const meetups = await getMeetups();\n  return {\n    paths: meetups.map(meet => {\n      return {\n        params: {\n          meetupId: meet.id\n        }\n      };\n    }),\n    fallback: false\n  };\n}\nasync function getStaticProps(context) {\n  // Fetch data from the server or API\n  try {\n    const meetupId = context.params.meetupId;\n    const meetupsData = await getMeetups(meetupId);\n    return {\n      props: {\n        meetupsData: meetupsData[0]\n      }\n    };\n  } catch (err) {\n    console.log(err.message);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetailsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsc1BhZ2UiLCJtZWV0dXBzRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwidGl0bGUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiYWRkcmVzcyIsImdldE1lZXR1cHMiLCJpZCIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwQ29sbCIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJmaW5kIiwidG9BcnJheSIsImZpbmRPbmUiLCJfaWQiLCJPYmplY3RJZCIsInNlcmlhbGl6ZWRSZXN1bHQiLCJtYXAiLCJtZWV0IiwidG9TdHJpbmciLCJjbG9zZSIsImVyIiwibWVzc2FnZSIsImdldFN0YXRpY1BhdGhzIiwibWVldHVwcyIsInBhdGhzIiwicGFyYW1zIiwibWVldHVwSWQiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQjtBQUFFQztBQUFGLENBQTNCLEVBQTRDO0FBQzFDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBWjtBQUNBLHNCQUNFLHFFQUFDLHlFQUFEO0FBQ0UsU0FBSyxFQUFFSCxXQUFXLENBQUNJLEtBRHJCO0FBRUUsU0FBSyxFQUFFSixXQUFXLENBQUNLLEtBRnJCO0FBR0UsZUFBVyxFQUFFTCxXQUFXLENBQUNNLFdBSDNCO0FBSUUsV0FBTyxFQUFFTixXQUFXLENBQUNPO0FBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVELGVBQWVDLFVBQWYsQ0FBMEJDLEVBQUUsR0FBRyxJQUEvQixFQUFxQztBQUNuQyxNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbEIsd0JBQXVCVCxXQUF3QixnRUFEN0IsQ0FBckI7QUFHQSxVQUFNVSxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBQ0EsVUFBTUMsVUFBVSxHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQW5CO0FBQ0EsUUFBSUMsTUFBSjs7QUFDQSxRQUFJLENBQUNQLEVBQUwsRUFBUztBQUNQTyxZQUFNLEdBQUcsTUFBTUYsVUFBVSxDQUFDRyxJQUFYLEdBQWtCQyxPQUFsQixFQUFmO0FBQ0QsS0FGRCxNQUVPO0FBQ0xGLFlBQU0sR0FBRyxNQUFNRixVQUFVLENBQUNLLE9BQVgsQ0FBbUI7QUFBRUMsV0FBRyxFQUFFQyx3REFBUSxDQUFDWixFQUFEO0FBQWYsT0FBbkIsQ0FBZjtBQUNBTyxZQUFNLEdBQUcsQ0FBQ0EsTUFBRCxDQUFUO0FBQ0Q7O0FBQ0QsVUFBTU0sZ0JBQWdCLEdBQUdOLE1BQU0sQ0FBQ08sR0FBUCxDQUFZQyxJQUFELElBQVU7QUFDNUMsYUFBTztBQUNMZixVQUFFLEVBQUVlLElBQUksQ0FBQ0osR0FBTCxDQUFTSyxRQUFULEVBREM7QUFFTHJCLGFBQUssRUFBRW9CLElBQUksQ0FBQ3BCLEtBRlA7QUFHTEMsYUFBSyxFQUFFbUIsSUFBSSxDQUFDbkIsS0FIUDtBQUlMQyxtQkFBVyxFQUFFa0IsSUFBSSxDQUFDbEIsV0FKYjtBQUtMQyxlQUFPLEVBQUVpQixJQUFJLENBQUNqQjtBQUxULE9BQVA7QUFPRCxLQVJ3QixDQUF6QjtBQVNBRyxVQUFNLENBQUNnQixLQUFQO0FBQ0EsV0FBT0osZ0JBQVA7QUFDRCxHQXhCRCxDQXdCRSxPQUFPSyxFQUFQLEVBQVc7QUFDWDFCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZeUIsRUFBRSxDQUFDQyxPQUFmO0FBQ0Q7QUFDRjs7QUFFTSxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLE9BQU8sR0FBRyxNQUFNdEIsVUFBVSxFQUFoQztBQUNBLFNBQU87QUFDTHVCLFNBQUssRUFBRUQsT0FBTyxDQUFDUCxHQUFSLENBQWFDLElBQUQsSUFBVTtBQUMzQixhQUFPO0FBQ0xRLGNBQU0sRUFBRTtBQUNOQyxrQkFBUSxFQUFFVCxJQUFJLENBQUNmO0FBRFQ7QUFESCxPQUFQO0FBS0QsS0FOTSxDQURGO0FBUUx5QixZQUFRLEVBQUU7QUFSTCxHQUFQO0FBVUQ7QUFFTSxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QztBQUNBLE1BQUk7QUFDRixVQUFNSCxRQUFRLEdBQUdHLE9BQU8sQ0FBQ0osTUFBUixDQUFlQyxRQUFoQztBQUNBLFVBQU1qQyxXQUFXLEdBQUcsTUFBTVEsVUFBVSxDQUFDeUIsUUFBRCxDQUFwQztBQUNBLFdBQU87QUFDTEksV0FBSyxFQUFFO0FBQ0xyQyxtQkFBVyxFQUFFQSxXQUFXLENBQUMsQ0FBRDtBQURuQjtBQURGLEtBQVA7QUFLRCxHQVJELENBUUUsT0FBT3NDLEdBQVAsRUFBWTtBQUNackMsV0FBTyxDQUFDQyxHQUFSLENBQVlvQyxHQUFHLENBQUNWLE9BQWhCO0FBQ0Q7QUFDRjtBQUVjN0IsZ0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCI7XG5cbmZ1bmN0aW9uIE1lZXR1cERldGFpbHNQYWdlKHsgbWVldHVwc0RhdGEgfSkge1xuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5EQl9QQVNTV09SRCk7XG4gIHJldHVybiAoXG4gICAgPE1lZXR1cERldGFpbHNcbiAgICAgIHRpdGxlPXttZWV0dXBzRGF0YS50aXRsZX1cbiAgICAgIGltYWdlPXttZWV0dXBzRGF0YS5pbWFnZX1cbiAgICAgIGRlc2NyaXB0aW9uPXttZWV0dXBzRGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgIGFkZHJlc3M9e21lZXR1cHNEYXRhLmFkZHJlc3N9XG4gICAgLz5cbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TWVldHVwcyhpZCA9IG51bGwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgYG1vbmdvZGIrc3J2Oi8vZ3JlZW55OiR7cHJvY2Vzcy5lbnYuREJfUEFTU1dPUkR9QGdyZWVueS56MmppdmcwLm1vbmdvZGIubmV0L21lZXR1cD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXG4gICAgKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgIGNvbnN0IG1lZXR1cENvbGwgPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IG1lZXR1cENvbGwuZmluZCgpLnRvQXJyYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgbWVldHVwQ29sbC5maW5kT25lKHsgX2lkOiBPYmplY3RJZChpZCkgfSk7XG4gICAgICByZXN1bHQgPSBbcmVzdWx0XTtcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZFJlc3VsdCA9IHJlc3VsdC5tYXAoKG1lZXQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBtZWV0Ll9pZC50b1N0cmluZygpLFxuICAgICAgICB0aXRsZTogbWVldC50aXRsZSxcbiAgICAgICAgaW1hZ2U6IG1lZXQuaW1hZ2UsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBtZWV0LmRlc2NyaXB0aW9uLFxuICAgICAgICBhZGRyZXNzOiBtZWV0LmFkZHJlc3MsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybiBzZXJpYWxpemVkUmVzdWx0O1xuICB9IGNhdGNoIChlcikge1xuICAgIGNvbnNvbGUubG9nKGVyLm1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IGdldE1lZXR1cHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIG1lZXR1cElkOiBtZWV0LmlkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSB0aGUgc2VydmVyIG9yIEFQSVxuICB0cnkge1xuICAgIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XG4gICAgY29uc3QgbWVldHVwc0RhdGEgPSBhd2FpdCBnZXRNZWV0dXBzKG1lZXR1cElkKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbWVldHVwc0RhdGE6IG1lZXR1cHNEYXRhWzBdLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });