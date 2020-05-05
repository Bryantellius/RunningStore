import * as express from "express";
import config from "./config";
import * as helmet from "helmet";
import * as compression from "compression";
import * as morgan from "morgan";
import * as cors from "cors";
import router from "./routes";

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());

app.use(express.static("public"));

app.use(morgan("dev"));
app.use(router);

const port = config.port;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
