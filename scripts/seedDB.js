const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/giftr"
);

const userSeed = [
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

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  const reviews = [
    {
      name: 'Gary Almes',
      image:
        'https://avatars1.githubusercontent.com/u/444729?s=460&u=330513f5f275c8bfdd05cc3872748a33c032e830&v=4',
      text:
        'It was perfect timing for me, so I snapped up the deal. Giftr has a lot of great features including their content and ability to save searches.',
    },
    {
  
      name: 'Taylor Hackbart',
      image:
        'https://avatars3.githubusercontent.com/u/70908409?s=460&u=fdf643f665775c52b6be0c41361df9731772c9b2&v=4 ',
      text:
        "It's such an easy gateway to use and its easy to work. I have told my friends about this site because it's such an amazing website and it is a great tool for the holidays to find gifts for your family.",
    },
    {
  
      name: 'Jared Seefried',
      image:
        'https://avatars2.githubusercontent.com/u/70176999?s=460&u=1feec23f681d336fd4222a4ff678bbbf9c69b9ef&v=4',
      text:
        'I like the fact that is it one of the most stable, secure membership sites. Its used by tons of members because of its sturdiness.',
    },
    {
  
      name: 'Jessica Acnocibar',
      image:
        'https://avatars1.githubusercontent.com/u/70282395?s=460&u=15f43fbe51db8d0a0fa278ca0632c95fc8935782&v=4',
      text:
        'Its a powerful and relatively simple membership wishlist membership site. It gives us exactly what we need and its easy to search.',
    },
    {
   
      name: 'Matt Boggs',
      image:
        'https://avatars1.githubusercontent.com/u/70782705?s=460&u=26c6b5591db508acd9a5925651d0118c71af6279&v=4 ',
      text:
        'I love this website! So easy to use and fun for families and friends!',
    },
    {
   
      name: 'Bishank Bohara',
      image:
        'https://avatars2.githubusercontent.com/u/70497195?s=460&u=954afe996cada9b306e86c63f36614664e7e21cf&v=4 ',
      text:
        'I am so happy I can create a registry to make people get me gifts.',
    },
    {
   
      name: 'Erin McGeever',
      image:
        'https://avatars2.githubusercontent.com/u/70718705?s=460&u=866e91bbe571a7d5e4c38939739aba81b9988fc3&v=4  ',
      text:
        'AWESOME',
    },
  ];
  
  db.Reviews
  .remove({})
  .then(() => db.Reviews.collection.insertMany(reviews))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  