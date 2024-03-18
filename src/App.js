import Fcomment from "./components/Fcomment";
import Comment from "./components/Comment";
import "./App.css";

function App() {
  return (
    <div className="ui container comments">
      <Fcomment
        author="TrungJkey"
        content="this is content"
        timeAgo="Today at 6:00pm"
      ></Fcomment>
      <Fcomment
        author="Linhbucu"
        content="this is content"
        timeAgo="Today at 7:00pm"
      ></Fcomment>
      <Fcomment
        author="Bakimochi"
        content="this is content"
        timeAgo="Today at 8:00pm"
      ></Fcomment>
      <Fcomment
        author="Ngozamate"
        content="this is content"
        timeAgo="Today at 9:00pm"
      ></Fcomment>
      <Fcomment
        author="Huykunichiwa"
        content="this is content"
        timeAgo="Today at 8:00pm"
      ></Fcomment>
      <h3>Class Component</h3>
      <Comment
        author="Huykunichiwa"
        content="this is content"
        timeAgo="Today at 8:00pm"
      ></Comment>
      <Comment
        author="trungkunichiwa"
        content="this is content"
        timeAgo="Today at 8:00pm"
      ></Comment>
    </div>
  );
}

export default App;
