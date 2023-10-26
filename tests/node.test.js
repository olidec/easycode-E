import { assert } from "chai"
import * as funcs from "../script.js"

import { testSuite } from "./test.suite.js"

const APP = {}

if (process.argv.length <= 3) APP.type = "default"
else if (process.argv.length == 4) APP.type = process.argv[3]

testSuite({ assert, funcs, APP })
