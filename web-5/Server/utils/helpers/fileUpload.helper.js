const { PutObjectCommand } = require("@aws-sdk/client-s3");

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const Client = require("../../configuration/s3-connect");


const uploadFL = async (filename) => {
    const command = new PutObjectCommand({
      Bucket: "s3.deepthi.me",
      Key: `${filename}`,
      ContentType: "image/jpeg || image/png || image/webp",
    });
  
    try {
      console.log("here am trying for: ", Client)
      const url = await getSignedUrl(Client, command, { expiresIn: 3600 });
      
      return url;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

module.exports = uploadFL;

