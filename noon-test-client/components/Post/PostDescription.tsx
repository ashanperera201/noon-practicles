import React, { Fragment, useState } from 'react';

const PostDescription = (props: any) => {

    const { post } = props;

    return (
        <Fragment>
            <span className="post-information__description">
                <span className="desc">{post.postDescription}</span>
                <span className="hashtags">{post.postHashtag}</span>
            </span>

            <span className="post-information__comments">
                <span className="desc">View 12 Comments</span>
            </span>
        </Fragment>
    )
}

export default PostDescription;