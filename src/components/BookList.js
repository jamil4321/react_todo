import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';
import {getItems,deleteItems} from '../ReduxApi/action/itemAction';
import PropTypes from 'prop-types';
export class BookList extends Component {
    componentDidMount(){
        this.props.getItems();
    }
    onDeleteButton= id=>{
        this.props.deleteItems(id)
    }
    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {
                            items.map(({ id, title, author }) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteButton.bind(this,id)}
                                        >&times;</Button>
                                        <span className="ml-3">
                                            Book Title:
                                       <strong>{title}</strong>
                                            <span className="ml-5">
                                                Book Author:
                                           <strong>{author}</strong>
                                            </span>
                                        </span>
                                        {/* <Button 
                                         className="remove-btn"
                                         color="sucsess"
                                         size="sm"
                                         onClick={console.log(id)}
                                        >Update</Button> */}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
BookList.propTypes={
    getItems:PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) =>({
    item:state.item
})
export default connect(mapStateToProps,{getItems,deleteItems})(BookList);
