import React from "react";
import { Card, CardTitle, Button } from 'react-materialize';

function BookList(props) {
    const { index, title, authors, description, image, link, handleBookSaveSubmit, saved, handleBookDelete } = props;
    const bookData = {
        title: title,
        authors: authors,
        description: description,
        image_link: image,
        link: link
    }

    const cardId = `card_${index}`;
    return (
        <Card id={cardId} key={title} className="blue-grey darken-2 white-text"
            actions={[
                <div className="left"><a key={index} href={link}>{title}</a></div>,
                <div className="right">
                    {(saved == "1") ?
                        (< Button
                            id={title}
                            className="red"
                            node="button"
                            style={{ marginRight: '5px' }}
                            waves="light"
                            onClick={() => handleBookDelete(cardId, index)}
                        >
                            Delete
                    </Button>)
                        :
                        (< Button
                            id={title}
                            className="green"
                            node="button"
                            style={{ marginRight: '5px' }}
                            waves="light"
                            onClick={() => handleBookSaveSubmit(cardId, bookData)}
                        >
                            Save
                    </Button>)}
                </div>
            ]}
            header={< CardTitle image={image === undefined
                ? ""
                : `${image} `} className="cardImg" />}
            horizontal
        >
            {description}

            {
                (authors == undefined) ? "" :
                    authors.map(val => {
                        return (<p><i>{val}</i></p>)
                    })
            }

        </Card >
    );
}

export default BookList;