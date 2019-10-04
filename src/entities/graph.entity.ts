import { Key } from "./key.entity";
import { Node } from "./node.entity";

export class Graph {
    public keys: Key[];

    constructor(keys: Key[]) {
        this.keys = keys;
    }

    public dijkstra(startPoint: string, endPoint: string) {
        const start = this.keys
            .find(element => element.name === startPoint);

        this.keys
            .find(element => element.name === startPoint)
            .nodes
            .push(new Node(endPoint, Infinity));

        const nodes = this.keys
            .find(element => element.name === startPoint)
            .nodes

        const parents = { finish: null };

        start.nodes.forEach(node => {
            parents[node.target] = 'start'
        });

        const processed: string[] = [];

        let node = Node.lowestCostNode(nodes, processed);

        while (node !== null) {
            let children = this.keys
                .find(element => element.name === node.target);

            children.nodes.forEach(child => {
                let newCost = node.weight + child.weight;
                if (!nodes.find(element => element.target === child.target)) {
                    nodes.push(new Node(child.target, newCost));
                    parents[child.target] = node.target;
                }
                if (nodes.find(element => element.target === child.target).weight > newCost) {
                    nodes[
                        nodes.findIndex(element => element.target === child.target)
                    ].weight = newCost;
                    parents[child.target] = node.target;
                }
            })

            processed.push(node.target);
            node = Node.lowestCostNode(nodes, processed);
        }

        let optimalPath = [endPoint];

        let parent = parents[endPoint];

        while (parent) {
            optimalPath.push(parent);
            parent = parents[parent];
        }

        optimalPath.reverse();

        optimalPath[0] = startPoint;

        const results = {
            distance: nodes.find(element => element.target === endPoint).weight,
            path: optimalPath
        };

        return results;
    };
}