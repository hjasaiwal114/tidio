import OpenAI from "openai";

const apiKey = process.env.OPEN_API_KEY;

if (!apiKey) {
    throw Error("OPENAI_API_KEY is not set")
}

const openai = new OpenAI({ apiKey });

export default openai