import express from "express";
const app = express();
import { getUser, createUser, getUserEmail } from "./database.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/member", async (req, res) => {
  res.sendFile(__dirname + "/public/member.html");
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await getUserEmail(email);

  try {
    if (existingUser) {
      res.status(400).send(`<script>
      alert("此信箱已被註冊");
      window.history.back();
      </script>`);
    } else {
      const newUser = await createUser(email, password);
      res.redirect("/member");
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await getUser(email, password);

  if (existingUser) {
    res.redirect("/member");
  } else {
    res.status(400).send(`<script>
    alert("無法找到使用者，請確認信箱是否正確");
    window.history.back();
    </script>`);
  }
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
