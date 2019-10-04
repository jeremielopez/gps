export class Node {
    public target: string;
    public weight: number;

    constructor(target: string, weight: number) {
        this.target = target;
        this.weight = weight;
    }

    public static lowestCostNode(nodes: Node[], processed: string[]) {
        return nodes.reduce((lowest, node) => {
            if (lowest === null || node.weight < lowest.weight) {
                if (!processed.includes(node.target)) {
                    lowest = node;
                }
            }
            return lowest;
        }, null);
    };
}