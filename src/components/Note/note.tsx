interface Root {
    body: string,
    id: number | string, 
    title: string,
    tags: string[],
    reactions: {
        likes: number,
        dislikes: number
    },
    views: number,
    userId: number
}
export default Root;
  