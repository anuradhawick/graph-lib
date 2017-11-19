export default class Node<T> {
    id: T;
    neighbours: Array<{
        id: T;
        node: Node<T>;
        distance: number;
    }>;
    props: any;
    constructor(id?: T);
    getId(): T;
    setId(id: T): void;
    injectProperty(propName: string, propValue: any): void;
    getProperty(propName: string): any;
    getNeighbours(): Array<{
        id: T;
        node: Node<T>;
        distance: number;
    }>;
    addNeighbourById(id: T, node: Node<T>, distance?: number): void;
    addNeighbour(node: Node<T>, distance?: number): void;
    dropNeighbourById(id: T): {
        id: T;
        node: Node<T>;
        distance: number;
    };
    dropNeighbour(node: Node<T>): {
        id: T;
        node: Node<T>;
        distance: number;
    };
    getDistanceTo(id: T): {
        id: T;
        node: Node<T>;
        distance: number;
    } | undefined;
}
