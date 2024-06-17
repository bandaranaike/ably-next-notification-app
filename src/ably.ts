import { Realtime } from 'ably';

const ablyClient = new Realtime({
    key: process.env.NEXT_PUBLIC_ABLY_API_KEY,
});

export default ablyClient;
