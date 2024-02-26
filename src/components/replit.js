


const fibonacci = (limit) => {
  // code here
  let sequence = [0, 1];

  while (
    sequence[sequence.length - 1] + sequence[sequence.length - 2] <=
    limit
  ) {
    let nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }

  return sequence;
};

console.log(fibonacci(10));
console.log(fibonacci(21));
console.log(fibonacci(2));
console.log(fibonacci(0));

















function getUsersData(users, data) {
  return users.map((user) => user[data]);
}

// Ejemplos de uso

const users = [
  {
    name: "Leanne Graham",
    age: 30,
    email: "Sincere@april.biz",
    country: "England",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    name: "Ervin Howell",
    age: 27,
    email: "Shanna@melissa.tv",
    country: "New Zealand",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
];

const names = getUsersData(users, "name");
console.log(names)

const ages = getUsersData(users, "age");
console.log(ages);

const countries = getUsersData(users, "country");
console.log(countries);
