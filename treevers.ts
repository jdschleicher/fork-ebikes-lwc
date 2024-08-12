import * as fs from 'fs';
import * as path from 'path';


// Define a child class or object type (optional)
class SFFieldDetail {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

class SFObjectDetail {

    fields: SFFieldDetail[];

}

// Define the parent wrapper class
class TreeVerseCipeWrapper {

    



    private stringField: string;
    private numberField: number;
    private objectField: ChildClass;
    private mapField: Map<string, number>;

    constructor() {
        this.stringField = "Default String";
        this.numberField = 42;
        this.objectField = new ChildClass("Child Name");
        this.mapField = new Map<string, number>([
            ["key1", 1],
            ["key2", 2],
        ]);
    }

    // Example of a method that interacts with fields
    getObjectGreeting(): string {
        return this.objectField.greet();
    }

    // Example of a method to interact with the map
    addToMap(key: string, value: number): void {
        this.mapField.set(key, value);
    }

    // Example of a method to get a value from the map
    getValueFromMap(key: string): number | undefined {
        return this.mapField.get(key);
    }
}

// Usage
const wrapper = new ParentWrapper();
console.log(wrapper.getObjectGreeting()); // Output: Hello, my name is Child Name
wrapper.addToMap("key3", 3);
console.log(wrapper.getValueFromMap("key3")); // Output: 3



function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, arrayOfFiles);
        } else {
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
}

// Usage
const directoryPath = 'force-app/main/default/objects';
const allFiles = getAllFiles(directoryPath);
console.log(allFiles);


