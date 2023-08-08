"use strict";
self["webpackHotUpdate"]("app",{

/***/ 1103:
/*!*********************************!*\
  !*** ./src/app/pages/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 9655);
/* harmony import */ var _components_scene_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/scene/scene */ 600);
/* harmony import */ var tgd2_painter_clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tgd2/painter/clear */ 5211);
/* harmony import */ var tgd2_painter_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tgd2/painter/logic */ 9404);
/* harmony import */ var tgd2_move__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tgd2/move */ 170);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};






function Home() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, { to: "theme" }, "Theme"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_scene_scene__WEBPACK_IMPORTED_MODULE_1__["default"], { onReady: function (scene) {
                console.log("onReady...");
                scene.addPainter.apply(scene, __spreadArray([], __read(makePainters(scene)), false));
                scene.animate = true;
            } })));
}
function makePainters(scene) {
    var jump = (0,tgd2_move__WEBPACK_IMPORTED_MODULE_4__.makeMoveJump)({ duration: 1500 });
    var clear = new tgd2_painter_clear__WEBPACK_IMPORTED_MODULE_2__["default"]({
        color: [0.3, 0.6, 0.9, 1],
    });
    return [
        clear,
        new tgd2_painter_logic__WEBPACK_IMPORTED_MODULE_3__["default"](function (time, delay) {
            var green = jump(time);
            clear.setClearColor(0, green, 0, 1);
        }),
    ];
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjA4N2RiYjI4MmM0YWI1ZDZlOTQ5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2M7QUFDUztBQUNIO0FBQ0E7QUFFTDtBQUl6QixTQUFTLElBQUk7SUFDeEIsT0FBTyxDQUNIO1FBQ0ksMkRBQUMsa0RBQUksSUFBQyxFQUFFLEVBQUMsT0FBTyxZQUFhO1FBQzdCLDJEQUFDLCtEQUFTLElBQ04sT0FBTyxFQUFFLGVBQUs7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQyxVQUFVLE9BQWhCLEtBQUssMkJBQWUsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFDO2dCQUN4QyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUk7WUFDeEIsQ0FBQyxHQUNILENBQ0EsQ0FDVDtBQUNMLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFZO0lBQzlCLElBQU0sSUFBSSxHQUFHLHVEQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDN0MsSUFBTSxLQUFLLEdBQUcsSUFBSSwwREFBWSxDQUFDO1FBQzNCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUM1QixDQUFDO0lBRUYsT0FBTztRQUNILEtBQUs7UUFDTCxJQUFJLDBEQUFZLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUN6QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztLQUNMO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCBTY2VuZVZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9zY2VuZS9zY2VuZVwiXG5pbXBvcnQgUGFpbnRlckNsZWFyIGZyb20gXCJ0Z2QyL3BhaW50ZXIvY2xlYXJcIlxuaW1wb3J0IFBhaW50ZXJMb2dpYyBmcm9tIFwidGdkMi9wYWludGVyL2xvZ2ljXCJcbmltcG9ydCB7IFBhaW50ZXJJbnRlcmZhY2UgfSBmcm9tIFwidGdkMi9wYWludGVyL3BhaW50ZXItaW50ZXJmYWNlXCJcbmltcG9ydCB7IG1ha2VNb3ZlSnVtcCB9IGZyb20gXCJ0Z2QyL21vdmVcIlxuaW1wb3J0IHsgbWFrZURhdGEgfSBmcm9tIFwidGdkMi9kYXRhXCJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcInRnZDJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cInRoZW1lXCI+VGhlbWU8L0xpbms+XG4gICAgICAgICAgICA8U2NlbmVWaWV3XG4gICAgICAgICAgICAgICAgb25SZWFkeT17c2NlbmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUmVhZHkuLi5cIilcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuYWRkUGFpbnRlciguLi5tYWtlUGFpbnRlcnMoc2NlbmUpKVxuICAgICAgICAgICAgICAgICAgICBzY2VuZS5hbmltYXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIG1ha2VQYWludGVycyhzY2VuZTogU2NlbmUpOiBQYWludGVySW50ZXJmYWNlW10ge1xuICAgIGNvbnN0IGp1bXAgPSBtYWtlTW92ZUp1bXAoeyBkdXJhdGlvbjogMTUwMCB9KVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFBhaW50ZXJDbGVhcih7XG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjYsIDAuOSwgMV0sXG4gICAgfSlcblxuICAgIHJldHVybiBbXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JlZW4gPSBqdW1wKHRpbWUpXG4gICAgICAgICAgICBjbGVhci5zZXRDbGVhckNvbG9yKDAsIGdyZWVuLCAwLCAxKVxuICAgICAgICB9KSxcbiAgICBdXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=