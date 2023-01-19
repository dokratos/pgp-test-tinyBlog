import React, {useState} from 'react';
import Post from './Post';
import { IPost } from '../types';

interface PostSectionProps {
  postList: IPost[]
  name: string,
}

const PostSection = ({postList, name} : PostSectionProps) => {
  const [drop, setDrop] = useState(false)

  const handleDrop = (e: React.MouseEvent) => {
    e.preventDefault();
    setDrop(!drop)
  }

  return (
    <section>
      <h1 onClick={handleDrop}
      className='inline-flex items-center justify-center px-4 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mb-2'
      >{name.toUpperCase()}</h1>
        { drop &&
        postList.map(post => (
        <Post 
        key={post.id}
        post={post}
        />
      ))}
    </section>
  )
}

export default PostSection;