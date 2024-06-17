// src/components/Publisher.tsx
import {useState} from 'react';
import ablyClient from '../ably';

const Publisher = ({channelName}: { channelName: string }) => {
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');

    const handleSendMessage = async () => {
        const channel = ablyClient.channels.get(channelName);
        await channel.publish('messageData', {
            title, message
        });
        setTitle('');
        setMessage('');
    };

    return (
        <div>
            <input
                className="border rounded px-4 py-2 mb-3"
                type="text"
                value={title}
                placeholder="Title"
                onChange={event => {
                    setTitle(event.target.value)
                }}
            />
            <br/>
            <textarea
                className="border rounded px-4 py-2 mb-3"
                value={message}
                placeholder="mMessage"
                onChange={event => {
                    setMessage(event.target.value)
                }}
            ></textarea>
            <br/>
            <button
                className="bg-blue-600 mb-3 text-white rounded px-4 py-2"
                onClick={handleSendMessage}>Send Message</button>
        </div>
    );
};

export default Publisher;
