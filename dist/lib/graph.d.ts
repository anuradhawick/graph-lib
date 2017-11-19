import Node from './Node';
export default class Graph<T> {
    nodeMap: any;
    functions: any;
    isDirected: boolean;
    constructor(isDirected?: boolean);
    addEdge(start: Node<T>, end: Node<T>, distance?: number): void;
    removeEdge(start: Node<T>, end: Node<T>): void;
    getNode(id: T): any;
    removeNode(id: T): void;
    runAlgorithm(name: string): any;
    addAlgorithm(name: string, func: Function): void;
}
