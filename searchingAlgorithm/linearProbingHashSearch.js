
// hash table with open addressing to resolve collisions.
//using linear probing as the collision resolution strategy.


class HashTableLinearProbing {
    constructor() {
        this.table = new Array(100); //  adjust the size of the table
    }

    // Basic hash function
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.table.length;
    }

    // Insert a key-value pair into the hash table with linear probing
    insert(key, value) {
        const index = this.hash(key);
        let currentIndex = index;

        while (this.table[currentIndex]) {
            // Linear probing: Move to the next slot
            currentIndex = (currentIndex + 1) % this.table.length;
            if (currentIndex === index) {
                // Reached the starting index, meaning the table is full
                console.log("Hash table is full. Unable to insert.");
                return;
            }
        }

        // Found an empty slot; insert the key-value pair
        this.table[currentIndex] = { key, value };
    }

    // Retrieve a value by key
    get(key) {
        const index = this.hash(key);
        let currentIndex = index;

        while (this.table[currentIndex]) {
            if (this.table[currentIndex].key === key) {
                return this.table[currentIndex].value;
            }
            // Linear probing: Move to the next slot
            currentIndex = (currentIndex + 1) % this.table.length;
            if (currentIndex === index) {
                // Reached the starting index, meaning the key is not found
                return undefined;
            }
        }

        // Key not found
        return undefined;
    }
}

// Example usage:
const myLinearProbingHashTable = new HashTableLinearProbing();
myLinearProbingHashTable.insert("name", "Obiora");
myLinearProbingHashTable.insert("age", 30);
console.log(myLinearProbingHashTable.get("name"));


