import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';
import user3 from './user3.png'
import './Bar.css'

export default function Conversations(props) {
  const { conversations, selectConversationIndex } = useConversations()

  return (
    <ListGroup variant="flush" className='list' style={{backgroundColor:'#6C5984'}}>
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          <p
          className='uname'
          src={user3} 
          style={{fontSize:'20px', position:'relative',top:'5px', fontWeight:'600'}}
          value = {conversation.recipients.map(r => r.name).join(', ')}
          onClick={(e) => {
            const variable = e.target.innerText;
            console.log(e.target.innerText)
            props.setName(variable)
             selectConversationIndex(index)
          }}
          >{conversation.recipients.map(r => r.name).join(', ')}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
