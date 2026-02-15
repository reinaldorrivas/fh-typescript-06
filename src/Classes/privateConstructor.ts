export const privateConstructor = (): void => {
  class SingletonTs {
    private static instance: SingletonTs;

    public static setInstance(value: string): SingletonTs {
      if (!SingletonTs.instance) {
        SingletonTs.instance = new SingletonTs(value);
      }

      return SingletonTs.instance;
    }

    private constructor(private _name: string) {}

    get name(): string {
      return this._name;
    }

    set name(value: string) {
      this._name = value;
    }
  }

  const wolverine = SingletonTs.setInstance("Wolverine");
  const magneto = SingletonTs.setInstance("Magneto");
  const ironman = SingletonTs.setInstance("Ironman");

  /*
   * Esto no es permitido porque el constructor es privado:
   * const lola = new SingletonTs("Lola");
   */

  console.table([wolverine, magneto, ironman]);

  // * Esto modifica todas las variables que usen el Singleton porque todas estas apuntan al mismo espacio de memoria.
  wolverine.name = "Lalo";

  console.table([wolverine, magneto, ironman]);

  console.log("--- END PRIVATE CONSTRUCTOR FILE ---");
};
