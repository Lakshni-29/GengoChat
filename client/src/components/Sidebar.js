import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import user3 from './user3.png'
import './Bar.css'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar(props) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
  const [modalOpen, setModalOpen] = useState(false)
  const conversationsOpen = activeKey === CONVERSATIONS_KEY
  let id=props.id
  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div style={{ width: '270px', backgroundColor: '#F5F5F5'}} className="d-flex flex-column">
      <div className='user-nav'></div>
      
      {/* Chatnavbar */}
      <Navbar className='nav-main'>
        <Container>
          <Navbar.Brand href="#home" className='text'>
            <img
              alt=""
              src={user3}
              width="20"
              height="20"
              className="menu"
            />{' '}
            Chatroom
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="p-2 border-top border-right small" style={{color:'#6C5984'}}>
          Your Id: <span className="text-muted">{id}</span>
        </div>

    
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        {/* search */}
        <Form className="search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search"
              aria-label="Search"
            />
        </Form>
        <br/>
        {/* Convo and chat */}
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations setName={props.setName} />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <svg  onClick={() => setModalOpen(true)} style={{marginLeft:'210px'}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#6C5984" className="bi bi-plus-circle-fill image" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link className='convo' eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='contact' eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
  

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal>
    </div>
  )
}




