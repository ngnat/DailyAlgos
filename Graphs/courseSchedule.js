// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.

var canFinish = function(numCourses, prerequisites) {

    let graph = {}
    let courseTrack = new Array(numCourses).fill(0)
    let stack = []
    let count = 0
    
    for (let edge of prerequisites){
        let [course, pre] = edge
        courseTrack[course]++
        if (!graph[pre]){
            graph[pre] = [course]
        } else {
            graph[pre].push(course)
        }
    }

    for (let i = 0; i < courseTrack.length; i++){
        if(courseTrack[i] === 0){
            stack.push(i)
        }
    }
    
    while (stack.length){
        let curr = stack.pop()
        count++
        if (graph[curr]){
            for (let v of graph[curr]){
                courseTrack[v]--
                if (courseTrack[v] === 0) stack.push(v)
            }
        }
    }
    
    return count === numCourses
};