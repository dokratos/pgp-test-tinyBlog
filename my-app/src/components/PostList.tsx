import React, {useState, useEffect} from 'react'
import TagSection from './TagSection';
import { IPost, ITags } from '../types'

const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [postLists, setPostLists] = useState<ITags[]>([]);

  useEffect(() => {
    const getData = async () => {
      const dummyData = await fetch('https://dummyjson.com/posts');
      const jsonData = await dummyData.json();
      setPosts(jsonData.posts);
    }
    getData();
  }, []);

  useEffect(() => {
    const crime = posts.filter(post => post.tags.includes('crime'))
    const love = posts.filter(post => post.tags.includes('love'))
    const mystery= posts.filter(post => post.tags.includes('mystery'))
    const fiction = posts.filter(post => post.tags.includes('fiction'))
    const history = posts.filter(post => post.tags.includes('history'))

    setPostLists([{
      name: 'Crime',
      posts: crime,
    },
    {
      name: 'Love',
      posts: love
    },
    {
      name: 'Mystery',
      posts: mystery
    },
    {
      name: 'Fiction',
      posts: fiction
    },
    {
      name: 'History',
      posts: history
    }
  
  ])
  }, [posts])

  return (
    <main className='lg:mx-60 md: mx-20'>
      {postLists.map((tag, i) => 
        <TagSection 
            name={tag.name}
            postList={tag.posts}
            key={i}
          />
      )}
    </main>
  )
}

export default PostList;
