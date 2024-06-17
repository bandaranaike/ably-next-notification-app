// src/hooks/useAbly.ts
import {useEffect, useState} from 'react';
import ablyClient from '../ably';

const useAbly = (channelName: string) => {
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        const channel = ablyClient.channels.get(channelName);

        channel.subscribe((message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            channel.unsubscribe();
            ablyClient.channels.release(channelName);
        };
    }, [channelName]);

    return messages;
};

export default useAbly;
