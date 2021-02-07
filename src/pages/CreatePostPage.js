function CreatePostPage() {
  return (
    <div>
      <h1>Create a Post</h1>

      <form action="">
        <label htmlFor="post-title">Title: </label>
        <input type="text" name="post-title"/>
      </form>
    </div>
  );
}

export default CreatePostPage;