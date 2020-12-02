const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/giftr"
);

const bookSeed = [
  {
    name: "Tay",
    giftList: [
      {
        title: "duck1",
        image: "https://www.thespruce.com/thmb/_8FeeXcOc-qPfv7FUUHx-E2fmCU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1146102607-b3491a355af94171aa8ac7b0aeec0616.jpg",
        link: "#"
      },
      {
        title: "duck2",
        image: "https://www.thespruce.com/thmb/_8FeeXcOc-qPfv7FUUHx-E2fmCU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1146102607-b3491a355af94171aa8ac7b0aeec0616.jpg",
        link: "#"
      },
      {
        title: "duck3",
        image: "https://www.thespruce.com/thmb/_8FeeXcOc-qPfv7FUUHx-E2fmCU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1146102607-b3491a355af94171aa8ac7b0aeec0616.jpg",
        link: "#"
      }
    ]
  },
  {
    name: "Matt",
    giftList: [
      {
        title: "goose1",
        image: "https://www.dartagnan.com/on/demandware.static/-/Sites-dartagnan-Library/default/dwff492747/images/content/goose-facts-and-cooking.jpg",
        link: "#"
      },
      {
        title: "goose2",
        image: "https://www.dartagnan.com/on/demandware.static/-/Sites-dartagnan-Library/default/dwff492747/images/content/goose-facts-and-cooking.jpg",
        link: "#"
      },
      {
        title: "goose3",
        image: "https://www.dartagnan.com/on/demandware.static/-/Sites-dartagnan-Library/default/dwff492747/images/content/goose-facts-and-cooking.jpg",
        link: "#"
      }
    ]
  },
  {
    name: "Erin",
    giftList: [
      {
        title: "bear1",
        image: "https://i.guim.co.uk/img/media/11d4c182d094199e26ddb36febe67123a9bbc93a/34_246_2966_4275/master/2966.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=7eb0ab5367140724ef58182973ba5633",
        link: "#"
      },
      {
        title: "bear2",
        image: "https://i.guim.co.uk/img/media/11d4c182d094199e26ddb36febe67123a9bbc93a/34_246_2966_4275/master/2966.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=7eb0ab5367140724ef58182973ba5633",
        link: "#"
      },
      {
        title: "bear3",
        image: "https://i.guim.co.uk/img/media/11d4c182d094199e26ddb36febe67123a9bbc93a/34_246_2966_4275/master/2966.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=7eb0ab5367140724ef58182973ba5633",
        link: "#"
      }
    ]
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
