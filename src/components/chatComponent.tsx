"use client"

import { usechat } from "ai/react"

export default function ChatComponent() {

    const [input, handleInputChange, handleSubmit, isLoading, messages ] = usechat();

    console.log(messages);
    console.log(input);

    return (
        <div>
            {/* text messages */}

            <form className="mt-12">
                <p>UserMessage</p>
                <textarea 
                   className="mt-2 w-full bg-slate-600 p-2"
                   placeholder={"Message TIDIO"}
                   value={input}
                   onChange={handleInputChange}
                />
                <button className="rounded md bg bg-blue-600 p-2 mt-2">
                    send message
                </button>
            </form>

        </div>
    )
}