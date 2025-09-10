console.log("obectdemo file");

const person = {
  name: "Bob",
  age: 30,
  favouritecolour: "red",
};

console.log(person);
console.log("Name of person in object:" + person.name);

console.table(person);

person.favouritefood = "Pizza";

console.log(person.favouritefood);

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouritecolour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  cotent: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost.author.name);

console.log(blogPost.tags[1]);
