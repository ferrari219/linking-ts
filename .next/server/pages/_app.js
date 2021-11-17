"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@emotion/react/jsx-runtime"
const react_jsx_runtime_namespaceObject = require("@emotion/react/jsx-runtime");
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./src/styles/Globals.tsx

/** @jsxImportSource @emotion/react */ 
const Globals = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime_namespaceObject.jsx(react_namespaceObject.Global, {
        styles: react_namespaceObject.css`
        html {
          overflow-x: hidden;
          display: block;
          font-size: 62.5%;
          box-sizing: border-box;
          * {
            box-sizing: inherit;
          }
        }
        ul,
        dl {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        body {
          max-width: 89rem;
          margin: 0 auto;
          /* background-color: #141414; */
          a {
            text-decoration: none;
            color: inherit;
          }

          /*******************************************************************
  font
  ********************************************************************/
          font-family: Roboto, AppleSDGothicNeo-Regular, NotoSansKR, "Noto+Sans",
            "Malgun Gothic", "맑은 고딕", sans-serif;
          font-size: 1.8rem;
          line-height: 1.5;
          letter-spacing: -0.08rem;
          * {
            font-family: inherit;
            line-height: inherit;
            letter-spacing: inherit;
          }
          @font-face {
            font-family: "NotoSansKR";
            src: url(https://ferrari219.github.io/fonts/NotoSansCJKkr-DemiLight.woff2)
                format("woff2"),
              url(https://ferrari219.github.io/fonts/NotoSansCJKkr-DemiLight.woff)
                format("woff"),
              url(https://ferrari219.github.io/fonts/NotoSansCJKkr-DemiLight.otf)
                format("opentype");
            font-weight: 400;
          }
          @font-face {
            font-family: "NotoSansKR";
            src: url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Medium.woff2)
                format("woff2"),
              url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Medium.woff)
                format("woff"),
              url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Medium.otf)
                format("opentype");
            font-weight: 600;
          }
          @font-face {
            font-family: "NotoSansKR";
            src: url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Bold.woff2)
                format("woff2"),
              url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Bold.woff)
                format("woff"),
              url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Bold.otf)
                format("opentype");
            font-weight: 700;
          }
          @font-face {
            font-family: "Roboto";
            src: url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Regular.woff2)
                format("woff2"),
              url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Regular.woff)
                format("woff"),
              url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Regular.eot)
                format("embedded-opentype");
            font-weight: 400;
          }
          @font-face {
            font-family: "Roboto";
            src: url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Bold.woff2)
                format("woff2"),
              url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Bold.woff)
                format("woff"),
              url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Bold.eot)
                format("embedded-opentype");
            font-weight: 600;
          }
        }
      `
    }));
};
/* harmony default export */ const styles_Globals = (Globals);

;// CONCATENATED MODULE: ./pages/_app.tsx


function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(styles_Globals, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(463));
module.exports = __webpack_exports__;

})();