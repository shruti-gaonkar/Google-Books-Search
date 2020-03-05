import React from "react";
import { Card, Icon, CardTitle } from 'react-materialize';

function BookListContainer({ title,
    authors,
    description,
    imageLinks,
    link }) {
    return (
        <Card
            actions={[
                <a key={title} href={link}>{title}</a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={imageLinks}>{title}</CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
        >
            {description}
        </Card>
    );
}

export default BookListContainer;