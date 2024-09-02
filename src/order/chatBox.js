import React, { useState, useEffect, useRef } from 'react';
import { CButton, CModal, CModalBody, CModalHeader, CModalFooter, CFormInput } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../scss/vendors/chat.scss';
import { styled } from '@mui/material/styles';
import { database } from '../config/firebase.config'; // Import Firebase database

// Styled Components
const ChatBody = styled('div')(({ type }) => ({
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '60%',
  wordWrap: 'break-word',
  ...(type === 'self' && {
    backgroundColor: '#e0f7fa',
    alignSelf: 'flex-end',
    textAlign: 'right',
  }),
  ...(type === 'other' && {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    textAlign: 'left',
  }),
}));

const SendButton = styled(CButton)({
  padding: '6px',
  marginLeft: '10px',
});

const ModalWrapper = styled(CModal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FooterContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const ChatBox = ({ open, onClose, orderId, senderId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!open || !orderId) {
      setMessages([]);
      return;
    }

    const messagesRef = database.ref('chats').child(orderId).child("messages");
    messagesRef.on('child_added', (snapshot) => {
      const newMessage = snapshot.val();
      // Determine message type based on senderId
      newMessage.type = newMessage.senderId === senderId ? 'self' : 'other';
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
    return () => {
      messagesRef.off();
    };
  }, [orderId, open, senderId]);

  const sendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = {
      msg: input,
      timestamp: Date.now(),
      senderId: senderId,
      receiverId: receiverId,
    };
    database.ref('chats').child(orderId).child("messages").push(newMessage);
    setInput('');
  };

  const handleClose = () => {
    onClose();
  };

  if (!open) return null;

  return (
    <ModalWrapper visible={open} onClose={handleClose} className="chat_box animated fadeInUp">
      <CModalHeader>MESSAGES</CModalHeader>
      <CModalBody
        id="chatBody"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          height: '400px',
          overflowY: 'auto',
        }}
        ref={chatBodyRef}
      >
        {messages.map((msg, index) => (
          <ChatBody key={index} type={msg.type}>
            {msg.msg}
          </ChatBody>
        ))}
      </CModalBody>
      <CModalFooter>
        <FooterContainer>
          <CFormInput
            type="text"
            id="MsgInput"
            placeholder="Enter Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            style={{ flex: 1, marginRight: '-7px' }}
          />
          <SendButton onClick={sendMessage} color="primary">
            <i className="fab fa-telegram-plane"></i>
          </SendButton>
        </FooterContainer>
      </CModalFooter>
    </ModalWrapper>
  );
};

export default ChatBox;
