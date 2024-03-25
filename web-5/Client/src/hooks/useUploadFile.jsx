import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useFileUploader = () => {
  const [fileData, setFileData] = useState(null);
  const [signedImgUrl, setSignedImgUrl] = useState(null);

  const fileUploader = async (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      toast.error("No file selected");
      return;
    }

    setFileData(file);

    try {
      const url = await axios.post("http://ec2-3-19-58-71.us-east-2.compute.amazonaws.com:5000/upload-image", {
        filename: file.name,
      });

      if (!url.data.url) {
        console.log(url)
        toast.error("Failed to get upload image");
        return;
      }

      setSignedImgUrl(url.data.url);
    } catch (error) {
      console.log(error)
      toast.error("Failed to upload image");
    }
  };

  return {
    fileData,
    signedImgUrl,
    fileUploader
  };
};

export default useFileUploader;
