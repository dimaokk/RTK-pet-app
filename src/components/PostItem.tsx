import React, { FC } from "react";
import { IPost } from "../models/IPost";
import styles from "./PostItem.module.css";

interface IPostItemeProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

export const PostItem: FC<IPostItemeProps> = ({ post, remove, update }) => {
  const hadleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post);
  };

  const hadleUpdate = (e: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };

  return (
    <div onClick={hadleUpdate} className={styles.post}>
      <div className={styles.title}>
        {post.id}-{post.title}
      </div>
      <div className={styles.desckription}>{post.body}</div>
      <button onClick={ hadleRemove} className={styles.btn}>
        Delete post
      </button>
    </div>
  );
};
