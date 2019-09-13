import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const WarsCard = (props) => {
    return (
        <div>
            <Card key={props.id}>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>Gender: {props.sex}</CardSubtitle>
                    <CardSubtitle>Birth year:{props.born}</CardSubtitle>
                    <CardSubtitle>Height: {props.height}</CardSubtitle>
                    <CardSubtitle>Hair color:{props.hair}</CardSubtitle>
                    <CardSubtitle>Eye color:{props.eyes}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default WarsCard
