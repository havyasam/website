import '../css/Project.css'
function Project(){
    return(
        <>
        <h1 className='skills'>project</h1>
        <div className="projects">
            <div className="prjct">
            <h3>project 1</h3>
                <img className="project-img"src="https://i.pinimg.com/736x/a0/01/13/a0011347843250d73b8174f15aef7fdf.jpg"></img>
                <p className='project-para'>This page is built using html css and javascripts and some libraries</p>
                <span>click here</span>
                
            </div>
            <div  className="prjct">
            <h3>projecct 2</h3> 
            <img className="project-img"src="https://miro.medium.com/v2/resize:fit:1400/1*H4-ZhxU4Js8LFg4drtWUtg.png"></img>
            <p className='project-para'>This page is built using html css and javascripts and some libraries</p>
            <span>click here</span>
                
            </div>
            <div  className="prjct">
            <h3>project 3</h3>     
            <img className="project-img"src="data:image/png;base64,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"></img>
              <p className='project-para'>This page is built using html css and javascripts and some libraries</p>
              <span>click here</span>
                
            </div>

        </div>
        </>

    )
}
export default Project