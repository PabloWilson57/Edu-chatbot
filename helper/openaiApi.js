const axios = require('axios');
require('dotenv').config();
const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env["Key1"] + process.env["Key2"],
});
//it is working now.
const chatCompletion = async (prompt) => {
    try {
        const education ="Act like you're RMIT professor who teach students. You can reference this site to guide students. https://chat.openai.com/share/a5f2d4a0-1b46-4917-8c0c-107d225cbe6a And please answer shortly because students hate long explaination.";
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { "role": "system", "content": education },
                { "role": "user", "content": prompt }
            ],
            temperature : 1.6
        });

        let content = response.choices[0].message.content;
        ///////////////////////////////   TTS    //////////////////////////////////

        ///////////////////////////////////////////////////////////////////////////
        return {
            status: 1,
            response: content
        };
    } catch (error) {
        console.log(error);
        return {
            status: 0,
            response: 'Error'
        };
    }
};

//try {
//  const options = {
//    method: 'POST',
//      url: `https://api.openai.com/v1/chat/completions`,
//        headers: {
//          'Content-Type': 'application/json',
//          Authorization: 'Bearer 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',
//        },
//        data: {
//          "model": "gpt-3.5-turbo",
//          "messages": [
//            { "role": "system", "content": "121." },
//            { "role": "system", "content": "qwdqwd" },
//            { "role": "system", "content": "qwdqwd " },
//            { "role": "system", "content": "qwdqwdqwdqwd" },
//            {
//              "role": "user",
//              "content": "tell me about computer"
//            }
//         ]
//       }
//     };

//   const response = await axios.request(options);

//   console.log(response.data.choices[0])

//   if (response.status === 200 && response.statusText === 'OK') {
//     return 1;
//   } else {
//     return 0;
//   }
// } catch (error) {
//   console.error(error);
//   return 0;
// }
module.exports = {
    chatCompletion
};