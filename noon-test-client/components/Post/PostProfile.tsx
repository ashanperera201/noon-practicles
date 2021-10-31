import React from 'react';
import Avatar from '@mui/material/Avatar';

const PostProfile = (props: any) => {

    const { post } = props;

    return (
        <div className="profile">
            <span className="profile--avatar">
                <Avatar alt="Remy Sharp" src={post.userProfilePic} />
            </span>
            <span className="profile--user-name">
                {post.userName}
            </span>
        </div>
    )
}

export default PostProfile;