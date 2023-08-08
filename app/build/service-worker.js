/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-0b008d8b'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "../dist/app/src/app/index.d.ts",
    "revision": "6725d8f98d8530eedfa9eb1bf74ec4e0"
  }, {
    "url": "../dist/app/src/app/pages/index.d.ts",
    "revision": "fa62d718d7524b65aa600c75ec1adfee"
  }, {
    "url": "../dist/app/src/app/pages/theme/index.d.ts",
    "revision": "fa62d718d7524b65aa600c75ec1adfee"
  }, {
    "url": "../dist/app/src/components/scene/scene.d.ts",
    "revision": "f5039482f874bee9e3ad3e75545db6b1"
  }, {
    "url": "../dist/app/src/index.d.ts",
    "revision": "0884b76b9b8bd3d2776e1840cd54d79b"
  }, {
    "url": "../dist/app/src/ui/color.d.ts",
    "revision": "ec8f8d5e8129ae9ac141b7292f90be65"
  }, {
    "url": "../dist/app/src/ui/styles/color.d.ts",
    "revision": "83f858d07cbedce45b08106aa42773a1"
  }, {
    "url": "../dist/app/src/ui/styles/crcumference.d.ts",
    "revision": "8a97996c010d0c48093a69dc8e32081a"
  }, {
    "url": "../dist/app/src/ui/styles/overflow.d.ts",
    "revision": "166265fc9a6a9d26d47d296f0d4162a8"
  }, {
    "url": "../dist/app/src/ui/styles/space.d.ts",
    "revision": "72b6b24f96638bba148a2c5f59e4810d"
  }, {
    "url": "../dist/app/src/ui/theme/index.d.ts",
    "revision": "514ca82afd2fd9a83af24a9ea2384859"
  }, {
    "url": "../dist/app/src/ui/theme/theme.d.ts",
    "revision": "60b3dd3923d44d60cb384f1075ac2550"
  }, {
    "url": "../dist/app/src/ui/util/calc.d.ts",
    "revision": "1018329194159c300b4336072402b35e"
  }, {
    "url": "../dist/app/src/ui/view/panel.d.ts",
    "revision": "df249e1701ee33de6d501deb4e436898"
  }, {
    "url": "../dist/lib/src/data.d.ts",
    "revision": "cb29d616f0aaf98144a7869a4ff8b091"
  }, {
    "url": "../dist/lib/src/index.d.ts",
    "revision": "5d313bc0437a33e7324965a8cf84db42"
  }, {
    "url": "../dist/lib/src/move/index.d.ts",
    "revision": "fc39e41039f41f652e0afe1257054ece"
  }, {
    "url": "../dist/lib/src/move/jump.d.ts",
    "revision": "0e3e58d54bdcf7f03b9680f2bc4ee254"
  }, {
    "url": "../dist/lib/src/move/types.d.ts",
    "revision": "585ff8d0cf8758d48083fe7be94f3589"
  }, {
    "url": "../dist/lib/src/painter/background/background.d.ts",
    "revision": "c6b6369627538d60e0291d987cd48e71"
  }, {
    "url": "../dist/lib/src/painter/background/index.d.ts",
    "revision": "b105e71a44728a23fda767585e5c1292"
  }, {
    "url": "../dist/lib/src/painter/clear.d.ts",
    "revision": "4f7ccba74bfacc12ed5641a68c17ef35"
  }, {
    "url": "../dist/lib/src/painter/group.d.ts",
    "revision": "efc28b1402f1fc59e4f326692e86812e"
  }, {
    "url": "../dist/lib/src/painter/logic.d.ts",
    "revision": "e55b69bfa254a3eaa710ebb9ac35fd9e"
  }, {
    "url": "../dist/lib/src/painter/painter-interface.d.ts",
    "revision": "eb445beb9f9ace18f8f85a7a04f55d30"
  }, {
    "url": "../dist/lib/src/ref-map.d.ts",
    "revision": "d81012a74cc1441f1bcd0bd689e0cfef"
  }, {
    "url": "../dist/lib/src/scene/asset/asset.d.ts",
    "revision": "745e028074219df1e3dbbebdf135b44b"
  }, {
    "url": "../dist/lib/src/scene/asset/index.d.ts",
    "revision": "c3a7aff3143acffcb35785bf2372915b"
  }, {
    "url": "../dist/lib/src/scene/index.d.ts",
    "revision": "2be21875ffe22c3e7e348626febdc965"
  }, {
    "url": "../dist/lib/src/scene/resources.d.ts",
    "revision": "82aa587ca523c9719c77145a6fc8f175"
  }, {
    "url": "../dist/lib/src/scene/scene.d.ts",
    "revision": "9ea53647398c07437842d55d793ff3e9"
  }, {
    "url": "../dist/lib/src/types.d.ts",
    "revision": "adff37dace16b1fc7d1f806db0ec234c"
  }, {
    "url": "404.html",
    "revision": "0aea3f1b302d9aa9b673006cdd1ab44f"
  }, {
    "url": "favicon.ico",
    "revision": "9a976aa1a79bce53684a8e4d70234719"
  }, {
    "url": "index.html",
    "revision": "03f7a3e6d4ea9a2af4bb9ee9a4bfd5e5"
  }, {
    "url": "manga.jpg",
    "revision": "8559541bb9e4858e79559f61b2b71db3"
  }, {
    "url": "scr/app.7bc8e8a4adcef4214eb2.js",
    "revision": null
  }, {
    "url": "scr/runtime.323f5e6b84c76b208aef.js",
    "revision": null
  }], {});

}));
//# sourceMappingURL=service-worker.js.map
