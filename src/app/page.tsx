
"use client"; // This is a client component


import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { montaga, montserrat } from '@/app/ui/fonts';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import projects from './projects.json';
import { dir } from 'console';

export default function Home() {

  const onLeave = (origin: Item, destination: Item, direction: string, trigger: any) => {
    const navLinks = document.querySelectorAll('header nav a');
    const logo = document.querySelector('.logo');
    console.log(origin, destination);

    navLinks.forEach(links => {
        console.log(destination.item.id, links.id);
        if (destination.item.id.includes(links.id)) {
          links.classList.add('active');
          console.log(`page ${links.id} is active`);
        } else {
          links.classList.remove('active');
        }
    });

    if (destination.item.id) {
      logo?.classList.add('hidd');
    } else {
      logo?.classList.remove('hidd');
    }



    return true;
  }

  return (
    <div>
      <header className=" md:flex md:flex-row-reverse md:justify-between md:px-8">
        <nav className="pt-10 mb-10 flex justify-center md:pt-0">
          <ul className="text-white flex items-center gap-10">
            <li><a href="#page-about" id="about" className="about">ABOUT</a></li>
            <li><a href="#page-work" id="work" className="work">WORK</a></li>
            <li><a href="#page-contact" id="contact" className="contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className='logo flex justify-center'>
          <div className="sabrina-accime text-white text-2xl font-gideon" id="logo">SABRINA ACCIME</div>
        </div>
      </header>
      <ReactFullpage
        credits={{ enabled: true, label: 'Made with fullpage.js', position: 'right' }}
        licenseKey={'gplv3-license'}
        scrollingSpeed={1000}
        scrollHorizontally={true}
        scrollHorizontallyKey={'YOUR KEY HERE'}
        sectionsColor={['black', 'black', 'black', '#005288', '#c74711', 'black']}
        slidesNavigation={true}
        slidesNavPosition={'bottom'}
        css3={true}
        offsetSections={false}
        onLeave={onLeave}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {/* Section1 Introduction */}
              <section className="section min-h-screen homepage">
                <div className="mt-12 p-10">
                  <div className="homepagetitle md:ml-56 md:mt-20">
                    <h2 className="text-white italic text-5xl py-2 md:text-6xl"> designer;</h2>
                    <h3 className={`${montaga.className} text-white text-5xl py-2 md:text-6xl`}>developer</h3>
                  </div>
                  <div className="homepagedescription md:ml-72 md:mt-10">
                    <p className={`${montserrat.className} text-white block ms-px me-px text-md leading-8 max-w-xl mx-auto md:text-3xl`}>Front-end developer base in Seattle, WA with a passion for storytelling using art and techonology.</p>
                  </div>
                </div>
              </section>
              {/* Section2 About */}
              <section className="section page about" id="page-about">
                <h3 className={`${montaga.className} abouttitle text-white text-3xl mt-6 py-1 flex justify-center md:text-4xl`}> about.</h3>
                <div className="aboutcontent md:w-3/4 md:gap-14 md:mt-16 md:mx-auto md:flex">
                  <div className="aboutdescription block mx-8 mt-8 md:mx-0 md:mt-0">
                    <p className={`${montserrat.className} text-white text-md py-2 leading-8 text-gray-80 md:text-xl`}>Art and techonology has always fasinated me.
                      I grew up participating in many creative outlets such as dance, theater,
                      and music. When it came to pursing a career after college, I decided to be a software engineer.
                    </p>
                    <p className={`${montserrat.className} text-white text-md py-2 leading-8 text-gray-80 md:text-xl`}>I sought out to find spaces that allow me to learn more when it comes to new technologies and
                      creative coding. But more importantly, I wanted to design or build ideas and products that are real
                      and that mattered.
                    </p>
                  </div>
                  <div className="aboutdetails mx-8 mt-8 md:mx-0 md:mt-0 md:shrink-0 md:w-1/3">
                    <h3 className={`${montserrat.className} aboutdevelopment text-white text-sm mt-6 py-1 md:text-l md:mt-auto`}> FRONT-END DEVELOPMENT</h3>
                    <div className={`${montserrat.className} developmenttags soli`}>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>SASS</span>
                      <span>React</span>
                      <span>Angular</span>
                      <span>Python</span>
                      <span>Javascript</span>
                      <span>JSON</span>
                      <span>SQL</span>
                      <span>Git</span>
                    </div>
                    <h3 className={`${montserrat.className} aboutdesign text-white text-sm mt-6 py-1 md:text-l`}> DESIGN</h3>
                    <div className={`${montserrat.className} designtags`}>
                      <span>Figma</span>
                      <span>UI/UX</span>
                      <span>Design Systems</span>
                    </div>
                  </div>
                </div>
                
              </section>
              {/* Section3 Work/Projects */}
              <section className="section page work" id="page-work">
                <div>
                  <h3 className={`${montaga.className} worktitle text-white text-3xl mt-10  py-1 flex justify-center md:text-4xl`}> work.</h3>
                  <div className="workdescription block mx-8 mt-8 md:w-3/4 md:mt-16 md:mx-auto">
                    <p className={`${montserrat.className} text-white text-md py-2 leading-8 md:text-xl`}>I'm always in a constant state of practice. With digital desgin and development constantly evolving,
                      I remind myself that I too must not be complacent with what I know or can do.
                      This is a showcase of my best work in a variety of disciplines
                      including Web Design, No-code development and Project Management.
                    </p>
                  </div>
                  <div className={`${montserrat.className} projectlist text-white text-md flex flex-col items-center mt-10 md:flex-row md:justify-center md:mx-auto md:mt-5rem md:text-xl`}>
                    <a href="#page-work-bycatch">bycatch</a> 
                    <a href="#page-work-bcn">bettercarenetwork</a>
                    <a href="">personalbranding</a>
                  </div>
                </div>
              </section>
              {/* Slide: Bycatch Landscape */}
              <section className="section bycatch" id="page-work-bycatch">
                <div className="slide">
                  <div className="projectname">
                    <h1 className={`${montaga.className} text-white text-2xl flex justify-center text-center mt-5 mb-5 md:text-3xl`}>{projects['projects'][0]['name']}</h1>
                  </div>
                  <div className="projectcontent md:w-3/4 md:gap-14 md:mt-16 md:mx-auto md:flex">
                    <div className= "projectdescription">
                      <p className={`${montserrat.className} text-white text-md py-2 md:pt-auto md:text-xl`}>Bycatch, in the fishing industry, is caught fish or other marine species that is caught unintentionally while fishing for specific species. Every year, at least 7.3 million tons of marine life are caught incidentally.</p>
                      <p className={`${montserrat.className} font-semibold text-white text-md py-2 md:text-xl`}><a href='https://bycatch.org/' className='underline'>The Consortium for Wildlife Bycatch Reduction</a> aims to provide collaborative research between scientists and the fishing industry to identify practical bycatch reduction solutions for endangered species due to Bycatch being one of the principal threats to marine biodiversity worldwide and the economic survival of fishermen.</p>
                    </div>
                    <div className="projectdetails md:shrink-0 md:w-1/3">
                      <h3 className={`${montserrat.className} text-white text-sm mt-6 py-1 md:text-l md:mt-auto`}> ROLES</h3>
                      <div className={`${montserrat.className} developmenttags`}>
                        {projects['projects'][0]['roles'].map(stack => {
                          return <span key={stack}>{stack}</span>
                        })}</div>
                      <h3 className={`${montserrat.className} text-white text-sm mt-6 py-1 md:text-l`}> TECH STACK</h3>
                      <div className={`${montserrat.className} teckstacktags`}>
                        {projects['projects'][0]['techStack'].map(stack => {
                          return <span key={stack}>{stack}</span>
                        })}
                      </div>
                    </div>
                  </div>       
                </div>
                <div className="slide"><p>test</p></div>
                <div className="slide"></div>
              </section>
              {/* Slide: Bettercarenetwork Landscape */}
              <section className="section bcn" id="page-work-bcn">
                <div className="slide">
                  <div className="projectname">
                   <h3 className={`${montaga.className} worktitle text-white text-2xl flex justify-center mt-5 mb-5 md:text-3xl`}>{projects['projects'][1]['name']}</h3>
                  </div>
                  <div className="projectcontent md:w-3/4 md:gap-14 md:mt-16 md:mx-auto md:flex">
                    <div className="projectdescription">
                      <p className={`${montserrat.className} text-white text-md py-2 md:text-xl`}>Children need and have a right to be cared for by their parents and to grow up in a family environment. This has been recognized through years of experience and research as well as formally recognized under national and international laws, including the United Nations Convention of the Rights of the Child (UNCRC).</p>
                      <p className={`${montserrat.className} font-semibold text-white text-md py-2 md:text-xl`}>The <a href='https://bettercarenetwork.org/' className='underline'>Better Care Network</a> is an interagency network facilitating global information exchange and collaboration on the issue of children without adequate family care.</p>
                    </div>
                    <div className="projectdetails md:shrink-0 md:w-1/3">
                      <h3 className={`${montserrat.className} text-white text-sm mt-6 py-1 md:text-l md:mt-auto`}> ROLES</h3>
                      <div className={`${montserrat.className} developmenttags`}>
                        {projects['projects'][0]['roles'].map(stack => {
                          return <span key={stack}>{stack}</span>
                        })}</div>
                      <h3 className={`${montserrat.className} text-white text-sm mt-6 py-1 md:text-l`}> TECH STACK</h3>
                      <div className={`${montserrat.className} teckstacktags`}>
                        {projects['projects'][0]['techStack'].map(stack => {
                          return <span key={stack}>{stack}</span>
                        })}
                      </div>
                    </div>
                  </div>
                     
                </div>
                <div className="slide"></div>
                <div className="slide"></div>
              </section>
              {/* Section4 Contact */}
              <section className="section page contact" id="page-contact">
                <div>
                  <h3 className={`${montaga.className}contacttitle text-white text-3xl mt-10 py-1 flex justify-center md:text-4xl`}> contact.</h3>
                  <div className="contactdescription mx-8 mt-8">
                    <p className={`${montserrat.className} text-white text-md py-5 leading-8 max-w-xl mx-auto md:text-xl`}>If you have any inquiries or you would like to connect please reach out to any of the following:</p>
                  </div>
                </div>
                <div className="contactdetails text-white text-3xl flex justify-center gap-16 py-3 mb-10 md:text-4xl">
                  <a href="mailto:sabrina.accime@gmail.com"><BiLogoGmail /></a>
                  <a href="https://linkedin.com/in/sabrina-accime"><BsLinkedin /></a>
                  <a href="https://github.com/sabrinaaccime"><BsGithub /></a>
                </div>
              </section>
            </ReactFullpage.Wrapper>
          )}
        }
      />
      <footer className="flex justify-between">
        <span className="sabrina-footer text-white">SABRINA ACCIME</span>
        <span className="year text-white">2024</span>
      </footer>
    </div>
  )
}