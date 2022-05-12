import { FC } from "react";
import { IPost } from "../models/IPost";
import styles from "./PostItem.module.css";

interface IPostItemeProps {
  post: IPost;
}

export const PostItem: FC<IPostItemeProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.title}>
        {post.id}-{post.title}
      </div>
      <div className={styles.desckription}>{post.body}</div>
      <button className={styles.btn}>Delete post</button>
    </div>
  );
};
