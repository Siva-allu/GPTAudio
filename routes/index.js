var express = require('express');
var router = express.Router();


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: process.env.OPENAI_KEY});
const openai = new OpenAIApi(configuration);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/GPTresponse',async (req,res) => {
try{
  const response= await openai.createCompletion({
    model:'text-davinci-003',
    prompt: req.body.text,
    temperature: 0.5,
    max_tokens: 30
  })

  //console.log(response.data.choices[0].text);
  res.json({
    resp: response.data.choices[0].text
  });
} catch(error){
  console.error(error);
  res.status(500).json({error:"Something Went Wrong"});
}


})


module.exports = router;
