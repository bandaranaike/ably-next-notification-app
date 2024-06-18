import { NextApiRequest, NextApiResponse } from 'next';
import ablyClient from '../../ably';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const channelName = req.body.channelName || 'eranda-test-channel';
    const randomMessage = generateRandomMessage();

    try {
        const channel = ablyClient.channels.get(channelName);
        await channel.publish('messageData', randomMessage);
        return res.status(200).json({ message: 'Message sent successfully', data: randomMessage });
    } catch (error) {
        console.error('Error publishing message:', error);
        return res.status(500).json({ message: 'Error publishing message', error: error });
    }
};

// Function to generate a random message
const generateRandomMessage = () => {
    const titles = ['Hello', 'Hi', 'Greetings', 'Salutations', 'Hey'];
    const messages = [
        'This is a random message.',
        'Hope you are having a great day!',
        'Here is some random text for you.',
        'Stay positive and happy!',
        'Keep up the good work!'
    ];

    const title = titles[Math.floor(Math.random() * titles.length)];
    const message = messages[Math.floor(Math.random() * messages.length)];

    return { title, message };
};

export default handler;
