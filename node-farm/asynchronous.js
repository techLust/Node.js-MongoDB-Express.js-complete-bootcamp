const fs = require("fs");
const superagent = require("superagent");

// USING PROMISE

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) reject("File not found");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, rejetct) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Data not found");
      resolve("Success");
    });
  });
};

// USING ASYNC AWAIT

// It keeps running in the background while performing the code in it. Rest of the code keeps running
// in the event loop. Inside async we can have one or more "await"

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(data);
    // const res = await superagent.get(
    //   `https://dog.ceo/api/breed/${data}/images/random`
    // );

    // Run multiple promise at once
    const res1Pro = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);

    await writeFilePro("dog-img.txt", imgs.join("\n"));
    console.log("Image saved in your device");
  } catch (err) {
    console.log(err);
    throw err;
  }
  return "2: Ready";
};

(async () => {
  try {
    console.log("1: Will get dog pics");
    const x = await getDogPic();
    console.log(x);
    console.log("3: Done getting dog pics");
  } catch (err) {
    console.log("ERROR");
  }
})();
/* console.log("1: will get dog pics");
getDogPic()
  .then((x) => {
    console.log(x);
    console.log("2: Done getting dog pics");
  })
  .catch((err) => {
    console.log("ERROR");
  }); */

//CONSUMEING PROMISES
/* readFilePro(`${__dirname}/dog.txt`, "utf-8")
  .then((result) => {
    console.log(result);
    //GET request
    return superagent.get(`https://dog.ceo/api/breed/${result}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFilePro("dog-img.txt", res.body.message);
    // Store image URL into a file
    // fs.writeFile("dog-img.txt", res.body.message, (err) => {
    //   if (err) return console.log(err.message);
    //   console.log("Image saved to file");
    // });
  })
  .then(() => {
    console.log("image saved to the file");
  })
  .catch((err) => {
    console.log(err.message);
  }); */

// USING CALLBACK
// Always use 'character encoding format' beside the file location and callback(), while access text file.

/* fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
  console.log(data);

  //GET request
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);

      // Store image URL into a file
      fs.writeFile("dog-img.txt", res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log("Image saved to file");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
}); */
