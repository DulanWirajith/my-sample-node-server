const faker = require("faker");

const dataList = [
  {
    id: 250,
    title: faker.name.firstName(),
    imageUrl: "imageUrl",
    createdTime: faker.date.recent(),
    authorName: faker.name.firstName(),
    totalLikes: 10,
  },
  {
    id: 400,
    title: faker.name.firstName(),
    imageUrl: "imageUrl",
    createdTime: faker.date.recent(),
    authorName: faker.name.firstName(),
    totalLikes: 10,
  },
  {
    id: 300,
    title: faker.name.firstName(),
    imageUrl: "imageUrl",
    createdTime: faker.date.recent(),
    authorName: faker.name.firstName(),
    totalLikes: 10,
  },
  {
    id: 450,
    title: faker.name.firstName(),
    imageUrl: "imageUrl",
    createdTime: faker.date.recent(),
    authorName: faker.name.firstName(),
    totalLikes: 10,
  },
  {
    id: 600,
    title: faker.name.firstName(),
    imageUrl: "imageUrl",
    createdTime: faker.date.recent(),
    authorName: faker.name.firstName(),
    totalLikes: 10,
  },
];

const dataList2 = [
  {
    id: 200,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: "abs@gmail.com",
  },
  {
    id: 200,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: "abs@gmail.com",
  },
  {
    id: 200,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: "abs@gmail.com",
  },
];
exports.sendPostDummyData = (req, res, next) => {
  var promises = [];
  dataList.forEach((data) => {
    promises.push(data);
  });

  res.status(200).json({
    message: promises,
  });
};

exports.sendPersonDummyData = (req, res, next) => {
  var promises = [];
  dataList2.forEach((data) => {
    promises.push(data);
  });

  res.status(200).json({
    message: promises,
  });
};
