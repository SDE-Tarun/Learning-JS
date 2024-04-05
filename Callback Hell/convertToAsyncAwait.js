const URL = "https://facebook.com/user/profile.zip";

// Pehle toh function banao apne using promises aur fir apne function ko async banao
async function download(path) {
  console.log("File has started downloading from", path);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(path.split("/").pop());
    }, 3000);
  });
}

// Pehle toh function banao apne using promises aur fir apne function ko async banao
async function compress(fileName) {
  console.log("File has started compressing as", fileName);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fileName.replace("jpg", "zip"));
    }, 3000);
  });
}

// Pehle toh function banao apne using promises aur fir apne function ko async banao
async function upload(compressFile) {
  console.log("File has started uploading as", compressFile);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("https://facebook.cloud/" + compressFile);
    }, 3000);
  });
}

// Yeh function ke andar se saare kaam karwao apne function iske through call krke
// isme jaha pe function call krwaoge uske aage await lagao
async function handleFileOperation(URL) {
  try {
    const fileName = await download(URL);
    console.log("File has successfully downloaded as", fileName);

    const compressFile = await compress(fileName);
    console.log("File has successfully compressed as", compressFile);

    const uploadPath = await upload(compressFile);
    console.log("File has successfully uploaded at", uploadPath);
  } catch {
    console.log("Sorry! An error occured while handling your file operation");
  }
}

handleFileOperation(URL);
