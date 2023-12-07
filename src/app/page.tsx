
"use client"; // This is a client component


import{BsLinkedin, BsGithub} from 'react-icons/bs';
import{BiLogoGmail} from 'react-icons/bi';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';


export default function Home() {
  // NOTE: if using fullpage extensions/plugins put them here and pass it as props
  // const pluginWrapper = () => {
  //   require('./statics/fullpage.scrollHorizontally.min');
  // };

  return (
    <ReactFullpage
      //pluginWrapper = {pluginWrapper}
      credits={{enabled: true, label: 'Made with fullpage.js', position: 'right'}}
      //fullpage options
      licenseKey = {'gplv3-license'}
      scrollingSpeed = {1000} /* Options here */
      scrollHorizontally = {true}  /* Because we are using the extension */
      scrollHorizontallyKey = {'YOUR KEY HERE'}
  
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
        {/* Section1 Introduction */}
          <section className="section min-h-screen homepage">
            <nav className="pt-10 mb-10 flex justify-center">
              <ul className="text-black flex items-center gap-10">
                <li><a href= "#page-about">ABOUT</a></li>
                <li><a href= "#page-work">WORK</a></li>
                <li><a href= "#page-contact">CONTACT</a></li>
              </ul>
            </nav>
            <div className="flex justify-center">
              <h1 className="text-black text-2xl font-gideon">SABRINA ACCIME</h1>
            </div>
          
            <div className=" mt-12 p-10">
              <h2 className= "text-black italic text-5xl py-2 md:text-6xl"> designer;</h2>
              <h3 className="text-black text-5xl py-2 md:text-3xl">developer</h3>
              <p className= "text-black text-md py-5 leading-8 md:text-xl max-w-xl mx-auto">Front-end developer with a passion for storytelling using art and techonology.</p>
            </div>
          </section>
          {/* Section2 About*/}
          <section className="section page about" id="page-about">
            <h3 className="abouttitle text-black text-3xl mt-6 py-1 flex justify-center"> about.</h3>
            <div className="aboutdescription">
              <p className="text-black text-md py-2 leading-8 text-gray-80">Art and techonology has always fasinated me. 
                I grew up participating in many creative outlets such as dance, theater, 
                and music. When it came to pursing a career after college, I decided to be a software engineer.  
              </p>
              <p className="text-black text-md py-2 leading-8 text-gray-80">I sought out to find spaces that allow me to learn more when it comes to new technologies and 
                creative coding. But more importantly, I wanted to design or build ideas and products that are real 
                and that mattered. 
              </p>
            </div>
            <div className="aboutdetails">
              <h3 className="aboutdevelopment text-black mt-6 py-1"> FRONT-END DEVELOPMENT</h3>
              <div className="developmenttags">
                <span>HTML</span>
                <span>CSS</span>
                <span>SASS</span>
                <span>React</span>
                <span>Angular</span>
                <span>Python</span>
                <span>Javascript</span>
                <span>SQL</span>
                <span>Git</span>
              </div> 
              <h3 className="aboutdesign text-black mt-6 py-1"> DESIGN</h3> 
              <div className="designtags">
                <span>Figma</span>
                <span>UI/UX</span>
                <span>Design Systems</span>
              </div>  
            </div>
          </section>
          {/* Section3 Work/Projects */}
          <section className="section page work" id="page-work">
            <div>
              <h3 className="worktitle text-black text-3xl mt-10  py-1 flex justify-center"> work.</h3>
              <div className="workdescription">
                <p className="text-black text-md py-2 leading-8 text-gray-80">I'm always in a state of practice. With digital desgin and development constantly evolving, 
                I remind myself that I too must not be complacent with what I know or can do. 
                This is a showcase of my best work in a variety of disciplines 
                including Web Design, No-code development and Project Management.
                </p>
              </div>
              <div className="projectlist text-2xl flex flex-col items-center mt-10 ">
                  <a href="">bycatch</a>
                  <a href="">teachmideast</a>
                  <a href="">bettercarenetwork</a>
                  <a href="">personalbranding</a>
              </div>
            </div>
          </section>
          {/* Work: Bycatch Landscape */}
          <section className="section bycatch">
            <div className= "slide"></div>
            <div className= "slide"></div>

          </section>
          {/* Work: Teachmideast Landscape */}
          <section className="section teachmideast">
            <div className= "slide"></div>
            <div className= "slide"></div>

          </section>
          {/* Work: Bettercarenetwork Landscape */}
          <section className="section bcn">
            <div className= "slide"></div>
            <div className= "slide"></div>
          </section>
          {/* Work: Personalbranding Landscape */}
          <section className="section sabbranding">
            <div className= "slide"></div>
            <div className= "slide"></div>

          </section>
          {/* Section4 Contact */}
          <section className="section page contact" id="page-contact">
            <div>
              <h3 className="contacttitle text-black text-3xl mt-10 py-1 flex justify-center"> contact.</h3>
              <div className="contactdescription">
                <p className= "text-black text-md py-5 leading-8 md:text-xl max-w-xl mx-auto">If you have any inquiries or you would like to connect please reach out to any of the following:</p>
              </div>
            </div>
            <div className="contactdetails text-black text-5xl flex justify-center gap-16 py-3 mb-10">
              <a href="mailto:sabrina.accime@gmail.com"><BiLogoGmail/></a>
              <a href="https://linkedin.com/in/sabrina-accime"><BsLinkedin/></a>
              <a href="https://github.com/sabrinaaccime"><BsGithub/></a>
            </div>
          </section>
          {/* Section5 Footer */}
          <section className="footer flex justify-between" >
            <span className="sabrina-footer text-black">SABRINA ACCIME</span>
            <span className="year text-black ">2023</span>
          </section>
          </ReactFullpage.Wrapper>
      );
    }}
  />
  )
}