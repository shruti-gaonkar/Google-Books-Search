import React, { Component } from "react";
import { Row, Col } from 'react-materialize';
import API from "../utils/API";
import "../App.css";
import BookList from "../components/BookList";
class Books extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log(res.data);
                this.setState({ books: res.data })
            })

            .catch(err => console.log(err));
    }

    handleBookDelete = (index, _id) => {
        API.deleteBook(_id).then(function () {
            document.getElementById(index).remove();
        });
    };

    render() {
        return (
            <>
                <Row>
                    <Col m={12}>
                        {
                            !this.state.books.length ? (
                                <h1 className="text-center">No Books to Display</h1>
                            ) : (
                                    this.state.books.map(book => {
                                        return (
                                            <BookList
                                                index={book._id}
                                                title={book.title}
                                                authors={book.authors}
                                                description={book.description}
                                                image={book.image_link}
                                                link={book.link}
                                                handleBookSaveSubmit=''
                                                saved="1"
                                                handleBookDelete={this.handleBookDelete}
                                            />
                                        );
                                    })
                                )
                        }
                    </Col>
                </Row>
            </>
        );
    }
}

export default Books;