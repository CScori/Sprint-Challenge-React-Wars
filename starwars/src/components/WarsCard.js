import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';

const Sep = styled.div`
    height: 300px;
    width: 200px;
    margin-left: 35%;
    margin-bottom: 50px;
    padding-top: 10px;
    background: black;
    color: white;
    align-items: center;
    justify-content: space-between;
    text-size: 3rem;

`




const WarsCard = (props) => {
    return (
        <Sep>
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
        </Sep>
    )
}

export default WarsCard
