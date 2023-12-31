/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Projects.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";

const Projects = () => {
  return (
    <div id="projects" className=" w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[700px] mb-5 h-screen xl:w-[70%] relative flex flex-col items-center justify-center">
        <div className="w-full  mt-[-10%] ">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" persian_title="پروژه های من"  persian_subtitle="من تاحالا چه کارایی کردم!؟ "/>
        </div>
        <div className="w-full mt-0 h-[500px] overflow-scroll p-0 z-10 flex justify-center">
          <div className="w-full mt-0 justify-center xl:w-[100%]  p-0">
            <ProjectCards />
          </div>
          <div className="absolute w-full h-full top-[100%] right-[-75%] sm:right-[-50%]">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;