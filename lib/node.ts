import * as _ from 'lodash';
import * as uuid from 'uuid/v4';

export default class Node<T> {
    id: T;
    neighbours: Array<{ id: T, node: Node<T>, distance: number }>
    props: any;

    constructor(id: T = uuid() as any) {
        this.id = id;
        this.neighbours = new Array();
        this.props = {};
    }

    getId(): T {
        return this.id;
    }

    setId(id: T): void {
        this.id = id;
    }

    injectProperty(propName: string, propValue: any) {
        this.props[propName] = propValue;
    }

    getProperty(propName: string) {
        return this.props[propName];
    }

    getNeighbours(): Array<{ id: T, node: Node<T>, distance: number }> {
        return this.neighbours;
    }

    addNeighbourById(id: T, node: Node<T>, distance: number = 0) {
        // TODO check if neighbour is already there
        this.neighbours.push({ id, node, distance });
    }

    addNeighbour(node: Node<T>, distance: number = 0) {
        this.neighbours.push({ id: node.getId(), node, distance });
    }

    dropNeighbourById(id: T) {
        const removed = _.remove(this.neighbours, (neighbour) => neighbour.id === id);

        if (_.isEmpty(removed)) {
            throw Error("Node Error: Neighbour not found");
        } else {
            return removed[0];
        }
    }

    dropNeighbour(node: Node<T>) {
        const removed = _.remove(this.neighbours, (neighbour) => neighbour.id === node.getId());

        if (_.isEmpty(removed)) {
            throw Error("Node Error: Neighbour not found");
        } else {
            return removed[0];
        }
    }

    getDistanceTo(id: T) {
        const neighbour = _.find(this.neighbours, (neighbour) => neighbour.id === id);

        if (_.isEmpty(neighbour)) {
            throw Error("Node Error: Neighbour not found");
        } else {
            return neighbour;
        }
    }
}