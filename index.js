const fs = require('fs')

fs.open('./blog1.txt', 'r+', (err, fd) => {
    if (err) {
        console.log("Fehler beim auslesen des Blog1 Files.")
        return
    }
    console.log(fd);
    fs.write(fd, 'Bye World!   ', () => {
        console.log('file overwritten?');
    })
    fs.close(fd, () => {
        console.log('file closed');
    })
})

// const data = new Uint8Array(Buffer.from('testtext'))
// console.log(data);

fs.writeFile('./blog2.txt', 'Hello, World?', 'utf8', (err) => {
    if (err) {
        console.log('Error with writing file blog2');
        return
    }
    console.log('file written?');
})

fs.mkdir('./assets', { recursive: true }, (err) => {
    if (err) {
        console.log('failed to create folder');
    }
    console.log('folder created');
})

fs.rmdir('./assets', (err) => {
    if (err) {
        console.log('failed to delete folder');
    }
    console.log('folder deleted');
})

fs.writeFile('./delete.txt', 'utf8', (err) => {
    if (err) {
        console.log('failed to create delete.txt file');
        return
    }
    console.log('file delete.txt created');
})

fs.unlink('./delete.txt', (err) => {
    if (err) {
        console.log('failed to delete delete.txt file');
    }
    console.log('delete.txt file deleted');
})

fs.writeFile('./Hello.txt', 'lol text', 'utf8', (err) => {
    if (err) {
        console.log('failed to create Hello.txt');
        return
    }
    console.log('Hello.txt created');
})

fs.rename('./Hello.txt', 'HelloWorld.txt', (err) => {
    if (err) {
        console.log('failed to rename Hello.txt');
        return
    }
    console.log('rename Hello.txt to HelloWorld.txt');
})