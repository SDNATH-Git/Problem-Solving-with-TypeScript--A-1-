//--- Problem 1 ----- //

function formatValue (value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string'){
        return value.toUpperCase();
    }
    else if (typeof value === 'number'){
        return value * 10;
    }
    else if (typeof value === 'boolean'){
        return !value;
    }
    else{
        throw new Error('unsuported type');
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));
// console.log(formatValue(false));

//--- Problem 2 ----- //

function getLength (value : string | any[]): number{
    if(typeof value === 'string'){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
    else{
        throw new Error('unsuported type');
 }
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));
// console.log(getLength([]));
// console.log(getLength(''));


//---- problem 3 -----//

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string{
        return `'Name: ${this.name}, Age: ${this.age}';`;

    }

}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

// 'Name: John Doe, Age: 30';
// 'Name: Alice, Age: 25';



//--- Problem 4 ----//

function filterByRating( items: { title: string; rating: number }[])
: 
string { const filtered = items.filter(item => item.rating >= 4);

  const formatted = `[\n  ${filtered
    .map(item => `{ title: '${item.title}', rating: ${item.rating} }`)
    .join(',\n  ')},\n];`;

  return formatted;
}

// Test data
// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));

//--- Problem 5 ----//

function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): string {
  const activeUsers = users.filter(user => user.isActive === true);

  const formatted = `[\n  ${activeUsers
    .map(
      u =>
        `{ id: ${u.id}, name: '${u.name}', email: '${u.email}', isActive: ${u.isActive} }`
    )
    .join(',\n  ')},\n];`;

  return formatted;
}

// Test data
// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

//--- Problem 6 ----//

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

// Test case
// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);

//--- Problem 7 ----//

function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): string {
  const combined: (number | string)[] = [];
  
  for (let i = 0; i < arr1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < combined.length; j++) {
      if (arr1[i] === combined[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      combined[combined.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < combined.length; j++) {
      if (arr2[i] === combined[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      combined[combined.length] = arr2[i];
    }
  }


  const formatted = `[${combined.join(', ')}];`;
  return formatted;
}


// Test data
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// console.log(getUniqueValues(array1, array2));

//---- problem 8 ----//

function calculateTotalPrice(
  products: { name: string; price: number; quantity: number; discount?: number }[]
): string {
  if (products.length === 0) return '0;';

  const total = products
    .map(product => {
      const discountFactor = product.discount ? (100 - product.discount) / 100 : 1;
      return product.price * product.quantity * discountFactor;
    })
    .reduce((sum, curr) => sum + curr, 0);

  return `${total};`;
}

// Test data
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));

