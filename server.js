require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { connectToDB } = require("./src/lib/dbConnect");

const registrationFormRoutes = require("./src/lib/routes/registrationFormRoutes");
const newsletterRoutes = require("./src/lib/routes/newsletterRoutes");
const contactUsRoutes = require("./src/lib/routes/contactUsRoutes");
const enquiryFormRoutes = require("./src/lib/routes/enquiryFormRoutes");

const app = express();

// Middleware
app.use(express.json()); // To handle JSON request bodies

// Route handlers
app.use("/api/form-submit/registration", registrationFormRoutes);
app.use("/api/form-submit/newsletter", newsletterRoutes);
app.use("/api/form-submit/contact-us", contactUsRoutes);
app.use("/api/form-submit/enquiry", enquiryFormRoutes);

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;

// Next.js setup
const NextApp = next({ dev, hostname, port });
const handle = NextApp.getRequestHandler();

NextApp.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await NextApp.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await NextApp.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, async () => {
      console.log(`> Ready on http://${hostname}:${port}`);
      await connectToDB(); // Connect to MongoDB after server starts
    });
});
