import Node from './lib/node';
import Graph from './lib/graph';

const n = new Node();
n.injectProperty('getId', function() {
});

n.getProperty('getId')();