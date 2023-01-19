import React, {useState, useEffect} from 'react'
import PostSection from './PostSection';
import { IPost } from '../types'

const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const genre = ['Crime', 'Love', 'Mystery', 'Fiction', 'History'];

  useEffect(() => {
    const getData = async () => {
      const dummyData = await fetch('https://dummyjson.com/posts');
      const jsonData = await dummyData.json();
      setPosts(jsonData.posts);
    }
    getData();
  }, []);

  return (
    <main className='lg:mx-60 md: mx-20'>
      {genre.map((category, i) => (
        <PostSection 
        key={i}
        postList={posts.filter(post => post.tags.includes(category.toLowerCase()))}
        name={category}
        />
      ))}
    </main> 
  )
}

export default PostList;
