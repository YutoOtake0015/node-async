const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;
const file = "data.txt";

// routing
app.get("/", (req, res) => {
  // reading
  fs.readFile(file, (err, data) => {
    const count = Number(data);

    if (err) {
      res.send(`エラーが発生しました ${err}`);
      return false;
    }

    // write
    fs.writeFile(file, (count + 1).toString(), (err) => {
      if (err) {
        res.send(`エラーが発生しました ${err}`);
        return false;
      }

      res.send(`あなたは${count}番目`);
    });
  });
});

// stert server
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});
