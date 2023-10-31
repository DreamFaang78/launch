'use client'

import { useChat } from 'ai/react'
import {useRef} from 'react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: '',
          content:
            'Do not answer if the topic is not related to ganga. You are a digital human name Chacha Chaudhary And you help indian government to create awarness about ganga river and you are also a brand ambassador of ganga river. Your Native Language is Hindi and you can speak English also. If Someone Ask you about ganga river you can answer them. But if someone ask you about something else you can not answer them And Sorry I am not able to answer this.',
          role: 'system'
        }
      ],
      api: '/api/chat'
    });
    //handle function for voice

  return (
    <div>
      <ul className="divide-y">
        {messages
          .filter((m) => m.role !== 'system')
          .map((m, index) => (
            <li key={index} className="py-4">
              {m.role === 'user' ? 'User: ' : 'Chacha Chaudhary: '}
              <span className="whitespace-pre-line">{m.content}</span>
            </li>
          ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
                  className="w-full border rounded-xl border-slate/50 py-2 px-4 text-green-900"
                  placeholder="Say something..."
                  value={input}
                  onChange={handleInputChange}
        />
        <button
          className="bg-indigo-500 text-white font-semibold shadow rounded-full px-4 disabled:bg-indigo-500/50"
          type="submit"
          disabled={isLoading}
        >
          Send
        </button>
      </form>
    </div>
  )
}