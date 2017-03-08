import React, { PropTypes } from 'react'
import {Feed} from 'semantic-ui-react'
const Posts = ({posts}) => (
  <Feed >
    {posts.map((post, i) =>
      
      
            <Feed.Event key={i}>
                <Feed.Label className='left col-6 img-circle' image={post.image} />
                <Feed.Content className='left col-6'>
                    <Feed.Label>
                        <h3 className="blue">{post.name}</h3>
                    </Feed.Label>
                    <Feed.Summary>
                    {post.description}
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
       
    )}
     </Feed>

)

/*Posts.propTypes = {
  posts: PropTypes.array.isRequired
}*/

export default Posts
