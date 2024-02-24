import './index.css'

const blogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="flex-container">
        <h1 className="title">{title}</h1>
        <p className="description">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default blogItem
