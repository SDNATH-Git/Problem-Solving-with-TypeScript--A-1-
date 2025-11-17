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

