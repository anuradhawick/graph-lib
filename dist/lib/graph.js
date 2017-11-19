"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Graph = /** @class */ (function () {
    function Graph(isDirected) {
        if (isDirected === void 0) { isDirected = false; }
        this.nodeMap = {};
        this.functions = {};
        this.isDirected = isDirected;
    }
    Graph.prototype.addEdge = function (start, end, distance) {
        if (distance === void 0) { distance = 0; }
        // If not in nodeMap add it
        if (_.isEmpty(this.nodeMap[start.id])) {
            this.nodeMap[start.id] = start;
        }
        if (_.isEmpty(this.nodeMap[end.id])) {
            this.nodeMap[end.id] = end;
        }
        start.addNeighbour(end, distance);
        if (!this.isDirected) {
            end.addNeighbour(start, distance);
        }
    };
    Graph.prototype.removeEdge = function (start, end) {
        if (_.isEmpty(this.nodeMap[start.id]) || _.isEmpty(this.nodeMap[end.id])) {
            throw Error("Graph Error: Node not defined");
        }
        start.dropNeighbour(end);
        if (!this.isDirected) {
            end.dropNeighbour(end);
        }
    };
    Graph.prototype.getNode = function (id) {
        return this.nodeMap[id];
    };
    Graph.prototype.removeNode = function (id) {
        delete this.nodeMap[id];
    };
    Graph.prototype.runAlgorithm = function (name) {
        if (_.isEmpty(this.functions[name])) {
            throw Error("Graph Error: Algorithm not defined");
        }
        else {
            return this.functions[name]();
        }
    };
    Graph.prototype.addAlgorithm = function (name, func) {
        this.functions[name] = func;
    };
    return Graph;
}());
exports.default = Graph;
