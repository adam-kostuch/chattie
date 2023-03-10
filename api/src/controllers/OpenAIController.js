import { Configuration, OpenAIApi } from 'openai';
import { OPEN_API_KEY } from '../configuration/constants.js';

const configuration = new Configuration({
  organization: "org-LKfp5S6t9L2Fh94ykq63Nfyn",
  apiKey: OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

const OpenAIController = async (req, res) => {
  const response = await openai.createCompletion({
    // I selected the most common model, for more see https://platform.openai.com/docs/models/gpt-3-5
    model: 'text-davinci-003',
    // If something goes wrong there's a protection by default
    prompt: req.body.message ?? 'Tell me a joke!',
    max_tokens: 32,
    temperature: 0,
  });

  // We're using just one response from the AI, so that's why there's selection of first array element
  if (response.data.choices[0].text) {
    console.log(`[SERVER] OpenAI response generated!`);

    res.json({message: response.data.choices[0].text ?? 'Sorry, something went wrong'});
  }
}

export default OpenAIController;
