import React from "react";

interface IListElement {
    id: number,
    title: string,
    body: string,
}

function ListElement(props: IListElement) {
    return (
        <li>
            {props.id}
            {props.title}
            {props.body}
        </li>
    )
}

export default ListElement