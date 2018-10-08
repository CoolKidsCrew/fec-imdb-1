const faker = require("faker");
const csv = require("fast-csv");
const fs = require("fs");

// id: Number,
function makeTen(fileNum) {
  var startTime = Date.now();
  var csvStream = csv.createWriteStream({ headers: false });
  var writableStream = fs.createWriteStream(`${__dirname}/csvFile${fileNum}.csv`);
  var batch = 0;

  writableStream.on("finish", function() {
    console.log(Date.now() - startTime);
    console.log("DONE!");
    if (fileNum < 9) {
      makeTen(fileNum + 1);
    }
  });
  csvStream.pipe(writableStream);

  var obj = {
    id_1: `id_1`,
    movie_title: 'movie_title',
    reviewer: 'reviewer',
    review_title: 'review_title',
    review: 'review',
    review_date: 'review_date',
    reviews_number: 'reviews_number',
    review_viewers: 'review_viewers',
    review_likes: 'review_likes',
    review_average: 'review_average'
  }
  csvStream.write(obj);

  while (batch < 10) {
    batch += 1
    for (let i = 0; i < 100000; i++) {
      obj = {
        id_1: `${i}-${fileNum}-${batch}`,
        movie_title: `${faker.commerce.productName()}`,
        reviewer: `${faker.name.firstName()} ${faker.name.lastName()}`,
        review_title: `${faker.internet.password()}`,
        review: `${faker.lorem.sentence()}`,
        review_date: `${faker.date.past()}`,
        reviews_number: `${i}`,
        review_viewers: `${Math.floor(Math.random() * 12913)}`,
        review_likes: `${Math.floor(Math.random() * 10542)}`,
        review_average: `${faker.random.number(5)}`
      };
      csvStream.write(obj);
    }

    writableStream.on('read', ()=>{
      writableStream.once("drain", () => {
        console.log("drained");
      });
    });
  }

  csvStream.end();
}

makeTen(0);
