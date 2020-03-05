import React from "react";
import { Card, CardTitle, Button } from 'react-materialize';

function BookListContainer({ title,
    authors,
    description,
    imageLinks,
    link }) {
    return (
        <Card className="blue-grey darken-2 white-text"
            actions={[
                <a key={title} href={link}>{title}</a>
            ]}
            header={<CardTitle image={imageLinks === undefined
                ? ""
                : `${imageLinks.smallThumbnail}`} className="cardImg" />}
            horizontal
        >
            {description}
        </Card>
    );
}

export default BookListContainer;