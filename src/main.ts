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

const name = process.env['USER_NAME'];

const main = new Main(`Hello world${name ? `, ${name}` : ''}!`);
console.log(main.getValue());
