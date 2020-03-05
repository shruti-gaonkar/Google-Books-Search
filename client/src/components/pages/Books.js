import React, { Component } from "react";
import { Row, Col, CardPanel, TextInput, Card, Icon, Button } from 'react-materialize';
import "../../App.css";
class Books extends Component {
    state = {
        books =[]
    };

    render() {
        return (
            <Row>
                <Col m={12}>
                    <CardPanel className="grey lighten-2">
                        <h2 className="black-text center-align">
                            (React) Google Books Search
                        </h2>
                        <h4 className="black-text center-align">Search for and Save Books of Interest</h4>
                    </CardPanel>
                </Col>

                <Col m={12}>
                    <Card className="grey lighten-2 clearfix">
                        <form>
                            <TextInput label="Search for books" />
                            <Button
                                node="button"
                                type="submit"
                                waves="light"
                                className="indigo darken-4 right"
                            >
                                Submit
                            <Icon right>
                                    send
                            </Icon>
                            </Button>&nbsp;
                        </form>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Books;