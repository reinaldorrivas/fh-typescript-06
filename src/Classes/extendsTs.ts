import { Avenger } from "./shortenedConstructorClass";

class FlyingAvenger extends Avenger {
  private flying: boolean = true;

  constructor(name: string, power: number, realName: string, private isNaturalFlying: boolean) {
    super(name, power, realName);

    this.isRich();
  }

  private isRich() {
    if (this.flying && !this.isNaturalFlying) {
      this.rich = true;
    }
  }
}

export const extendsTs = (): void => {
  const ironman = new FlyingAvenger("Ironman", 8000, "Tony Stark", false);

  console.log(ironman.avengerFullInfo());
  console.log(`Is rich? ${ironman.name}:`, ironman.isRichOrNot);

  Avenger.cantidadInstancias();

  console.log("--- END EXTENDS TS FILE ---");
};
