import React from "react";

interface IListElement {
    body: string,
    id: number, 
    title: string,
    tags: string[],
    reactions: {
        likes: number,
        dislikes: number
    },
    views: number,
    userId: number
}

function ListElement(props: IListElement) {
    return (
        <li>
            {props.id}
            {props.title}
            {props.body}
            {props.tags}
            {props.reactions.likes}
            {props.reactions.dislikes}
            {props.views}
            {props.userId}
        </li>
    )
}

export default ListElement