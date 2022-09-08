import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className="singlePostImg"/>
            <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet 
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
            
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b> Himanshu </b> </span>
                <span className="singlePostDate">1 hour ago </span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Alias placeat quidem magnam commodi ratione iusto quod
                  quisquam sequi delectus, reiciendis ipsam inventore 
                  hic quaerat quia error a exercitationem distinctio aliquam?
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Alias placeat quidem magnam commodi ratione iusto quod
                  quisquam sequi delectus, reiciendis ipsam inventore 
                  hic quaerat quia error a exercitationem distinctio aliquam?
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Alias placeat quidem magnam commodi ratione iusto quod
                  quisquam sequi delectus, reiciendis ipsam inventore 
                  hic quaerat quia error a exercitationem distinctio aliquam?
            </p>
        </div>
        </div>
  )
}
