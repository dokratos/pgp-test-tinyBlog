import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';

function App() {
  return (
    <>
    <header className='lg: text-center'>
      <h1 className='mb-8 text-7xl font-extrabold leading-none tracking-tight text-gray-900 md:text-7xl lg:text-7xl dark:text-white'><span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Tiny</span>Blog</h1>
    </header>
    <PostList />
    </>
  );
}

export default App;
