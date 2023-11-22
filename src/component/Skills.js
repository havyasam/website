import "../css/Skills.css";
import Card from "./Card";
function Skills() {

  const skilla=[
    {
      id:1,
      H:"HTML",
      I:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
    },
    {
      id:2,
      H:"CSS",
      I:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
    },
    {
      id:3,
      H:"JAVASCRIPT",
      I:"https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_1280.png"
    },
    
  ]
  const skillb=[
    {
      id:4,
      H:"REACT",
      I:"https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
    },
    {
      id:5,
      H:"NODEJS",
      I:"https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png"
    },
    {
      id:6,
      H:"DATABASE",
      I:"https://cdn.pixabay.com/photo/2013/07/12/17/22/database-152091_1280.png"
    }
  ]


  return (
    <>
      <h1 className="skills">Skills</h1>
      <div className="grids">
      <div className="card-flex"> 
      {
        
        skilla.map((item)=>(
          
          <Card Skills={item}/>
        
        ))
      
      }
        </div>
        <div className="card-flex"> 
      {
        
        skillb.map((item)=>(
          
          <Card Skills={item}/>
        
        ))
      
      }
        </div>

      
      {/* <div className="skill1">
        <div className="sklls">
          <h2>HTML</h2>
          <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"></img>
        </div>
        <div className="sklls">
          <h2>CSS</h2>
          <img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png'></img>
        </div>
        <div className="sklls">
          <h2>JAVASCRIPT</h2>
          <img src="https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_1280.png"></img>
        </div>
      </div>
      <div className="skill2">
        <div className="sklls">
          <h2>REACTJS</h2>
          <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"></img>
        </div>
        <div className="sklls">
          <h2>NODEJS</h2>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png"></img>
        </div>
        <div className="sklls">
          <h2>DATA BASE</h2>
          <img src="https://cdn.pixabay.com/photo/2013/07/12/17/22/database-152091_1280.png"></img>
        </div> */}
      {/* </div> */}
      </div>
     
      
    </>
    
  );
}
export default Skills;
