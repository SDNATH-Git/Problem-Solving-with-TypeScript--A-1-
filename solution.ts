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

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
console.log(formatValue(false));