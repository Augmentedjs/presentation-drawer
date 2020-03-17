const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = (new JSDOM(/*html*/`<!doctype html><html><head><title>Test</title></head><body><div id="main"></div></body></html>`)).window;

global.document = dom.document;
global.window = dom.window;
global.navigator = {
  userAgent: "node.js"
};

global.Drawer = require("../dist/presentation-drawer.js");

const chai = require("chai");
global.chai = chai;
global.expect = chai.expect;
