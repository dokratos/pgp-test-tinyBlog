export interface IPost{
  id: number,
  title: string,
  body: string,
  tags: string[]
}

export interface ITags{
  name: string,
  posts: IPost[]
}