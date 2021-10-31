import React, { Fragment } from 'react';
import PostProfile from './PostProfile';
import PostImage from './PostImage';
import PostLike from './PostLike';
import PostDescription from './PostDescription';

const Post = (props: any) => {

    const { styles, post } = props;

    // ISSUE !! : THE PROP CHAIN ISSUE IS HERE:
    // IMPROVEMENT TO DO : THE PERMANENT SOLUTION IS TO USING THE REDUX.

    return (
        <Fragment>
            <div className="post-wrapper" style={styles}>
                <PostProfile post={post} />
                <PostImage post={post} />
            </div>
            <div className="post-information">
                <PostLike post={post} />
                <PostDescription post={post} />
            </div>
        </Fragment>
    );
}

export default Post;