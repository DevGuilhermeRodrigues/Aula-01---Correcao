import { Component } from "react";
import './style.css'
import { PostCard } from "./components/PostCard";


class App extends Component{
  state = {
    posts: []
  };

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse])

    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map( (post, index) => {
      return { ...post, cover: photosJson[index].url}
    })

    this.setState({ posts: postsAndPhotos })
  }

  render(){
    const { posts} = this.state;

    return (
        <section className="post-container">

         <div className="container-cards">
          {posts.map(post => (
            <PostCard 
              key={post.id}
              title={post.title}
              body={post.body}
              cover={post.cover}
              />
          ))}
        </div>

        </section>
    )
  }
};

export default App;