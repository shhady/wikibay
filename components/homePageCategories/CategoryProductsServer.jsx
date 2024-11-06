

export default async function Page() {
    let data = await fetch(`/api/softwares/get-category/${selectedCategory}`)
    let posts = await data.json()
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }