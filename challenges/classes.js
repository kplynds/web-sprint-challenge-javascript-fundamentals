// 1. Copy and paste your prototype in here and refactor into class syntax.
//PROTOTYPE:
// function CuboidMaker (att) {
//     this.length = att.length;
//     this.width = att.width;
//     this.height = att.height;
//   }

// CuboidMaker.prototype.volume = function() {
//     return this.length * this.height * this.width;
//   }

// CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }

//CLASS: 

class CuboidMakerClass {
    constructor(att) {
        this.name = att.name;
        this.location = att.location;
        this.phrase = att.phrase;
    }
    volume() {
        return this.length * this.height * this.width;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor (att) {
        super(att)
    }
    volume() {
        return this.length * this.length * this.length;
    }
    surfaceArea () {
        return 6(this.length * this.length);
    }
}
const cube = new CubeMaker ({
    length: 6,
    width: 6,
    height: 6,
})
console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130