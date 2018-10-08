const faker = require("faker");
const csv = require("fast-csv");
const fs = require("fs");

// id: Number,
function makeTen(fileNum, cb) {
  var csvStream = csv.createWriteStream({ headers: false });
  var writableStream = fs.createWriteStream(
    `${__dirname}/csvMainFile${fileNum}.csv`
  );
  var batch = 0;
  //
  // writableStream.on("drain", () => {
  //   console.log("drained");
  // });
  writableStream.on("finish", function() {
    console.log("DONE!");
    if (fileNum < 19) {
      makeTen(fileNum + 1, cb);
    }else{
      cb()
    }
  });
  csvStream.pipe(writableStream);

  var obj = {
    id: `id`,
    title: "title",
    _cast: "_cast",
    photos: "photos",
    storyline: "storyline",
    plotKeyWords: "plotKeyWords",
    taglines: "taglines",
    genres: "genres",
    movieRating: "movieRating",
    mpaa: "mpaa",
    officialSites: "officialSites",
    country: "country",
    languages: "languages",
    releaseDate: "releaseDate",
    aKa: "aka",
    filmingLocations: "filmingLocations",
    // BOX OFFICE
    budget: "budget",
    openingWeekend: "openingWeekend",
    gross: "gross",
    cumulative: "cumulative",
    // CREDITS
    productionCo: "productionCo",
    runtime: "runtime",
    soundMix: "soundMix",
    color: "color",
    aspectRatio: "aspectRatio",
    // DID YOU KNOW
    trivia: "trivia",
    goofs: "goofs",
    quotes: "quotes",
    crazyCredits: "crazyCredits",
    connections: "connections",
    soundtracks: "soundtracks",
    faq: "faq"
  };
  csvStream.write(obj);

  function thousandstimes(batch) {
    if (batch === 100) {
      csvStream.end();
      return;
    }
    let date = Date.now();
    for (let i = 0; i < 10000; i++) {
      obj = {
        id: `${i}-${batch}-${fileNum}`,
        title: `${faker.commerce.productName()}`,
        _cast: [
          `{${faker.name.findName()}`,
          `${faker.name.findName()}`,
          `${faker.name.findName()}}`
        ],
        photos: [
          `{${faker.image.imageUrl()}`,
          `${faker.image.imageUrl()}`,
          `${faker.image.imageUrl()}}`
        ],
        storyline: `${faker.lorem.paragraph()}`,
        plotKeyWords: [
          `{${faker.random.word()}`,
          `${faker.random.word()}`,
          `${faker.random.word()}`,
          `${faker.random.word()}}`
        ],
        taglines: `${faker.random.word()}`,
        genres: [
          `{${faker.random.word()}`,
          `${faker.random.word()}`,
          `${faker.random.word()}}`
        ],
        movieRating: `${faker.hacker.adjective()}`,
        mpaa: "Time Warner",
        officialSites: [
          `{${faker.internet.domainName() + faker.internet.domainSuffix()}}`
        ],
        country: `${faker.address.country()}`,
        languages: "English",
        releaseDate: `${faker.date.past()}`,
        aKa: "aka",
        filmingLocations: [
          `{${faker.address.county()}`,
          `${faker.address.county()}`,
          `${faker.address.county()}}`
        ],
        // BOX OFFICE
        budget: `$${Math.ceil(Math.random() * 20)} Million`,
        openingWeekend: `${faker.date.past()}`,
        gross: `$${Math.random() * 10000000 * Math.random()} Million`,
        cumulative: "cumulative",
        // CREDITS
        productionCo: "productionCo",
        runtime: "runtime",
        soundMix: "soundMix",
        color: "color",
        aspectRatio: "aspectRatio",
        // DID YOU KNOW
        trivia: "trivia",
        goofs: "goofs",
        quotes: "quotes",
        crazyCredits: "crazyCredits",
        connections: "connections",
        soundtracks: [
          `{${faker.company.bsBuzz()}`,
          `${faker.company.bsBuzz()}`,
          `${faker.company.bsBuzz()}}`
        ],
        faq: [
          `{${faker.lorem.sentences()}?`,
          `${faker.lorem.sentences()}?`,
          `${faker.lorem.sentences()}?`,
          `${faker.lorem.sentences()}?`,
          `${faker.lorem.sentences()}?`,
          `${faker.lorem.sentences()}?}`
        ]
      };
      csvStream.write(obj);
    }
    // console.log(Date.now() - date);
    if (Date.now() - date > 3900 && batch < 1000) {
      csvStream.once("drain", () => {
        thousandstimes(batch + 1);
      });
    } else if (batch < 1000) {
      thousandstimes(batch + 1);
    } else if (Date.now() > 3900){
      csvStream.once('drain', ()=>{
        console.log('1000 started');
      })
    }
  }

  thousandstimes(0);
}
var start = Date.now()
makeTen(10, ()=>{
  console.log(Date.now() - start)
});
