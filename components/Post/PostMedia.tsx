import React from "react";

interface PostMediaProps {
    photo: string[]; // Assuming photo is an array of strings representing image URLs
}

const PostMedia: React.FC<PostMediaProps> = ({ photo }) => {
    return (
        <div className="border-black border-b">
            {photo && photo.length > 0 && (
                <img src={photo[0]} className="w-full aspect-[2.39/1] object-cover p-5" alt="" />
            )}
        </div>
    );
};

export default PostMedia;
