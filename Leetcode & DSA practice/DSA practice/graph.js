class Graph{
    constructor(){
        // this is an example for an adjacency list (not matrix)
        // create a spot for the list to exsist
        this.adjacencyList = {}
    }

    addVertex(vertex){
        // if there is no vertex with this value in the list
        if(!this.adjacencyList[vertex]){
            // this.adjacencyList[vertex] = [];
            // create a new set for that node at
            // ( set makes it more efficient )
            this.adjacencyList[vertex] = new Set();
        }
        // now there is a list of what nodes the vertex connects to, at that vertex in our adjacency list
    }

    addEdge(vertex1, vertex2){
        // if vertex1 doesnt exsist, add vertex
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        // if vertex2 doesnt exsist, add vertex
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }
        // add verticies to list once we make sure they exsist
        // add fn is part of the Set data structure
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    
    hasEdge(vertex1, vertex2){
        // returns true or false
        return (
            // checks for a connection in each direction
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
        }
    }

    removeEdge(vertex1, vertex2){
        // delete is a fn of the set data structure
        // removes connection between two verticies
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        // ensure vertex exsists in graph, so if not return out of fn
        if(!this.adjacencyList[vertex]){
            return;
        }
        // if does exsists, remove edges from vertex & all adjacent verticies
        // for each vertex
        for(let adjacentVertex of this.adjacencyList[vertex]){
            // remove edge to vertex we are trying to delete
            this.removeEdge(vertex, adjacentVertex);
        }
        // delete vertex itself
        delete this.adjacencyList[vertex];
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('D', 'C');
graph.addEdge('D', 'A');
graph.addEdge('A', 'D');
graph.addEdge('A', 'D');
console.log(graph);
graph.display();

console.log(graph.hasEdge('A','C'));
// graph.removeVertex("B");
// graph.display();

// adjacency list as a hashmap
const graphy = {
    a: ['a', 'b'],
    b: ['c'],
    c: ['d'],
    d: ['b', 'c']
};