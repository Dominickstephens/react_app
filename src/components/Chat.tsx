import Feedback from "./Feedback";
import Button from "./Button";
import { ChangeEvent, useState } from "react";
// import css from app
import '../App.css';

const Chat = () => {
    const [messages, setMessages] = useState<{ email: string; message: string }[]>([]);
    const [messageInput, setMessageInput] = useState<string>('');
    const [emailInput, setEmailInput] = useState<string>('');

    const handleMessageSend = () => {
        // Add the current message input to the list of messages
        setMessages([...messages, { email: emailInput, message: messageInput }]);
        // Clear the message and email input fields after sending
        setMessageInput('');
        setEmailInput('');
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Update the input state as the user types
        if (event.target.name === 'msg') {
            setMessageInput(event.target.value);
        } else if (event.target.name === 'email') {
            setEmailInput(event.target.value);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form submission
        if (emailInput.trim() !== '' && messageInput.trim() !== '') {
            handleMessageSend(); // Call handleMessageSend to send the message
        } else {
            alert('Please fill in both email and message fields.');
        }
    };

    return (
        <>
            <div className="card mx-auto mt-5" style={{width: '50rem'}}>
                <div className="card-body">
                    <h1 className="card-title">Chat</h1>
                    <p className="card-text">Send us a message!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="email"
                                placeholder="name@example.com"
                                value={emailInput}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="msg" className="form-label">Enter Message</label>
                            <textarea
                                className="form-control"
                                id="msg"
                                name="msg"
                                value={messageInput}
                                onChange={handleInputChange}
                                rows={2}
                                required
                            ></textarea>
                        </div>
                        {/* send button to send the message */}
                        <button className="btn btn-primary" type="submit">Send</button>
                    </form>
                </div>
            </div>
            <br></br>

            {/* Wrapper for all elements after the line break */}
            {messages.length > 0 && (
                <div style={{backgroundColor: '#baa0d9'}}>
                    <hr></hr>
                    <br></br>
                    <div className="chat-messages mx-auto" style={{width: '50rem'}}>
                        {messages.map((message, index) => (
                            <div key={index} className={`chat-message ${index % 2 === 0 ? 'self' : 'other'}`}>
                                <div className="message-text">{message.message}</div>
                                <div className="message-sender">{message.email}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </>


    );
}

export default Chat;
