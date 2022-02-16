const fs = require('fs');
const path = require('path');

// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// })
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'),    {recursive: true},(err) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//     })


// створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами
// user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;

const onlineUsers = [{
    name: 'Andrii',
    age: 22,
    city: 'Lviv'
}];

const inPersonUsers = [{
    name: 'Vasya',
    age: 32,
    city: 'Zazhopinsk'
}];

// створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
//     але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

// fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'),'',
//     (err) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//     })
//
// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),'',
//     (err) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//     })
//
// onlineUsers.map(onlineUser => {
//     fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'),
//         `\nNAME: ${onlineUser.name}; \nAGE: ${onlineUser.age}; \nCITY: ${onlineUser.city}`,
//         (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//         })
// })
//
// inPersonUsers.map(inPersonUser => {
//     fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
//         `\nNAME: ${inPersonUser.name}; \nAGE: ${inPersonUser.age}; \nCITY: ${inPersonUser.city}`,
//         (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//         })
// })

// напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

const changeUserPlace = ()=>{
    fs.readFile(path.join(__dirname,'main','inPerson','inPerson.txt'),'utf8',(err,data)=>{
        if(err){
            console.log(err)
            throw err
        }
        fs.appendFile(path.join(__dirname,'main','online','online.txt'),data,{flag: 'w'},(err)=>{
            if (err){
                console.log(err)
                throw err
            }
        })
    })
    fs.readFile(path.join(__dirname,'main','online','online.txt'),'utf8',(err,data)=>{
        if (err){
            console.log(err)
            throw err
        }
        fs.appendFile(path.join(__dirname,'main','inPerson','inPerson.txt'),data,{flag: 'w'},(err)=>{
            if (err){
                console.log(err)
                throw err
            }
        })
    })
}
changeUserPlace()