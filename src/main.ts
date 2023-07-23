import 'dotenv/config';

export class Main {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}

const main = new Main(`Hello world, ${process.env['USER_NAME']}!`);
console.log(main.getValue());
