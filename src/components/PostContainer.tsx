import { useState } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../service/PostSercive";
import { PostItem } from "./PostItem";
import styles from "./PostItem.module.css";

export const PostContainer: React.FC = () => {
  const [limit, setLimit] = useState(100);
  const { data: posts, error, isLoading } = postAPI.useFetchAllQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation({});
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  if (isLoading) <h1>Loading.....</h1>;
  if (error) <div>Error load posts</div>;

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const hadleRemove = (post: IPost) => {
    deletePost(post);
  };

  const hadleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div>
        <div className={styles.btnCont}>
          <button className={styles.Addbtn} onClick={() => setLimit(limit + 1)}>
            add more post +1
          </button>
          <button
            className={styles.Addbtn}
            onClick={() => {
              handleCreate();
            }}
          >
            Add new post
          </button>
        </div>
        <div className={styles.post__container}>
          {posts &&
            posts.map((p) => (
              <PostItem
                remove={hadleRemove}
                update={hadleUpdate}
                key={p.id}
                post={p}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
