import { IOC } from "./ioc";

export function Autowired(target: any, name: any): any {
    target[name] = IOC.get(name);
}