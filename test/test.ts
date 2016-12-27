import { IOC } from "../src/ioc";
import { Autowired } from "../src/ioc.decorator";

var ioc: IOC = IOC.instance();

// test registering obj
ioc.register("testObj", function () { console.log("SUCCESS: registered object function called!"); return 15; });
var daFunc: any = ioc.get("testObj");
if (daFunc() !== 15)
    throw new Error("daFunc should be 15!!!");

if (ioc.isRegistered("test123"))
    throw new Error("test123 should not be registered!");

// test unregistered obj
try {
    var notDaFunc: any = ioc.get("test123");
    throw new Error("NOPE!");
} catch (e) {
    if (e.message.indexOf("NOPE!") === 0)
        throw new Error("getting unregistered instance should throw an exception!");
    console.log("SUCCESS: getting unregistered object threw an exception!");
}


// test decorator
class TestClass {

    @Autowired
    private testObj: any;

    constructor() {
        if (this.testObj === undefined)
            throw new Error("Autowired decorator didn't work!");
        console.log("SUCCESS: Autowired decorator is working as well!");
    }

}

new TestClass();
