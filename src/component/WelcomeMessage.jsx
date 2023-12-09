const WelcomeMessage = ({onGetPostsClick}) => {
  return (

  <center>
  <h1 className="welcomemessage">There are no posts</h1>
  <button type="button" 
  onClick={onGetPostsClick}
  className="btn btn-primary">
  Get Posts from Server
  </button>
  </center>
  );
};

export default WelcomeMessage;