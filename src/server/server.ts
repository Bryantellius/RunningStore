import * as express from "express";
import * as path from "path";
import * as passport from "passport";
import config from "./config";
import * as helmet from "helmet";
import * as compression from "compression";
import * as morgan from "morgan";
import * as cors from "cors";
import router from "./routes";
import { IError } from "./utils/types";

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());

app.use(express.static("public"));
app.use(express.json());
app.use(passport.initialize());

app.use(morgan("dev"));
app.use(router);

app.get("*", async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (err) {
    next(err);
  }
});

app.use(
  (
    err: IError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.sendStatus(err.status || 500);
    res.json({ errors: { msg: err.message } });
  }
);

const port = config.port;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
