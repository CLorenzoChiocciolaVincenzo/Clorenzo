interface Root {
    body: string,
    id: number, 
    title: string,
    reactions: {
        likes: number,
        dislikes: number
    },
}
export default Root;
  