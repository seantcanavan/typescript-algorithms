export class BinaryTree<T> {
    head: BinaryTreeNode<T> | undefined

    add(t: T): BinaryTreeNode<T> {
        if (this.head === undefined) {
            this.head = new BinaryTreeNode<T>(t)
        }

        return this.addNode(t, this.head)
    }

    delete(t: T): BinaryTreeNode<T> | undefined {
        return this.deleteNode(t, this.head)
    }

    find(t: T): BinaryTreeNode<T> | undefined {
        return this.findNode(t, this.head)
    }

    toArray(mode: BinaryTreeMode): Array<T> {
        if (this.head === undefined) {
            return new Array<T>()
        }

        return this.toArrayNode(mode, this.head)
    }


    private addNode(t: T, head: BinaryTreeNode<T> | undefined): BinaryTreeNode<T> {
        if (head === undefined) {
            return new BinaryTreeNode<T>(t)
        } else if (t > head.data) {
            head.right = this.addNode(t, head.right)
            return head
        } else if (t < head.data) {
            head.left = this.addNode(t, head.left)
            return head
        } else {
            return head
        }
    }

    private deleteNode(t: T, head: BinaryTreeNode<T> | undefined): BinaryTreeNode<T> | undefined {
        if (head === undefined) {
            return undefined
        }

        if (t > head.data) {
            head.right = this.deleteNode(t, head.right)
            return head
        } else if (t < head.data) {
            head.left = this.deleteNode(t, head.left)
            return head
        } else {
            const maxOfMin: BinaryTreeNode<T> = this.getMaxOfMin(head)
            const oldData: T = head.data
            head.data = maxOfMin.data
            return this.deleteNode(oldData, head)
        }
    }

    private findNode(t: T, head: BinaryTreeNode<T> | undefined): BinaryTreeNode<T> | undefined {
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

    private getMaxOfMin(head: BinaryTreeNode<T>): BinaryTreeNode<T> {
        let currentHead: BinaryTreeNode<T> = head
        while (currentHead.left !== undefined) {
            currentHead = currentHead.left
        }

        return currentHead
    }

    private toArrayInOrder(): Array<T> {
        const results: (T)[] = new Array<T>();

        if (this.head === undefined) {
            return results
        }


    }

    private toArrayBreadthFirst(): Array<T> {
        if (this.head === undefined) {
            return new Array<T>();
        }
    }

    private toArrayDepthFirst(): Array<T> {
        if (this.head === undefined) {
            return
        }
    }
}

export class BinaryTreeNode<T> {
    left: BinaryTreeNode<T> | undefined
    right: BinaryTreeNode<T> | undefined
    data: T

    constructor(data: T) {
        this.data = data
    }
}

export enum BinaryTreeMode {
    DepthFirstSearch = 0,
    BreadthFirstSearch = 1,
    InOrder = 2,
}
