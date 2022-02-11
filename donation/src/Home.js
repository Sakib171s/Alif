import React, {useContext} from 'react'
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from './Auth';
import PostCard from './PostCard';
import PostForm from './PostForm';
import { FETCH_POSTS_QUERY } from './graphql'


 function Home() {
     const { user } = useContext(AuthContext);
    const {
        loading,
        data: { getPosts: posts }
    } = useQuery(FETCH_POSTS_QUERY);


     return (
        <Grid celled='internally'>
            <Grid.Row className = "page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>


        <Grid.Row>
            <Grid.Column width={3}>
                <p>Functionalities</p>
            </Grid.Column>
            <Grid.Column width={10}>
                <Grid.Row>
                    {user && (
                        <Grid.Column>
                            <PostForm />
                        </Grid.Column>
                    )}
                { loading ? (
                    <h1>Loading Posts...</h1>
                ) : (
                    <Transition.Group>
                        {posts && posts.map(post => (
                        <Grid.Column key = {post.id}>
                            <PostCard post = { post } />
                        </Grid.Column>
                    ))}
                    </Transition.Group>
                )}
            </Grid.Row>
          </Grid.Column>
        <Grid.Column width={3}>
            <p>Widget</p>
        </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}

export default Home;