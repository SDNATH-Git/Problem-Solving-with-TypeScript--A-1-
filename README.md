# 🎯 TypeScript Interview Questions - Blog

TypeScript হলো JavaScript-এর উপরে তৈরি একটি strongly typed language যা কোডকে আরও robust এবং maintainable করে। নিচে ৫টি গুরুত্বপূর্ণ TypeScript concept নিয়ে আলোচনা করা হলো।  

---

## ১️⃣ 1. What are some differences between interfaces and types in TypeScript?

TypeScript-এ **interface** এবং **type alias** দুইই object structure define করতে পারে, কিন্তু তাদের মধ্যে কিছু subtle পার্থক্য আছে।  

### প্রধান পার্থক্যসমূহ:

| Feature | Interface | Type Alias |
|---------|-----------|------------|
| Declaration Merging | সমর্থন করে (একাধিকবার declare করা যায় এবং merge হয়) | সমর্থন করে না |
| Extending | `extends` ব্যবহার করে অন্য interface extend করা যায় | Union বা Intersection (`&`) ব্যবহার করে extend করা যায় |
| Type Flexibility | শুধুমাত্র object type define করা যায় | Primitive, union, tuple, function type সব define করা যায় |

### উদাহরণ:

```ts
// Interface
interface Person {
  name: string;
  age: number;
}

// Type Alias
type Employee = {
  name: string;
  salary: number;
};
```
---
## ২️⃣ 2. What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript-এ `keyof` keyword ব্যবহার করা হয় একটি object type-এর **all property names** type হিসেবে নেয়ার জন্য।  
এটি বিশেষভাবে **generic programming** বা object manipulation-এ কাজে লাগে।

### উদাহরণ:

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"

// ব্যবহার:
const key: PersonKeys = "name"; // valid
// const invalidKey: PersonKeys = "salary"; // Error, কারণ salary Person-এর property নয়
```
---
ব্যাখ্যা:

keyof Person type তৈরি করে "name" | "age"।

এর মানে হলো, শুধু Person-এর declared properties assign করা যাবে।

এটি type-safe কোড লিখতে সাহায্য করে, যেমন dynamic key access বা generic function-এ।

---

