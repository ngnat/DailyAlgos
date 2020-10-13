// Implement the RandomizedSet class:

// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// Follow up: Could you implement the functions of the class with each function works in average O(1) time?

 

// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

var RandomizedSet = function(size) {
    this.hashMap = new Map()
    this.keys = []
 };
 
 /**
  * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
  * @param {number} val
  * @return {boolean}
  */
 RandomizedSet.prototype.insert = function(val) {
     if(this.hashMap.has(val)){
         return false
     }
     this.hashMap.set(val, this.keys.length)
     this.keys.push(val)
     return true
 };
 
 /**
  * Removes a value from the set. Returns true if the set contained the specified element. 
  * @param {number} val
  * @return {boolean}
  */
 RandomizedSet.prototype.remove = function(val) {
     if(!this.hashMap.has(val)){
         return false
     }
     let idx = this.hashMap.get(val)
     let lastIdx = this.keys.length - 1
     let lastNum = this.keys[lastIdx]
     [this.keys[val], this.keys[lastIdx]] = [this.keys[lastIdx], this.keys[val]]
     this.keys.pop()
     this.hashMap.set(lastNum, idx)
     this.hashMap.delete(val)
     return true
 };
 
 /**
  * Get a random element from the set.
  * @return {number}
  */
 RandomizedSet.prototype.getRandom = function() {
     let random = Math.floor(Math.random()*this.keys.length)
     return this.keys[random]
 };
 