class BinaryTree<T> {
    head: Node<T> | undefined
    mode: Mode = Mode.DepthFirstSearch;

    constructor(mode: Mode) {
        this.mode = mode
    }

    add(t: T): Node<T> {
        if (this.head === undefined) {
            this.head = new Node<T>(t)
        }

        return this.addNode(t, this.head)
    }

    delete(t: T): Node<T> | undefined {
        return this.deleteNode(t, this.head)
    }

    find(t: T): Node<T> | undefined {
        return this.findNode(t, this.head)
    }

    print() {
        if (this.mode == Mode.InOrder) {
            this.printInOrder()
        } else if (this.mode == Mode.BreadthFirstSearch) {
            this.printBreadthFirst()
        } else if (this.mode == Mode.DepthFirstSearch) {
            this.printDepthFirst()
        }
    }


    private addNode(t: T, head: Node<T> | undefined): Node<T> {
        if (head === undefined) {
            return new Node<T>(t)
        } else if (t > head.data) {
            return this.addNode(t, head.right)
        } else if (t < head.data) {
            return this.addNode(t, head.left)
        } else {
            return head
        }
    }

    private deleteNode(t: T, head: Node<T> | undefined): Node<T> | undefined {
        if (head === undefined) {
            return undefined
        }

        if (t > head.data) {
            return this.deleteNode(t, head.right)
        } else if (t < head.data) {
            return this.deleteNode(t, head.left)
        } else {
            const maxOfMin: Node<T> = this.getMaxOfMin(head)
            const oldData: T = head.data
            head.data = maxOfMin.data
            return this.deleteNode(oldData, head)
        }
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

    private getMaxOfMin(head: Node<T>): Node<T> {
        let currentHead: Node<T> = head
        while (currentHead.left !== undefined) {
            currentHead = currentHead.left
        }

        return currentHead
    }

    private printInOrder(): void {

    }

    private printBreadthFirst(): void {

    }

    private printDepthFirst(): void {
        
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
