import React from "react";
import { Card, CardTitle, Button } from 'react-materialize';

function BookList(props) {
    const { title, authors, description, image, link, handleBookSaveSubmit } = props;
    return (
        <Card id={`card_${title}`} key={title} className="blue-grey darken-2 white-text"
            actions={[
                <a key={title} href={link}>{title}</a>,
                <Button
                    id={title}
                    className="green"
                    node="button"
                    style={{ marginRight: '5px' }}
                    waves="light"
                    title={title}
                    authors={authors}
                    description={description}
                    image={image}
                    link={link}
                    onClick={handleBookSaveSubmit}
                >
                    Save
                </Button>
            ]}
            header={<CardTitle image={image === undefined
                ? ""
                : `${image.smallThumbnail} `} className="cardImg" />}
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