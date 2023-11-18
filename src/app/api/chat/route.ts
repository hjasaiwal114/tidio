
// route.ts Route Handlers


import {Configuration , OpenAiApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge'; // Provide optimal infrastructure for our API route

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAiApi(config);


// Post localhost: 300/api/chat

export async function POST(request: Request) {
    const { messages } = await request.json(); // { messages: []}

    console.log(messages);
    
    // GPT-4 system message
    // system message tells gpt-4 how to act

    const response =  await openai.createChatCompletion({
        model: 'gpt-4',
        stream: true,
        messages: [
            {role:"system", content: "you are a helpful assistant. you explain software concepts simply to intermediate programmers."}
            ,
            ...messages
        ]
    })
    
    // create a stream of data from OPENAi (stream data to the frontend)
    const stream = await OpenAIStream(response);

    // send the stream as a response to our client / frontend
    return new StreamingTextResponse(stream);

}