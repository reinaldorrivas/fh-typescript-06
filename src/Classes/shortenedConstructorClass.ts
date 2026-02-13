export const shortenedConstructorClass = (): void => {
  class Avenger {
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string,
    ) {}
  }

  const antman: Avenger = new Avenger(
    "Antman",
    "Team Captain America",
    "Scott Lang",
  );

  console.log(antman);
  console.log("Average age:", Avenger.avgAge);

  console.log("--- END SHORTENED CONSTRUCTOR TS CLASS FILE ---");
};
