import React from "react";

const PostMedia = ({photo}) => {
    return(
        <div className="border-black border-b">
            {photo && photo.length > 0 && (
                <img src={photo[0]} className="w-full aspect-[2.39/1] object-cover p-5" alt="" />
            )}
        </div>
    )
}
export default PostMedia