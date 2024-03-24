const { S3Client } = require("@aws-sdk/client-s3");
require("dotenv").config();

const Client = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

module.exports = Client;
