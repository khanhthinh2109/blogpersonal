export type BlogCategory = 'java' | 'javascript';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'java-oop-basics',
    title: 'Lập trình hướng đối tượng trong Java',
    excerpt: 'Tìm hiểu 4 tính chất cơ bản của OOP: Đóng gói, Kế thừa, Đa hình và Trừu tượng trong Java.',
    category: 'java',
    date: '2024-12-20',
    readTime: '8 phút',
    tags: ['OOP', 'Java Basics', 'Tutorial'],
    content: `
# Lập trình hướng đối tượng trong Java

Lập trình hướng đối tượng (OOP) là một mô hình lập trình dựa trên khái niệm "đối tượng". Java là một trong những ngôn ngữ OOP phổ biến nhất.

## 4 Tính chất cơ bản của OOP

### 1. Đóng gói (Encapsulation)
Đóng gói là việc che giấu thông tin bên trong đối tượng và chỉ cho phép truy cập thông qua các phương thức public.

\`\`\`java
public class Student {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}
\`\`\`

### 2. Kế thừa (Inheritance)
Cho phép một lớp con kế thừa các thuộc tính và phương thức từ lớp cha.

\`\`\`java
public class Animal {
    public void eat() {
        System.out.println("Eating...");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println("Woof!");
    }
}
\`\`\`

### 3. Đa hình (Polymorphism)
Cho phép một phương thức có nhiều cách thực hiện khác nhau.

### 4. Trừu tượng (Abstraction)
Ẩn đi các chi tiết phức tạp và chỉ hiển thị những gì cần thiết.
    `
  },
  {
    id: 'java-collections',
    title: 'Java Collections Framework',
    excerpt: 'Hướng dẫn sử dụng ArrayList, HashMap, HashSet và các collection phổ biến trong Java.',
    category: 'java',
    date: '2024-12-18',
    readTime: '10 phút',
    tags: ['Collections', 'Data Structures', 'Java'],
    content: `
# Java Collections Framework

Collections Framework cung cấp các cấu trúc dữ liệu và thuật toán để lưu trữ và xử lý nhóm đối tượng.

## ArrayList

\`\`\`java
import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.add("JavaScript");

// Duyệt ArrayList
for (String item : list) {
    System.out.println(item);
}
\`\`\`

## HashMap

\`\`\`java
import java.util.HashMap;

HashMap<String, Integer> map = new HashMap<>();
map.put("Java", 1995);
map.put("Python", 1991);
map.put("JavaScript", 1995);

// Lấy giá trị
int year = map.get("Java"); // 1995
\`\`\`

## HashSet

\`\`\`java
import java.util.HashSet;

HashSet<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Apple"); // Không thêm được vì đã tồn tại

System.out.println(set.size()); // 2
\`\`\`
    `
  },
  {
    id: 'java-exception-handling',
    title: 'Xử lý ngoại lệ trong Java',
    excerpt: 'Cách sử dụng try-catch-finally và tạo custom exception trong Java.',
    category: 'java',
    date: '2024-12-15',
    readTime: '7 phút',
    tags: ['Exception', 'Error Handling', 'Java'],
    content: `
# Xử lý ngoại lệ trong Java

Exception handling giúp xử lý các lỗi runtime một cách graceful.

## Try-Catch-Finally

\`\`\`java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Không thể chia cho 0!");
} finally {
    System.out.println("Luôn được thực thi");
}
\`\`\`

## Custom Exception

\`\`\`java
public class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public void checkAge(int age) throws InvalidAgeException {
    if (age < 0 || age > 150) {
        throw new InvalidAgeException("Tuổi không hợp lệ: " + age);
    }
}
\`\`\`

## Multiple Catch Blocks

\`\`\`java
try {
    // code có thể gây lỗi
} catch (FileNotFoundException e) {
    System.out.println("File không tồn tại");
} catch (IOException e) {
    System.out.println("Lỗi I/O");
} catch (Exception e) {
    System.out.println("Lỗi chung");
}
\`\`\`
    `
  },
  {
    id: 'java-streams-api',
    title: 'Java Stream API',
    excerpt: 'Làm việc với Stream API để xử lý dữ liệu một cách functional trong Java 8+.',
    category: 'java',
    date: '2024-12-12',
    readTime: '12 phút',
    tags: ['Stream', 'Java 8', 'Functional'],
    content: `
# Java Stream API

Stream API trong Java 8 cung cấp cách xử lý dữ liệu theo phong cách functional programming.

## Tạo Stream

\`\`\`java
import java.util.stream.*;
import java.util.*;

List<String> names = Arrays.asList("Anna", "Bob", "Charlie");
Stream<String> stream = names.stream();
\`\`\`

## Filter và Map

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

List<Integer> evenSquares = numbers.stream()
    .filter(n -> n % 2 == 0)  // Lọc số chẵn
    .map(n -> n * n)           // Bình phương
    .collect(Collectors.toList());
    
// Kết quả: [4, 16, 36, 64, 100]
\`\`\`

## Reduce

\`\`\`java
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
    
// Hoặc sử dụng method reference
int sum = numbers.stream()
    .reduce(0, Integer::sum);
\`\`\`
    `
  },
  {
    id: 'js-es6-features',
    title: 'ES6+ Features cần biết',
    excerpt: 'Tổng hợp các tính năng JavaScript hiện đại: arrow functions, destructuring, spread operator...',
    category: 'javascript',
    date: '2024-12-22',
    readTime: '10 phút',
    tags: ['ES6', 'Modern JS', 'Tutorial'],
    content: `
# ES6+ Features cần biết

ES6 (ECMAScript 2015) đã mang đến nhiều cải tiến quan trọng cho JavaScript.

## Arrow Functions

\`\`\`javascript
// ES5
function add(a, b) {
    return a + b;
}

// ES6
const add = (a, b) => a + b;

// Với một tham số
const square = x => x * x;
\`\`\`

## Destructuring

\`\`\`javascript
// Object destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;
\`\`\`

## Spread Operator

\`\`\`javascript
// Copy array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
\`\`\`

## Template Literals

\`\`\`javascript
const name = 'World';
const greeting = \`Hello, \${name}!\`;
\`\`\`
    `
  },
  {
    id: 'js-async-await',
    title: 'Async/Await trong JavaScript',
    excerpt: 'Hiểu và sử dụng async/await để xử lý bất đồng bộ một cách elegent.',
    category: 'javascript',
    date: '2024-12-19',
    readTime: '9 phút',
    tags: ['Async', 'Promise', 'JavaScript'],
    content: `
# Async/Await trong JavaScript

Async/await là cú pháp giúp viết code bất đồng bộ dễ đọc hơn.

## Promises vs Async/Await

\`\`\`javascript
// Sử dụng Promise
function fetchData() {
    return fetch('/api/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

// Sử dụng Async/Await
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

## Parallel Execution

\`\`\`javascript
async function fetchMultiple() {
    const [users, posts] = await Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json())
    ]);
    
    return { users, posts };
}
\`\`\`

## Error Handling

\`\`\`javascript
async function safeRequest(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        return await response.json();
    } catch (error) {
        console.error('Request failed:', error.message);
        return null;
    }
}
\`\`\`
    `
  },
  {
    id: 'js-dom-manipulation',
    title: 'DOM Manipulation cơ bản',
    excerpt: 'Cách thao tác với DOM: chọn phần tử, thay đổi nội dung, xử lý sự kiện.',
    category: 'javascript',
    date: '2024-12-16',
    readTime: '8 phút',
    tags: ['DOM', 'Web API', 'JavaScript'],
    content: `
# DOM Manipulation cơ bản

DOM (Document Object Model) cho phép JavaScript tương tác với HTML.

## Chọn phần tử

\`\`\`javascript
// Theo ID
const header = document.getElementById('header');

// Theo class
const items = document.getElementsByClassName('item');

// Theo selector (khuyên dùng)
const button = document.querySelector('.btn-primary');
const allButtons = document.querySelectorAll('button');
\`\`\`

## Thay đổi nội dung

\`\`\`javascript
// Thay đổi text
element.textContent = 'New text';

// Thay đổi HTML
element.innerHTML = '<strong>Bold text</strong>';

// Thay đổi attribute
element.setAttribute('href', 'https://example.com');
element.classList.add('active');
\`\`\`

## Xử lý sự kiện

\`\`\`javascript
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    event.preventDefault();
});

// Với arrow function
button.addEventListener('click', (e) => {
    console.log('Clicked!', e.target);
});
\`\`\`

## Tạo và thêm phần tử

\`\`\`javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
newDiv.classList.add('new-element');

document.body.appendChild(newDiv);
\`\`\`
    `
  },
  {
    id: 'js-array-methods',
    title: 'JavaScript Array Methods',
    excerpt: 'Tổng hợp các phương thức mảng: map, filter, reduce, find, some, every...',
    category: 'javascript',
    date: '2024-12-13',
    readTime: '11 phút',
    tags: ['Array', 'Methods', 'JavaScript'],
    content: `
# JavaScript Array Methods

Các phương thức mảng giúp xử lý dữ liệu hiệu quả và code sạch hơn.

## map()
Tạo mảng mới bằng cách transform mỗi phần tử.

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]
\`\`\`

## filter()
Lọc các phần tử thỏa điều kiện.

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]
\`\`\`

## reduce()
Gộp mảng thành một giá trị.

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// 15
\`\`\`

## find() và findIndex()

\`\`\`javascript
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

const user = users.find(u => u.id === 2);
// { id: 2, name: 'Jane' }

const index = users.findIndex(u => u.name === 'Bob');
// 2
\`\`\`

## some() và every()

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(n => n % 2 === 0);
// true

const allPositive = numbers.every(n => n > 0);
// true
\`\`\`
    `
  },
  {
    id: 'js-local-storage',
    title: 'Web Storage API',
    excerpt: 'Sử dụng localStorage và sessionStorage để lưu trữ dữ liệu phía client.',
    category: 'javascript',
    date: '2024-12-10',
    readTime: '6 phút',
    tags: ['Storage', 'Web API', 'JavaScript'],
    content: `
# Web Storage API

Web Storage API cho phép lưu trữ dữ liệu trong trình duyệt.

## localStorage

Dữ liệu được lưu vĩnh viễn (cho đến khi xóa thủ công).

\`\`\`javascript
// Lưu dữ liệu
localStorage.setItem('username', 'john_doe');

// Lấy dữ liệu
const username = localStorage.getItem('username');

// Xóa một item
localStorage.removeItem('username');

// Xóa tất cả
localStorage.clear();
\`\`\`

## Lưu trữ Object

localStorage chỉ lưu string, cần JSON.stringify/parse cho object.

\`\`\`javascript
const user = {
    name: 'John',
    email: 'john@example.com',
    preferences: {
        theme: 'dark',
        language: 'vi'
    }
};

// Lưu
localStorage.setItem('user', JSON.stringify(user));

// Lấy
const savedUser = JSON.parse(localStorage.getItem('user'));
\`\`\`

## sessionStorage

Tương tự localStorage nhưng dữ liệu bị xóa khi đóng tab/browser.

\`\`\`javascript
// Lưu session data
sessionStorage.setItem('sessionId', 'abc123');

// Check tồn tại
if (sessionStorage.getItem('sessionId')) {
    console.log('Session active');
}
\`\`\`

## Best Practices

\`\`\`javascript
// Helper functions
const storage = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: (key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    remove: (key) => {
        localStorage.removeItem(key);
    }
};
\`\`\`
    `
  }
];

export const getPostsByCategory = (category: BlogCategory) => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostById = (id: string) => {
  return blogPosts.find(post => post.id === id);
};
