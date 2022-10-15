import React, { useState, useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';
import translate from "translate";
import send from './send.png'
import './Bar.css'

import Collapse from 'react-bootstrap/Collapse';
import Navbar from './navbar';

export default function OpenConversation(props) {
  const [text, setText] = useState('')
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations()

  function handleSubmit(e) {
    e.preventDefault()
    var x = document.getElementById("text-area").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    console.log(from);
    console.log(to);
    translate.engine = "google"; // Or "yandex", "libre", "deepl"
    translate.key = process.env.GOOGLE_KEY;
    // translate.from = "kor";

    if (from == "english") {

      if (to == "japanese") {
        const word = translate(x, { to: "jpn" }).then((result) => {
          console.log(result);
          setText(result)
          result=result+":"+x 
          sendMessage(
            selectedConversation.recipients.map(r => r.id),
            result
          )

          setText('')


        });
      }

      if (to == "korean") {
        const word = translate(x, { to: "kor" }).then((result) => {
          console.log(result);
          setText(result)
          result=result+":"+x 
          sendMessage(
            selectedConversation.recipients.map(r => r.id),
            result
          )

          setText('')


        });

      }

    }

    else if (from == "japanese") {
      translate.from = "jpn";
      if (to == "english") {
        
        const word = translate(x, { to: "en" }).then((result) => {
          console.log(result);
          setText(result)
          result=result+":"+x 
          sendMessage(
            selectedConversation.recipients.map(r => r.id),
            result
          )

          setText('')


        });
      }

      if (to == "korean") {
        const word = translate(x, { to: "kor" }).then((result) => {
          console.log(result);
          setText(result)
          result=result+":"+x 
          sendMessage(
            selectedConversation.recipients.map(r => r.id),
            result
          )

          setText('')


        });

      }



    }




  }
  const [open, setOpen] = useState(false);


  return (


    <div className="d-flex flex-column flex-grow-1">
    <Navbar name = {props.name}/>
      

      <div className="flex-grow-1 overflow-auto background">
        <div className="d-flex flex-column align-items-start justify-content-end px-3" >
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            let arr=message.text.split(":")
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
              >
                <div
                  className={`rounded px-2 py-1 ${message.fromMe ? ' text-white' : 'border'}`} style={{backgroundColor:'#9B74B9'}}>
                  {arr[0]}
                  <p style={{color : "#"}} > ( {arr[1]} )</p>
                </div>
                <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                  {message.fromMe ? 'You' : message.senderName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              id='text-area'
              className='area'
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Type something here... "
              style={{ height: '45px', width: '50px', resize: 'none' }}
              
            />
          
       <svg xmlns="http://www.w3.org/2000/svg"  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} width="25" height="25" fill="#6C5984" class="bi bi-translate translate" viewBox="0 0 16 16">
  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
</svg>
      
      <Collapse in={open}>
        <div id="example-collapse-text">
          <label class='label'>From</label>
        <select class="form-select1" id='from' aria-label="Default select example">
        <option className='from' selected value="english">English</option>
        <option value="japanese">Japanese</option>


      </select>
      <br/>

      <label class='label'>To</label>
      <select class="form-select2" id='to' aria-label="Default select example">
        <option selected value="korean">Korean</option>
        <option value="english">English</option>
        <option value="japanese">Japanese</option>


      </select>

        
        </div>
      </Collapse>
          
            <InputGroup.Append>
              <Button className='send' type="submit"><img src={send} width='30px' height='30px'></img></Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}
