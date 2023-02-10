export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private created_at: string
  ) {}
  // pegar o id do objeto
  public getId(): string {
    return this.id;
  }
  // metodo seguro para alterar id do objeto
  public setId(value: string): void {
    this.id = value;
  }
  public getName(): string {
    return this.name;
  }
  public setName(value: string): void {
    this.name = value;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(value: string): void {
    this.email = value;
  }
  public getPassword(): string {
    return this.password;
  }
  public setPassword(value: string): void {
    this.password = value;
  }
  public getCreatedAt(): string {
    return this.created_at;
  }
  public setCreatedAt(value: string): void {
    this.created_at = value;
  }
}

const user = new User(
  "u001",
  "Astrodev",
  "astrodev@email.com",
  "senha12345$",
  "2023-01-30 10:02:00"
);

console.table(user);
console.log("id do user: ", user.getId());
user.setId("u002");
console.log("id do user: ", user.getId());
