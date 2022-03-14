function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({
    type: "bird",
    flyingSpeed: 50
});
moveAnimal({
    type: "horse",
    runningSpeed: 30
});
