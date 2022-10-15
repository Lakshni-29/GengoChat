import React from 'react'
import { useState} from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()
  const [name,setName] = useState();

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={id} setName={setName} />
      {selectedConversation && <OpenConversation name = {name}/>}
    </div>
  )
}
