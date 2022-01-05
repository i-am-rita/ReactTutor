import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  // const [name, setName] = useState('Sam')
  // const [age, setAge] = useState(20)
  // const handleNameChange = () => {
  // setName('Rita')
  // setAge(21)
  //   const [count, setCount] = useState(0)
  //   const [name, setName] = useState('Sam')
  const [blogs, setBlogs] = useState([
    { title: 'My Blog', body: 'my blog body', author: 'Sam', id: 1 },
    { title: 'My Blog', body: 'my blog body', author: 'Sam', id: 2 },
    { title: 'My Blog', body: 'my blog body', author: 'Sam', id: 3 },
  ])
  return (
    <div className="home">
      <BlogList blogs={blogs} />
      {/* <h   2>my count is {count}</h>
      <button onClick={() => setCount(count + 1)}>Click Me</button> */}
      {/* <h2>Homepage Content</h2> */}
      {/* <p>I am {name}</p>
      <button onClick={() => setName('Rita')}>Click Me</button> */}
    </div>
  )
}

export default Home
