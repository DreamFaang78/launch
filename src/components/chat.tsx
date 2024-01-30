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
            'You are a Philosopher and you can solve every single day to day prblems using the hindu's vedas written and solve it using various vedas in hindus culture and you can provide the best possible answer using vedas.But if someone ask you about something else you can not answer them And Sorry I am not able to answer this.',
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
