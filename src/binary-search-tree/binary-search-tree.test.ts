import {assertEquals} from "https://deno.land/std@0.220.1/assert/mod.ts";
import {BinaryTree, BinaryTreeMode, BinaryTreeNode} from "./bianry-search-tree.ts";

Deno.test(function testNumberTree(): void {
    const tree: BinaryTree<number> = new BinaryTree()
    const addResult: BinaryTreeNode<number> = tree.add(5)
    assertEquals(addResult.data, 5)
    assertEquals(addResult.left, undefined)
    assertEquals(addResult.right, undefined)

    let findResult: BinaryTreeNode<number> | undefined = tree.find(5)
    assertEquals(findResult?.data, 5)
    assertEquals(findResult?.left, undefined)
    assertEquals(findResult?.right, undefined)

    tree.add(1)
    tree.add(2)
    tree.add(3)
    tree.add(4)

    findResult = tree.find(1)
    assertEquals(findResult?.data, 1)
    assertEquals(findResult?.left, undefined)
    assertEquals(findResult?.right?.data, 2)

    findResult = tree.find(2)
    assertEquals(findResult?.data, 2)
    assertEquals(findResult?.left, undefined)
    assertEquals(findResult?.right?.data, 3)

    findResult = tree.find(3)
    assertEquals(findResult?.data, 3)
    assertEquals(findResult?.left, undefined)
    assertEquals(findResult?.right?.data, 4)

    findResult = tree.find(4)
    assertEquals(findResult?.data, 4)
    assertEquals(findResult?.left, undefined)
    assertEquals(findResult?.right, undefined)

    const bfArray: number[] = tree.toArray(BinaryTreeMode.BreadthFirstSearch)
    console.log(bfArray)
});

Deno.test(function testStringTree(): void {
    const tree: BinaryTree<string> = new BinaryTree()
    const addResult: BinaryTreeNode<string> = tree.add("sean")
    assertEquals(addResult.data, "sean")
    assertEquals(addResult.left, undefined)
    assertEquals(addResult.right, undefined)

    let findResult: BinaryTreeNode<string> | undefined = tree.find("sean")
    assertEquals(findResult?.data, "sean")
    assertEquals(findResult?.left, undefined)
    assertEquals(findResult?.right, undefined)

    tree.add("wean")
    tree.add("vean")
    tree.add("uean")
    tree.add("tean")

    findResult = tree.find("wean")
    assertEquals(findResult?.data, "wean")
    assertEquals(findResult?.left?.data, "vean")
    assertEquals(findResult?.right, undefined)

    findResult = tree.find("vean")
    assertEquals(findResult?.data, "vean")
    assertEquals(findResult?.left?.data, "uean")
    assertEquals(findResult?.right, undefined)

    findResult = tree.find("uean")
    assertEquals(findResult?.data, "uean")
    assertEquals(findResult?.left?.data, "tean")
    assertEquals(findResult?.right, undefined)

    findResult = tree.find("tean")
    assertEquals(findResult?.data, "tean")
    assertEquals(findResult?.left, undefined)
    assertEquals(findResult?.right, undefined)
});
