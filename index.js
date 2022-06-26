import express from 'express';
import cors from 'cors';
const app = express();
//lista de usuários
const users = [{ name: 'Isaque', age: 24,  gender: 'male', id: -7}];
//data de criação e alteração
const date = new Date();
        const month = date.getUTCMonth() + 1; //months from 1-12
        const day = date.getUTCDate();
        const year = date.getUTCFullYear ();
        const simpleDate = day + "/" + month + "/" + year;

app.use(cors('*'));
app.use(express.json());

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/users', function(req, res) {
    res.send(users);
});

app.post('/users', function(req, res) {
    const user = req.body;
    
    const newId = Math.floor(Math.random() * 100);
    
    user.id = newId;
    
    user.date = simpleDate;
    user.changeDate = simpleDate;
    
   console.log(user)
    users.push(user);
    res.send(users);

});

app.post('/users/delete', function(req, res) {
    const mat = req.body.id;
    console.log(mat)
    //  console.log(mat, (users.findIndex(element => element.id == mat)))
    users.splice((users.findIndex(element => element.id == mat)), 1)
    
    res.send(users);
})

app.put('/users/', function(req, res) {
    const body = req.body;
    const mat = req.body.id;
    const indexToChange = users.findIndex(element => element.id == mat);
    const newName = req.body.name;
    if (newName != ""){
        users[indexToChange].name = newName;
   }
    const newNickname = req.body.nickname;
    if (newNickname != ""){
        users[indexToChange].nickname = newNickname;
   }
    const newAge = req.body.age;
    if (newAge != ""){
        users[indexToChange].age = newAge;
   }    
    const newCPF = req.body.cpf;
    if (newCPF != ""){
        users[indexToChange].cpf = newCPF;
   }
    const newPhone = req.body.phone;
    if (newPhone != ""){
        users[indexToChange].phone = newPhone;
   }
    const newGender = req.body.gender;
    if (newGender != ""){
        users[indexToChange].gender = newGender ;
   }
    const newAddress = req.body.address;
    if (newAddress != ""){
        users[indexToChange].address = newAddress;
   }
    const newImg = req.body.img;
    if ( newImg != ""){
        users[indexToChange].img = newImg;
   }
    const newObs = req.body.obs;
    if (newObs != ""){
        users[indexToChange].obs = newObs;
   }
    
    const allData = [{ name: newName, nickname: newNickname, age: newAge, cpf: newCPF, phone: newPhone, gender: newGender, address: newAddress, img: newImg, obs: newObs}]
   
        
    // ;
    // users[indexToChange].age = newAge;
    users[indexToChange].changeDate = simpleDate;
    console.log(users[indexToChange].age)
    res.send(users);
});

app.listen(3001);
