import React from "react";
import { Card, CardTitle, Button } from 'react-materialize';

function BookList(props) {
    const { title, authors, description, imageLinks, link, handleBookSaveSubmit } = props;
    return (
        <Card className="blue-grey darken-2 white-text"
            actions={[
                <a key={title} href={link}>{title}</a>,
                <Button
                    id={title}
                    className="green"
                    node="button"
                    style={{ marginRight: '5px' }}
                    waves="light"
                    data-book={props}
                    onClick={handleBookSaveSubmit}
                >
                    Save
                </Button>
            ]}
            header={<CardTitle image={imageLinks === undefined
                ? ""
                : `${imageLinks.smallThumbnail}`} className="cardImg" />}
            horizontal
        >
            {description}

            {
                (authors == undefined) ? "" :
                    authors.map(val => {
                        return (<p><i>{val}</i></p>)
                    })
            }

        </Card>
    );
}

export default BookList;