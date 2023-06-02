const { express, cors, path, http } = require("./packages");
const app = express();
const server = http.createServer(app);
const { start } = require("./db/db");
const { routers } = require("./routes/routes");


app.use(cors());
start(server).then(() => {});
routers(app);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "./../frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./../frontend", "build", "index.html")
    );
  });
}