import useAbly from '../hooks/useAbly';

const Subscriber = ({ channelName }: { channelName: string }) => {
    const messages = useAbly(channelName);

    return (
        <div>
            <ul>
                {messages.map((messageData, index) => (
                    <li key={index} className="border-gray-200 border rounded p-3 mb-3">
                        <b>{messageData.data.title}</b> <br/> {messageData.data.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Subscriber;
