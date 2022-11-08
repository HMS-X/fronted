import { useEffect } from "react";
import { Container } from "react-bootstrap";
import PostDetails from "../components/PostDetails";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../redux-store/actions";

function SinglePost() {
  let params = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetails(params.id));
  }, [params.id]);

  return (
    <Container className="single-post">
      <PostDetails />
    </Container>
  );
}
export default SinglePost;
