import React, { Component } from "react";
import { Row, Col, CardPanel, TextInput, Card, Icon, Button } from 'react-materialize';
import API from "../utils/API";
import "../App.css";
import BookList from "../components/BookList";
class Books extends Component {
    state = {
        books: [],
        bookSearch: ''
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getGoogleBooks(this.state.bookSearch || 'novel')
            .then(res => {
                //console.log(res.data.items);
                this.setState({ books: res.data.items })
            })

            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        this.loadBooks();
    };

    handleBookSaveSubmit = (index, bookData) => {
        /*const attr = event.target.attributes;
        const bookData = {
            title: attr.getNamedItem('title').value,
            authors: attr.getNamedItem('authors').value,
            description: attr.getNamedItem('description').value,
            image: attr.getNamedItem('image').value,
            link: attr.getNamedItem('link').value
        }*/
        //console.log(bookData);
        API.saveBook(bookData).then(function () {
            document.getElementById(index).remove();
        });
    };

    render() {
        return (
            <>
                <Row>
                    <Col m={12}>
                        <CardPanel className="grey lighten-2">
                            <h2 className="black-text center-align">
                                (React) Google Books Search
                        </h2>
                            <h4 className="black-text center-align">Search for and Save Books of Interest</h4>
                        </CardPanel>
                    </Col>
                </Row>
                <Row>
                    <Col m={12}>
                        <Card className="grey lighten-2 clearfix">
                            <form>
                                <TextInput label="Search for books" name="bookSearch" value={this.state.bookSearch} onChange={this.handleInputChange} />
                                <Button
                                    node="button"
                                    type="submit"
                                    waves="light"
                                    className="indigo darken-4 right"
                                    onClick={this.handleFormSubmit}
                                >
                                    Submit
                            <Icon right>
                                        send
                            </Icon>
                                </Button>&nbsp;
                        </form>
                        </Card>
                    </Col>
                </Row >
                <Row>
                    <Col m={12}>
                        {
                            !this.state.books.length ? (
                                <h1 className="text-center">No Books to Display</h1>
                            ) : (
                                    this.state.books.map((book, i) => {
                                        return (
                                            <BookList
                                                index={(i + 1)}
                                                title={book.volumeInfo.title}
                                                authors={book.volumeInfo.authors}
                                                description={book.volumeInfo.description}
                                                image={book.volumeInfo.imageLinks}
                                                link={book.volumeInfo.previewLink}
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