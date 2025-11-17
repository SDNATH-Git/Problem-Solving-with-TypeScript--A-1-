

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







function filterByRating( items: { title: string; rating: number }[])
: 
string { const filtered = items.filter(item => item.rating >= 4);

  const formatted = `[\n  ${filtered
    .map(item => `{ title: '${item.title}', rating: ${item.rating} }`)
    .join(',\n  ')},\n];`;

  return formatted;
}








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





