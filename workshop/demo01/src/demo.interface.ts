interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

const process = (db: Database) => {
    db.set("123", "John");
    db.get("123");
}
