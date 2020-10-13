// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

var findOrder = function(numCourses, prerequisites) {
    //Establish array to keep track of how many prerequisites each course needs
    let courseTracker = new Array(numCourses).fill(0)
    let stack = []
    let hash = {}
    let results = []
    let count = 0
    
    for (let edge of prerequisites){
        let [course, prereq] = edge
        courseTracker[course]++
        if (!hash[prereq]){
            hash[prereq] = [course]
        } else {
            hash[prereq].push(course)
        }
    }
    
    for (let i = 0; i < courseTracker.length; i++){
        if(courseTracker[i] === 0){
            stack.push(i)
        }
    }
    
    while(stack.length){
        let curr = stack.pop()
        results.push(curr)
        count++
        console.log(stack, results)
        if (hash[curr]){
            for (let v of hash[curr]){
                courseTracker[v]--
                if(courseTracker[v] === 0){
                    stack.push(v)
                }
            }
        }
    }
    if(count === numCourses){
        return results
    } else {
        return []
    }
};