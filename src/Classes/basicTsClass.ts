export const basicTsClass = (): void => {
  class Avenger {
    static avgAge: number = 35;

    private name: string;
    private team: string;
    public realName?: string;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger(
    "Antman",
    "Team Captain America",
    "Scott Lang",
  );

  console.log(antman);
  console.log("Average age:", Avenger.avgAge);

  console.log("--- END BASIC TS CLASS FILE ---");
};
