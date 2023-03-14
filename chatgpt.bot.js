const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");


const organization = "org-nCzle6SIRrveE92NUu7QZvkF" ;
const apiKey = "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" ;

const configuration = new Configuration({
  organization: organization,
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

/**
 @async
 @function ChatGPT -Generates a response from OpenAI's GPT-3 model using the given prompt.
 @param {string} prompt - The prompt to generate a response from.
 @returns {Promise<string>} The generated response from GPT-3.
 @throws {Error} If there is an error generating the response from GPT-3.
*/

const generatePrompt = function (prompt) {
  return `Important: Pretend to be an Artificial Intelligence of Al-X Humaid and your name is AiX and You're a Question and Answer AI who can answer almost every question.

  Question: ${prompt}
  Answer:`
}

const ChatGPT = async (prompt) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(prompt),
      temperature: 0.5,
      max_tokens: 750,
      top_p: 0.5,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error(`Error in ChatGPT: ${error.message}`);
    throw new Error("Failed to generate response from AI");
  }
};

module.exports = ChatGPT;
