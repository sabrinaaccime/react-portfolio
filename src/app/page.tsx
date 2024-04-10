
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
            <li><a href="#page-about" id="about" className="about">about</a></li>
            <li><a href="#page-work" id="work" className="work">work</a></li>
            <li><a href="#page-contact" id="contact" className="contact">contact</a></li>
          </ul>
        </nav>
        <div className='logo flex justify-center'>
          <div className="sabrina-accime text-white text-2xl font-gideon" id="logo">sabrina accime</div>
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
                    <p className={`${montserrat.className} text-white block ms-px me-px text-md leading-8 max-w-xl mx-auto md:text-3xl`}>front-end developer base in seattle, wa with a passion for storytelling using art and techonology.</p>
                  </div>
                </div>
              </section>
              {/* Section2 About */}
              <section className="section page about" id="page-about">
                <h3 className={`${montaga.className} abouttitle text-white text-3xl mt-6 py-1 flex justify-center md:text-4xl`}> about.</h3>
                <div className="aboutcontent md:w-3/4 md:gap-14 md:mt-16 md:mx-auto md:flex">
                  <div className="aboutdescription block mx-8 mt-8 md:mx-0 md:mt-0">
                    <p className={`${montserrat.className} text-white text-md py-2 leading-8 text-gray-80 md:text-xl`}>art and techonology has always fasinated me.
                      with my extensive background in the peforming arts, i knew i wanted to do something that was creative, that allow me to probelm solve and that welcomed change. although pursuing a computer sicence degree wasn't my first choice it was probably one of the best choices i made in my college career.
                    </p>
                    <p className={`${montserrat.className} text-white text-md py-2 leading-8 text-gray-80 md:text-xl`}>i sought out to find spaces that allow me to learn more when it comes to new technologies and
                      creative coding. But more importantly, a space that allowed me design and build products that are real and that mattered.
                    </p>
                  </div>
                  <div className="aboutdetails mx-8 mt-8 md:mx-0 md:mt-0 md:shrink-0 md:w-1/3">
                    <h3 className={`${montserrat.className} aboutdevelopment text-white text-sm mt-6 py-1 md:text-l md:mt-auto`}> front-end developement</h3>
                    <div className={`${montserrat.className} developmenttags soli`}>
                      <span>html</span>
                      <span>css</span>
                      <span>sass</span>
                      <span>react</span>
                      <span>angular</span>
                      <span>python</span>
                      <span>javascript</span>
                      <span>json</span>
                      <span>sql</span>
                      <span>git</span>
                    </div>
                    <h3 className={`${montserrat.className} aboutdesign text-white text-sm mt-6 py-1 md:text-l`}> design</h3>
                    <div className={`${montserrat.className} designtags`}>
                      <span>figma</span>
                      <span>ui/ux</span>
                      <span>design systems</span>
                    </div>
                  </div>
                </div>
                
              </section>
              {/* Section3 Work/Projects */}
              <section className="section page work" id="page-work">
                <div>
                  <h3 className={`${montaga.className} worktitle text-white text-3xl mt-10  py-1 flex justify-center md:text-4xl`}> work.</h3>
                  <div className="workdescription block mx-8 mt-8 md:w-3/4 md:mt-16 md:mx-auto">
                    <p className={`${montserrat.className} text-white text-md py-2 leading-8 md:text-xl`}>i will forever be in a constant state of practice. with digital desgin and development constantly evolving,
                      i remind myself that i too must not be complacent with what i know or can do.
                      this digital portfolio showcase my best work in a variety of disciplines
                      including web design, no-code development and project management.
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
                      <p className={`${montserrat.className} text-white text-md py-2 md:pt-auto md:text-xl`}>bycatch, in the fishing industry, is caught fish or other marine species that is caught unintentionally while fishing for specific species. every year, at least 7.3 million tons of marine life are caught incidentally.</p>
                      <p className={`${montserrat.className} font-semibold text-white text-md py-2 md:text-xl`}><a href='https://bycatch.org/' className='underline'>the consortium for wildlife bycatch reduction</a> aims to provide collaborative research between scientists and the fishing industry to identify practical bycatch reduction solutions for endangered species due to bycatch being one of the principal threats to marine biodiversity worldwide and the economic survival of fishermen.</p>
                    </div>
                    <div className="projectdetails md:shrink-0 md:w-1/3">
                      <h3 className={`${montserrat.className} text-white text-sm mt-6 py-1 md:text-l md:mt-auto`}> roles</h3>
                      <div className={`${montserrat.className} developmenttags`}>
                        {projects['projects'][0]['roles'].map(stack => {
                          return <span key={stack}>{stack}</span>
                        })}</div>
                      <h3 className={`${montserrat.className} text-white text-sm mt-6 py-1 md:text-l`}> tech stack</h3>
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
                      <p className={`${montserrat.className} text-white text-md py-2 md:text-xl`}>children need and have a right to be cared for by their parents and to grow up in a family environment. this has been recognized through years of experience and research as well as formally recognized under national and international laws, including the united nations convention of the rights of the child (unrc).</p>
                      <p className={`${montserrat.className} font-semibold text-white text-md py-2 md:text-xl`}>the <a href='https://bettercarenetwork.org/' className='underline'>better care network</a> is an interagency network facilitating global information exchange and collaboration on the issue of children without adequate family care.</p>
                    </div>
                    <div className="projectdetails md:shrink-0 md:w-1/3">
                      <h3 className={`${montserrat.className} text-white text-sm mt-6 py-1 md:text-l md:mt-auto`}> roles</h3>
                      <div className={`${montserrat.className} developmenttags`}>
                        {projects['projects'][0]['roles'].map(stack => {
                          return <span key={stack}>{stack}</span>
                        })}</div>
                      <h3 className={`${montserrat.className} text-white text-sm mt-6 py-1 md:text-l`}> tech stack</h3>
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
                    <p className={`${montserrat.className} text-white text-md py-5 leading-8 max-w-xl mx-auto md:text-xl`}>if you have any inquiries or you would like to connect please reach out to any of the following:</p>
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
        <span className="sabrina-footer text-white">sabrina accime</span>
        <span className="year text-white">2024</span>
      </footer>
    </div>
  )
}