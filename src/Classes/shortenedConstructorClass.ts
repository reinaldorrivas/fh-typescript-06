export class Avenger {
  private static instancias: number = 0;
  public static cantidadInstancias() {
    console.log("Cantidad instancias:", Avenger.instancias);
  }

  protected _rich: boolean = false;

  constructor(
    public name: string,
    private power: number,
    private realName: string,
  ) {
    Avenger.instancias++;
  }

  get rich() {
    return this._rich;
  }

  set rich(value) {
    this._rich = value;
  }

  public avengerFullInfo() {
    return `Name: ${this.name} - Real Name: ${this.realName} - Power: ${this.power}`;
  }
}

export const shortenedConstructorClass = () => {
  const hulk = new Avenger("Hulk", 10000, "Bruce Banner");

  console.log(hulk.avengerFullInfo());
  console.log(`Is rich? ${hulk.name}:`, hulk.rich);

  Avenger.cantidadInstancias();

  console.log("--- END SHORTENED CONSTRUCTOR TS CLASS FILE ---");
};
