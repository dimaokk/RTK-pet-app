import { useState } from "react";
import { postAPI } from "../service/PostSercive";
import { PostItem } from "./PostItem";
import styles from "./PostItem.module.css";

export const PostContainer: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const { data: posts, error, isLoading } = postAPI.useFetchAllQuery(limit);

  if (isLoading) <h1>Loading.....</h1>;
  if (error) <div>Error load posts</div>;

  return (
    <div>
      <div>
        <button className={styles.btn} onClick={() => setLimit(limit + 1)}>
          add more post +1
        </button>
        <div className={styles.post__container}>
          {posts && posts.map((p) => <PostItem key={p.id} post={p} />)}
        </div>
      </div>
    </div>
  );
};
