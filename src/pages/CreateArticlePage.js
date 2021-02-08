function CreateArticlePage() {
  return (
    <div>
      <h1>Create a Article</h1>

      <form action="">
        <label htmlFor="article-title">Title: </label>
        <input type="text" name="article-title"/>
      </form>
    </div>
  );
}

export default CreateArticlePage;