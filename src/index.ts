import { Key } from './entities/key.entity';
import { Node } from './entities/node.entity';
import { Graph } from './entities/graph.entity';

const graph = new Graph([
    new Key('start', [
        new Node('A', 5),
        new Node('B', 1),
        new Node('F', 12),
    ]),
    new Key('A', [
        new Node('C', 8),
        new Node('D', 2),
    ]),
    new Key('B', [
        new Node('A', 8),
        new Node('D', 7),
        new Node('F', 12),
    ]),
    new Key('C', [
        new Node('D', 4),
        new Node('finish', 3),
    ]),
    new Key('D', [
        new Node('finish', 4),
    ]),
    new Key('E', [
        new Node('B', 2),
        new Node('C', 1),
    ]),
    new Key('F', [
        new Node('finish', 2),
    ]),
    new Key('finish', []),
]);

console.log(graph.dijkstra());