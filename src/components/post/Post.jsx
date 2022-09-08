import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
         src="https://images.unsplash.com/photo-1613484719545-4f876f1097c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ2dpbmclMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
         <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
         </div>
         <p className="postDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Soluta harum vel molestias alias inventore quam ullam, 
            quasi quas nemo sit corporis ea, sint quisquam? Quod 
            magni fugit commodi non maiores labore necessitatibus 
            ad quam iure quis nihil, modi tempore a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Soluta harum vel molestias alias inventore quam ullam, 
            quasi quas nemo sit corporis ea, sint quisquam? Quod 
            magni fugit commodi non maiores labore necessitatibus 
            ad quam iure quis nihil, modi tempore a.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Soluta harum vel molestias alias inventore quam ullam, 
            quasi quas nemo sit corporis ea, sint quisquam? Quod 
            magni fugit commodi non maiores labore necessitatibus 
            ad quam iure quis nihil, modi tempore a.
         </p>
        </div>
  )
}
