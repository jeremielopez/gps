import { Node } from "./node.entity";

export class Key {
    public name: string;
    public nodes: Node[];

    constructor(name: string, nodes: Node[]) {
        this.name = name;
        this.nodes = nodes;
    }
}
