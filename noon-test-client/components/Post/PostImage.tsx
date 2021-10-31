import React from 'react';
import Icon from '@mui/material/Icon';

const PostImage = (props: any) => {

    const { post } = props;

    return (
        <div className="post-img">
            <img src={post.postPicture} />
            <div className="post-img--footer-content">
                <span className="text-content">
                    <span className="info-1">
                        <p>My New Lambo</p>
                    </span>
                    <span className="info-2">LMBO-100</span>
                </span>
                <span className="icon-content">
                    <Icon>favorite_border</Icon>
                </span>
            </div>
        </div>
    )
}

export default PostImage;