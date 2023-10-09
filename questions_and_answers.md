<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B.

<i>For Explain about correct Ans : In the given code, there is a typographical error where you intended to declare a variable named "greeting," but you actually wrote "greetign." Since "greetign" is not defined anywhere in the code, it will result in a ReferenceError when you try to access it. </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C. 

<i>For Explain about correct Ans : In the provided code, the sum function takes two parameters, a and b, and attempts to add them together using the + operator. When you call sum(1, "2"), JavaScript will perform type coercion and convert the number 1 to a string, then concatenate it with the string "2". As a result, you get the string "12" as the output. So, the function returns "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A.
<i> For Explain about correct Ans : In the given code, the info.favoriteFood initially references the first element of the food array, which is "🍕". Then, it is reassigned to "🍝". However, this reassignment only affects the info.favoriteFood property and not the original food array. Therefore, when you console.log(food), it will output the original food array, which remains unchanged: ['🍕', '🍫', '🥑', '🍔'].
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B. 

<i>For Explain about correct Ans : In the provided function sayHi(name), it expects an argument name to be passed when it's called. However, when you call sayHi() without providing any argument, the name parameter inside the function is undefined. Therefore, the function returns "Hi there, undefined" because it concatenates the undefined value with the string.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C.

<i>For Explain about correct Ans : In the given code, the forEach method iterates over the elements of the nums array. Inside the callback function, it checks if the current num is truthy (all numbers except 0 are truthy in JavaScript) and increments the count variable by 1 for each truthy value encountered. Since there are three truthy values in the array (1, 2, and 3), the final value of count is 3. Therefore, console.log(count) will output 3.</i>

</p>
</details>
