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
                this.setState({ books: res.data })
            })

            .catch(err => console.log(err));
    }

    handleBookSaveSubmit = event => {
        const attr = event.target.attributes;
        const bookData = {
            title: attr.getNamedItem('title').value,
            authors: attr.getNamedItem('authors').value,
            description: attr.getNamedItem('description').value,
            image: attr.getNamedItem('image').value,
            link: attr.getNamedItem('link').value
        }
        API.saveBook(bookData).then(function () {
            document.getElementById("card_" + bookData.title).remove();
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
                                                title={book.title}
                                                authors={book.authors}
                                                description={book.description}
                                                image={book.imageLinks}
                                                link={book.previewLink}
                                                handleBookSaveSubmit={this.handleBookSaveSubmit}
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