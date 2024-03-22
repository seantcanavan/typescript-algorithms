class BinaryTree<T> {
    head: Node<T> | undefined
    mode: Mode = Mode.DepthFirstSearch;

    constructor(mode: Mode) {
        this.mode = mode
    }

    add(t: T): Node<T> {
        return addNode(t)
    }

    private addNode(t: T) Node<T> {

    }

    find(t: T): Node<T> | undefined {
        return this.findNode(t, this.head)
    }

    private findNode(t: T, head: Node<T> | undefined): Node<T> | undefined {
        if (head === undefined) {
            return undefined
        }

        if (t > head.data) {
            return this.findNode(t, head.right)
        } else if (t < head.data) {
            return this.findNode(t, head.left)
        } else {
            return head
        }
    }
}

class Node<T> {
    left: Node<T> | undefined
    right: Node<T> | undefined
    data: T

    constructor(data: T) {
        this.data = data
    }
}

enum Mode {
    DepthFirstSearch = 0,
    BreadthFirstSearch = 1,
    InOrder = 2,
}
