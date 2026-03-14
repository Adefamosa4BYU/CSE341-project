require('dotenv').config()
const express = require('express');
const connectDB = require("./DB/Connection");
const contactsRouter = require('./route/contacts')
const cors = require("cors");
const app = express();

connectDB();

app.use(express.json({extended:false}))

app.use(cors())
app.use('/api/userModel',require('./Api/User'));
app.use('/contacts', contactsRouter)

app.get("/professional", (req, res) => {
  const data = {
    professionalName: "Adegbite Famosa",
    base64Image: "",
    nameLink: {
      firstName: "Adegbite",
      url: "https://example.com"
    },
    primaryDescription: "I am a developer passionate about building web applications.",
    workDescription1: "I enjoy building APIs and full-stack applications.",
    workDescription2: "I also mentor others learning programming.",
    linkTitleText: "Connect with me:",
    linkedInLink: {
      text: "LinkedIn",
      link: "https://linkedin.com"
    },
    githubLink: {
      text: "GitHub",
      link: "https://github.com"
    }
  };

  res.json(data);
});


app.get("/api/data", (req, res) => {

  const data = {
    title: "My API Backend",
    description: "This data is coming from the backend",
    link: "https://example.com",
    image: "base64stringhere"
  }

  res.json(data)

})


const Port = process.env.Port || 8080;

app.listen(Port, () => console.log(`Server started at port ${Port}`));
