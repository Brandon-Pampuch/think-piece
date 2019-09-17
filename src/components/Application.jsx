import React, { Component } from 'react';
import { firestore } from '../firebase'
import Posts from './Posts';
import { collectIdsAndDocs } from '../utilities';

class Application extends Component {
  state = {
    posts: [],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    // const snapshot = await firestore.collection('posts').get()
    // const posts = snapshot.docs.map(collectIdsAndDocs)  
    // this.setState({ posts })
    this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs)
      this.setState({ posts })
    })
    // returns a function to unsubscribe and unmount, onSnapshot will put a listener on and listen for updates
  }

  componentWillUnmount = () => {
    this.unsubscribe()
  }


  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
