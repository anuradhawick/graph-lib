"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var uuid = require("uuid/v4");
var Node = /** @class */ (function () {
    function Node(id) {
        if (id === void 0) { id = uuid(); }
        this.id = id;
        this.neighbours = new Array();
        this.props = {};
    }
    Node.prototype.getId = function () {
        return this.id;
    };
    Node.prototype.setId = function (id) {
        this.id = id;
    };
    Node.prototype.injectProperty = function (propName, propValue) {
        this.props[propName] = propValue;
    };
    Node.prototype.getProperty = function (propName) {
        return this.props[propName];
    };
    Node.prototype.getNeighbours = function () {
        return this.neighbours;
    };
    Node.prototype.addNeighbourById = function (id, node, distance) {
        if (distance === void 0) { distance = 0; }
        // TODO check if neighbour is already there
        this.neighbours.push({ id: id, node: node, distance: distance });
    };
    Node.prototype.addNeighbour = function (node, distance) {
        if (distance === void 0) { distance = 0; }
        this.neighbours.push({ id: node.getId(), node: node, distance: distance });
    };
    Node.prototype.dropNeighbourById = function (id) {
        var removed = _.remove(this.neighbours, function (neighbour) { return neighbour.id === id; });
        if (_.isEmpty(removed)) {
            throw Error("Node Error: Neighbour not found");
        }
        else {
            return removed[0];
        }
    };
    Node.prototype.dropNeighbour = function (node) {
        var removed = _.remove(this.neighbours, function (neighbour) { return neighbour.id === node.getId(); });
        if (_.isEmpty(removed)) {
            throw Error("Node Error: Neighbour not found");
        }
        else {
            return removed[0];
        }
    };
    Node.prototype.getDistanceTo = function (id) {
        var neighbour = _.find(this.neighbours, function (neighbour) { return neighbour.id === id; });
        if (_.isEmpty(neighbour)) {
            throw Error("Node Error: Neighbour not found");
        }
        else {
            return neighbour;
        }
    };
    return Node;
}());
exports.default = Node;
