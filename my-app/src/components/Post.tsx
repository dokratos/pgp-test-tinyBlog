import React from 'react';
import { IPost } from '../types';

interface PostProps {
  post: IPost
}

const Post = ({post}: PostProps) => {

  return (
    <article className='flex flex-col mt-3'>
      <h1 className='mb-6 text-lg font-bold text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>{post.title}</h1>
      <p className='text-justify mx-1.5'>{post.body}</p>
      <div className='self-end mt-1'>
      { post.tags.map((item, i) =>
      <span key={i}>#{item}  </span>
       )}
      </div>
    </article>
  )
}

export default Post;
