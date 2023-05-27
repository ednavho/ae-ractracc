const PostCard = ({ post }) => {
   return (
      <div className="post-card">
         <div>USERNAME</div>
         <h4>{post.author}</h4>
         <img src={post.download_url} alt={post.author} />
         <div>COMENT HERE (yoza spell so good)</div>
      </div>
   );
};
export default PostCard;
