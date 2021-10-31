import React, { Fragment } from 'react';
import Icon from '@mui/material/Icon';

const PostLike = (props: any) => {

    const { post } = props;

    return (
        <Fragment>
            <span className="post-information__likes">
                <Icon>favorite</Icon>
                <span className="post-information__likes--count">32 Likes</span>
            </span>
        </Fragment>
    );
}

export default PostLike;