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
    var clear = new tgd2_painter_clear__WEBPACK_IMPORTED_MODULE_2__["default"](scene, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNhN2VmNjBlNjA1N2VjMjQwZWZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2M7QUFDUztBQUNIO0FBQ0E7QUFFTDtBQUl6QixTQUFTLElBQUk7SUFDeEIsT0FBTyxDQUNIO1FBQ0ksMkRBQUMsa0RBQUksSUFBQyxFQUFFLEVBQUMsT0FBTyxZQUFhO1FBQzdCLDJEQUFDLCtEQUFTLElBQ04sT0FBTyxFQUFFLGVBQUs7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQyxVQUFVLE9BQWhCLEtBQUssMkJBQWUsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFDO2dCQUN4QyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUk7WUFDeEIsQ0FBQyxHQUNILENBQ0EsQ0FDVDtBQUNMLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFZO0lBQzlCLElBQU0sSUFBSSxHQUFHLHVEQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDN0MsSUFBTSxLQUFLLEdBQUcsSUFBSSwwREFBWSxDQUFDLEtBQUssRUFBRTtRQUNsQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDNUIsQ0FBQztJQUVGLE9BQU87UUFDSCxLQUFLO1FBQ0wsSUFBSSwwREFBWSxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDekIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7S0FDTDtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgU2NlbmVWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvc2NlbmUvc2NlbmVcIlxuaW1wb3J0IFBhaW50ZXJDbGVhciBmcm9tIFwidGdkMi9wYWludGVyL2NsZWFyXCJcbmltcG9ydCBQYWludGVyTG9naWMgZnJvbSBcInRnZDIvcGFpbnRlci9sb2dpY1wiXG5pbXBvcnQgeyBQYWludGVySW50ZXJmYWNlIH0gZnJvbSBcInRnZDIvcGFpbnRlci9wYWludGVyLWludGVyZmFjZVwiXG5pbXBvcnQgeyBtYWtlTW92ZUp1bXAgfSBmcm9tIFwidGdkMi9tb3ZlXCJcbmltcG9ydCB7IG1ha2VEYXRhIH0gZnJvbSBcInRnZDIvZGF0YVwiXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJ0Z2QyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCJ0aGVtZVwiPlRoZW1lPC9MaW5rPlxuICAgICAgICAgICAgPFNjZW5lVmlld1xuICAgICAgICAgICAgICAgIG9uUmVhZHk9e3NjZW5lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvblJlYWR5Li4uXCIpXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmFkZFBhaW50ZXIoLi4ubWFrZVBhaW50ZXJzKHNjZW5lKSlcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuYW5pbWF0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBtYWtlUGFpbnRlcnMoc2NlbmU6IFNjZW5lKTogUGFpbnRlckludGVyZmFjZVtdIHtcbiAgICBjb25zdCBqdW1wID0gbWFrZU1vdmVKdW1wKHsgZHVyYXRpb246IDE1MDAgfSlcbiAgICBjb25zdCBjbGVhciA9IG5ldyBQYWludGVyQ2xlYXIoc2NlbmUsIHtcbiAgICAgICAgY29sb3I6IFswLjMsIDAuNiwgMC45LCAxXSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncmVlbiA9IGp1bXAodGltZSlcbiAgICAgICAgICAgIGNsZWFyLnNldENsZWFyQ29sb3IoMCwgZ3JlZW4sIDAsIDEpXG4gICAgICAgIH0pLFxuICAgIF1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==