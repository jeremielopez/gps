import { Key } from './entities/key.entity';
import { Node } from './entities/node.entity';
import { Graph } from './entities/graph.entity';

const graph = new Graph([
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
        new Node('G', 3),
    ]),
    new Key('D', [
        new Node('F', 4),
    ]),
    new Key('E', [
        new Node('B', 2),
        new Node('C', 1),
    ]),
    new Key('F', [
        new Node('G', 2),
    ]),
    new Key('G', [
        new Node('E', 2),
        new Node('D', 2),
    ]),
]);

console.log(graph.dijkstra('A', 'G'));