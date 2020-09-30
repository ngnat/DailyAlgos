// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Test case format:

// For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

// Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

function Node(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
     }

var cloneGraph = function(node) {

    let hash = {}
    function helper(node){
        if (!node) return null
        if(hash[node.val]) return hash[node.val]
        hash[node.val] = new Node(node.val)
        hash[node.val].neighbors = node.neighbors.map(helper)
        return hash[node.val]
    }
    return helper(node)
}
var cloneGraph = function(node) {
let queue = [node]
let visited = new Map()
visited.set(node, new Node(node.val, []))
while (queue.length){
    const curr = queue.shift()
    curr.neighbors.forEach(v => {
        if (!visited.has(v)){
            visited.set(v, new Node(v.val, []))
            queue.push(v)
        }
        console.log(visited)
  visited.get(curr).neighbors.push(visited.get(v))
    })
}
return visited.get(node)   
};