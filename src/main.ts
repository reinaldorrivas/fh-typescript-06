import { abstractClasses } from "./Classes/abstractClasses";
import { basicTsClass } from "./Classes/basicTsClass";
import { extendsTs } from "./Classes/extendsTs";
import { privateConstructor } from "./Classes/privateConstructor";
import { shortenedConstructorClass } from "./Classes/shortenedConstructorClass";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
    <h1>TypeScript Classes</h1>
  </div>
`;

basicTsClass();
shortenedConstructorClass();
extendsTs();
abstractClasses();
privateConstructor();
