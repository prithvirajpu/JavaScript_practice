# ⚙️ JavaScript Essentials

A concise overview of common JavaScript concepts with definitions, properties, and examples.

---

## 🪙 Variables
**Definition**: Containers for storing data values.  
**Types**: `var`, `let`, `const`  

**Properties**:  
- `var`: Function-scoped, redeclarable  
- `let`: Block-scoped, not redeclarable  
- `const`: Block-scoped, cannot be reassigned  

---

## 🔢 Data Types
**Definition**: Dynamically typed values used for all data in JS.  

**Types**:  
- Primitive: Number, String, Boolean, Null, Undefined, Symbol, BigInt  
- Non-Primitive: Object, Array, Function  

---

## 🗃️ Array Methods
**Definition**: Built-in methods for manipulating arrays.  

**Key Methods**:  
- `push()` – Add item to end  
- `pop()` – Remove last item  
- `shift()` – Remove first item  
- `unshift()` – Add item to start  
- `concat()` – Combine arrays  
- `slice()` – Copy portion  
- `splice()` – Insert/remove at position  
- `join()` – Array to string  
- `map()` – Transform items  
- `filter()` – Filter items  
- `reduce()` – Accumulate value  
- `forEach()` – Per-item function  
- `find()` – First match  
- `sort()` – Sort elements  
- `includes()` – Value exists  
- `reverse()` – Reverse order  

**Example**:  

---

## 🎯 Functions
**Definition**: Blocks of reusable code.  

**Types**:  
- Function Declaration: `function add(a, b) { return a + b }`  
- Function Expression: `const add = function(a, b) { return a + b }`  
- Arrow Function: `const add = (a, b) => a + b`  

**Properties**:  
- First-class citizens: Can be assigned and passed as arguments  
- Support default/rest parameters  

---

## 📦 Objects
**Definition**: Collections of key-value pairs.  

**Example**:  

**Properties**:  
- Keys: strings or symbols  
- Values: any type  
- Access via dot (`person.name`) or bracket (`person["age"]`) notation  

---

## 🔁 Loops
**Definition**: Execute code repeatedly.  

**Common loops**:  
- `for` – classic counter loop  
- `for...of` – iterate array values  
- `for...in` – iterate object keys  
- `while` / `do...while` – condition-based loops  

---

## ⚡ DOM Manipulation
**Definition**: Interact with and modify HTML elements.  

**Examples**:  
- `document.getElementById("id")`  
- `document.querySelector(".class")`  
- `element.innerHTML = "Text"`  
- `element.style.color = "red"`  

---

## 🌐 Events
**Definition**: Respond to browser actions.  

**Example**:  

---

## 🧩 ES6 Features
**Definition**: Modern JavaScript improvements.  

**Highlights**:  
- Template Literals → `` `Hello ${name}` ``  
- Destructuring → `const {a, b} = obj`  
- Spread/Rest → `const arr2 = [...arr1]`  
- Classes → `class Person { constructor(name) { this.name = name; } }`  
- Modules → `export` / `import`  

---

## 📊 Comparison Table

| Concept           | Example                          | Notes                   |
|-------------------|---------------------------------|-------------------------|
| 🪙 Variables      | `let x = 10`                    | Use `let`/`const`       |
| 🔢 Data Types     | `"abc"`, `123`, `[]`, `{}`      | Primitives & objects    |
| 🗃️ Array Methods | `arr.map(fn)`                   | Versatile built-ins     |
| 🎯 Functions      | `(a, b) => a + b`               | Arrow = lexical `this`  |
| 📦 Objects        | `{name: "Alex"}`                | Key-value store         |
| 🔁 Loops          | `for (let i = 0; i < 5; i++)`  | Several forms           |
| ⚡ DOM Manipulation| `document.querySelector()`      | Select & modify elements|
| 🌐 Events         | `.addEventListener("click", fn)`| Attach handlers         |
| 🧩 ES6 Features   | `const {...x} = obj`             | Modern syntax           |

---

## 📝 Memory Trick

- 🪙 **Variables** → Storage boxes  
- 🔢 **Data Types** → Coding ingredients  
- 🗃️ **Array Methods** → Array toolbox  
- 🎯 **Functions** → Recipe steps  
- 📦 **Objects** → Dictionary storage  
- 🔁 **Loops** → Repeaters  
- ⚡ **DOM** → Control HTML page  
- 🌐 **Events** → Browser reacts  
- 🧩 **ES6 Features** → Modern, clean syntax  
