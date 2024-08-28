// GENERIC CLASSES

class DataStorage<T extends string | number | object> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem(10); // Error porque le hemos dicho que es de tipo string
textStorage.addItem("Max"); // Correcto

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10); // Correcto
numberStorage.addItem("Max"); // Error porque le hemos dicho que es de tipo number

const objStorage = new DataStorage<object>();
const maxObj = { name: "Max" }; // Ahora el objeto es el mismo
objStorage.addItem(maxObj);
objStorage.addItem({ name: "Manu" });
objStorage.removeItem({ name: "Max" }); // No lo elimina porque no es el mismo objeto, habría que hacerlo el mismo objeto
objStorage.removeItem(maxObj); // Correcto, lo borra porque son el mismo objeto
