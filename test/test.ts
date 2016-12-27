import { IOC } from "../src/ioc";

var ioc: IOC = new IOC();

ioc.register("testObj", function () { console.log("SUCCESS: registered object function called!"); return 15; });
var daFunc: any = ioc.get("testObj");
if (daFunc() !== 15)
    throw new Error("daFunc should be 15!!!");

if (ioc.isRegistered("test123"))
    throw new Error("test123 should not be registered!");

try {
    var notDaFunc: any = ioc.get("test123");
    throw new Error("NOPE!");
} catch (e) {
    if (e.message.indexOf("NOPE!") === 0)
        throw new Error("getting unregistered instance should throw an exception!");
    console.log("SUCCESS: getting unregistered object threw an exception!");
}