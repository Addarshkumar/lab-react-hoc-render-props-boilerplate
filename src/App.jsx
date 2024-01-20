import './App.css';
import HOC from './Hoc/HOC';
import Likeimagehoc from './Hoc/Likeimagehoc';
import Likeposthoc from './Hoc/Likeposthoc';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Likeimageprops from './RenderProps/Likeimageprops';
import LikePostprops from './RenderProps/Likepostprops';

function App() {

  // const ChildComponent= HOC(Likeimagehoc)
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
         <h2>HOC</h2>
       <div style={{display:"flex"}}>
        <Likeimagehoc />
        <Likeposthoc />
       </div> <br />
        <h2>Render props</h2>
       <div style={{display:"flex"}}>

        <Likeimageprops />
        <LikePostprops />
       </div>
         
      </div>
    </div>
  );
}

export default App;
