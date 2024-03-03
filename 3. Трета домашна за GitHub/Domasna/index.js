import colors from "colors";
import {EventEmitter} from "events";

const emitter = new EventEmitter();

emitter.on("red", () => {
    console.log("Red".red);
    setTimeout(() => {
        emitter.emit("yellow")
    }, 3000)
});

emitter.on("yellow", () => {
    console.log("Yellow".yellow);
    setTimeout(() => {
        emitter.emit("green")
    }, 3000)
});

emitter.on("green", () => {
    console.log("Green".green);
    setTimeout(() => {
        emitter.emit("red")
    }, 3000)
});

emitter.emit("red");
