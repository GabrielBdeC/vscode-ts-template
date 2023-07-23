import 'dotenv/config';

export class Main {
  private value: string;
  private name: string | undefined;

  constructor(value: string, name: string | undefined) {
    this.value = value;
    this.name = name;
  }

  getValue(): string {
    return `${this.value}${this.name ? `, ${this.name}` : ''}!`;
  }
}

const main = new Main('Hello world', process.env['USER_NAME']);
console.log(main.getValue());
