import * as utils from "../utils.js"
import * as funcs from "../script.js"
;[funcs, utils].forEach((moduleName) => {
  Object.getOwnPropertyNames(moduleName).forEach((name) => {
    if (typeof moduleName[name] === "function") {
      window[name] = moduleName[name]
    }
  })
})
