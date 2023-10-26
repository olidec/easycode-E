const assert = chai.assert
import * as funcs from "../script.js"

import { testSuite } from "./test.suite.js"

const APP = {}

if (!window.APP_TYPE) APP.type = "default"
else APP.type = window.APP_TYPE

testSuite({ assert, funcs, APP })
