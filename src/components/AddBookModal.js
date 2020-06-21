import React, { Component } from 'react';
import { Button, Modal, ModalBody, Form, FormGroup, Label, Input, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { addItems } from '../ReduxApi/action/itemAction'

export class AddBookModal extends Component {
    state = {
        modal: false,
        title: '',
        author: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const newItem = {
            id: Math.round(Math.random()*1000000000000000+1),
            title:this.state.title,
            author:this.state.author
        }
        this.props.addItems(newItem);
        this.toggle();
    }
    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add Item</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader
                        toggle={this.toggle}
                    >
                        Add Book Item
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="title">Add Title</Label>
                                <Input type="text" name="title" id="title" placeholder="Enter Book Title" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="author">Add Author</Label>
                                <Input type="text" name="author" id="author" placeholder="Enter Book Author Name" onChange={this.onChange} />
                            </FormGroup>
                            <Button
                                color="dark"
                                style={{ marginBottom: '2rem' }}
                                block
                            >Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps =state=>({
    item:state.item
})
export default connect(mapStateToProps,{addItems})(AddBookModal)
