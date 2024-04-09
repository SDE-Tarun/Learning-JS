const URL = 'http://facebook.com/user/profile.jpg';

function download(path, downloaded) {
    console.log('File has started downloading from path', path);
    setTimeout(() => {
        downloaded(path.split('/').pop());
    }, 3000);
}

function compress(fileName, compressed) {
    console.log('File has started compressing as', fileName);
    setTimeout(() => {
        compressed(fileName.replace('jpg','zip'));
    }, 3000);
}

function upload(compressFileName, uploaded) {
    console.log('File has started uploaded at path', compressFileName);
    setTimeout(() => {
        uploaded('http:/facebook.cloud' + '/' + compressFileName);
    }, 3000);
}

download(URL, function(fileName) {
    console.log('File downloaded successfully as', fileName);
    compress(fileName, function(compressFileName) {
        console.log('File compressed successfully as', compressFileName);
        upload(compressFileName, function(uploaded) {
            console.log('File uploaded successfully at path', uploaded);
        })
    })
})




