import React from 'react';

import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import './deletetodomodal.css'


export default (props) => (
  <Modal className='deleteModal'
    trigger={ <Button color='red' content='Delete' size='small' animated='fade'><Button.Content visible>Delete</Button.Content>
    <Button.Content hidden>You Sure?</Button.Content></Button> }
    basic
    style={{ width: '450px'}}
  >
    <Header icon='archive' content='Are you sure you want to delete this event?'/>
    <Modal.Content>
      <p>Are you sure you want to delete this event? All users will be unsubscribed from the event! Are you sure?</p>
      <p>{props.text}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        fluid
        negative
        onClick={ () => props.handleDelete(props.id)}
      >
        <Icon name='remove'/> Are you sure you want to delete?
      </Button>
    </Modal.Actions>
  </Modal>
);
