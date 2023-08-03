const swaggerAutogen = require("swagger-autogen");

const outputFile = "swagger/swagger_output.json";

const endPointsFile = ["index.js"];

swaggerAutogen(outputFile, endPointsFile);