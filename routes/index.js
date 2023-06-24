var express = require('express');
var router = express.Router();


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: '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'});
const openai = new OpenAIApi(configuration);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/GPTresponse',async (req,res) => {
try{
  const response= await openai.createCompletion({
    mode:'text-davinci-003',
    prompt: req.body.text,
    temperature: 0.7
  })

  //console.log(response);
  res.json(response);
} catch(error){
  console.error(error);
  res.status(500).json({error:"Something Went Wrong"});
}


})

module.exports = router;
