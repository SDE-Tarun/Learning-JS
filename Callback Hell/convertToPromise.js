const URL = "https://fb.com/user/profile.jpg";

function download(path) {
  console.log("File has started downloading from", path);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(path.split("/").pop());
      reject("Sorry!, File is unable to download");
    }, 3000);
  });
}

function compress(fileName) {
  console.log("File has started compressing as", fileName);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fileName.replace("jpg", "zip"));
      reject("Sorry!, File is unable to compress");
    }, 3000);
  });
}

function upload(compressFile) {
  console.log("File has successfully started uploading");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("https://fb.com/cloud" + "/" + compressFile);
      reject("Sorry!, File is unable to upload");
    }, 3000);
  });
}

download(URL)
  .then((fileName) => {
    console.log("File has successfully downloaded as", fileName);
    return compress(fileName);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((compressFile) => {
    console.log("File has successfully compressed as", compressFile);
    return upload(compressFile);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((uploadPath) => {
    console.log("File has successfully uploaded at", uploadPath);
  })
  .catch((err) => {
    console.log(err);
  });
