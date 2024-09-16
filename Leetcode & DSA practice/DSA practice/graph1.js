class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    // addVertex
    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    // addEdge
    addEdge(vertex1, vertex2){
        // make sure vertecies exsists
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacenylist[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjecencyList[vertex1].add(vertex2);
        this.adjecencyList[vertex2].add(vertex1);
    }
    // hasEdge
    // display
    // removeEdge
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    // removeVertex
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return;
        }
        for(let adjacentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}