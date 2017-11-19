import * as _ from 'lodash';

import Node from './Node';

export default class Graph<T> {
    nodeMap: any;
    functions: any;
    isDirected: boolean;

    constructor(isDirected: boolean = false) {
        this.nodeMap = {};
        this.functions = {};
        this.isDirected = isDirected;
    }

    addEdge(start: Node<T>, end: Node<T>, distance: number = 0) {
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
    }

    removeEdge(start: Node<T>, end: Node<T>) {
        if (_.isEmpty(this.nodeMap[start.id]) || _.isEmpty(this.nodeMap[end.id])) {
            throw Error("Graph Error: Node not defined");
        }
        start.dropNeighbour(end);
        if (!this.isDirected) {
            end.dropNeighbour(end);
        }
    }

    getNode(id: T) {
        return this.nodeMap[id];
    }

    removeNode(id: T) {
        delete this.nodeMap[id];
    }

    runAlgorithm(name: string) {
        if (_.isEmpty(this.functions[name])) {
            throw Error("Graph Error: Algorithm not defined");
        } else {
            return this.functions[name]();
        }
    }

    addAlgorithm(name: string, func: Function) {
        this.functions[name] = func;
    }
}