import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
        height="100vh"
        projectID="0e89394c-99b5-4cc0-9e88-c276096ea5da"
        userName="jsolomon"
        userSecret="password"
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}
    />
  );
}

export default App;