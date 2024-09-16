import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        res.render("index", { data: result, error: null });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index", {
            data: null,
            error: error.message,
        });
    }
});

app.post("/", async (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server running on Port ${port}.`);
});