const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/User");
const { default: mongoose } = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const secretToken = 'jkdnonenrjnenroieern';


mongoose.connect("mongodb+srv://allialameen8739:zzZcITrGkRdV6YwM@cluster0.hnsov1d.mongodb.net/?retryWrites=true&w=majority");


app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const UserDetails = await User.create({username, password:bcrypt.hashSync(password, salt)});
    res.json(UserDetails);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req,res) => {
  const {username, password} = req.body;
  const UserDetails = await User.findOne({username});
  const passWordOk = bcrypt.compareSync(password, UserDetails.password);

  if (passWordOk) {
    jwt.sign({username, id:UserDetails._id}, secretToken, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json('ok');
    });
  } else {
    res.status(400).json('Wrong credentials!');
  }
})

app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secretToken, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  })
});

const PORT = 4040;
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});

// mongodb+srv://allialameen8739:zzZcITrGkRdV6YwM@cluster0.hnsov1d.mongodb.net/?retryWrites=true&w=majority

// zzZcITrGkRdV6YwM
