const income = [
  { id: 01, title: "wooden", amount: 200 },
  { id: 01, title: "playwood", amount: 300 },
  { id: 01, title: "paint", amount: 400 },
];

async function openDB() {
  // initialize/create database
  const request = await indexedDB.open("BudgetDB", 2);

//   console.log(request);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    console.log(db = (e) => resolve(console.log(e)));

    if (!db.objectStoreNames.contains("income")) {
      // Create store/schema
      db.createObjectStore("income", { keyPath: "id" });
    }
  };

  return await request;
}

console.log(openDB());
// request.onsuccess = () => resolve(request.result);
// request.onerror = () => reject(new Error(request.error?.message || "Failed to open IndexedDB"));

// console.log(createDB);

// createDB.onsuccess = (e) =>

// {
//     const store = e.target.result;

//     console.log(BudgetDB);

//     const incomeStore = store.transaction('income', { keyPath:"id"})
// }

// createDB.onerror(() => {

// })
