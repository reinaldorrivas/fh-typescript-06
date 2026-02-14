export const abstractClasses = (): void => {
  abstract class Mutant {
    constructor(
      public name: string,
      public realName: string,
    ) {}
  }

  class Xmen extends Mutant {
    public salvarMundo() {
      return "¡Salvamos a la tierra!";
    }
  }

  class Villain extends Mutant {
    public conquistarMundo() {
      return "¡Conquistamos a la tierra!";
    }
  }

  const wolverine: Xmen = new Xmen("Wolverine", "James Howlett");
  const magneto: Villain = new Villain("Magneto", "Max Eisenhardt");

  console.log("Wolverine:", wolverine.salvarMundo());
  console.log("Magneto:", magneto.conquistarMundo());

  const printName = (character: Mutant) => {
    console.log("Character's Name:", character.name);
  };

  printName(wolverine);
};
