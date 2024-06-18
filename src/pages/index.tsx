import Subscriber from '../components/Subscriber';
import "/src/app/globals.css";

const HomePage = () => {
    const channelName = 'eranda-test-channel';

    return (
        <div className="mt-4 rounded border mx-auto max-w-4xl p-4 pb-1">
            <h1 className="text-4xl mb-4">Ably Notifications</h1>
            <h3 className="font-bold text-lg mb-3">Pushed messages</h3>
            <Subscriber channelName={channelName}/>
        </div>
    );
};

export default HomePage;
