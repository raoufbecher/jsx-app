import Image from "./image/imageInSrc.jpg";
import Video from './ThePursuit.mp4';
import './style.css'
import './App.css';
function App() {
  return (
   
    <div className="App">
   <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Will Smith</h1>

<br/>
<img style={{width:'300px',height:"300px"}} src={Image}alt=""/>
<br/>
<h1 >Best movies of will smith</h1>
 <p>The pursuit of happyness </p>
<br/>

<img style={{width:'300px',height:"300px"}} src="/image/imageInPublic.JPEG"alt="imageInPublic"/>


</div>
<h1 >Best scene of the movie</h1>
<video style = {{width:'320px' , height:'240px' }} src={Video} controls></video>
    </div>


  );
  
}

export default App;