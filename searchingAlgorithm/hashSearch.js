class HashTable {
    constructor() {
        this.table = new Array(100); // You can adjust the size of the table
    }

    // Basic hash function
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.table.length;
    }

    // Insert a key-value pair into the hash table
    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
    }

    // Retrieve a value by key
    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (const pair of this.table[index]) {
                if (pair.key === key) {
                    return pair.value;
                }
            }
        }
        return undefined; // Key not found
    }
}

// Example usage:
const myHashTable = new HashTable();
myHashTable.insert("name", "Obiora");
myHashTable.insert("age", 30);
console.log(myHashTable.get("name")); 
