import React from "react";
import SocialCard from "./SocialCard";
import ProjectCard from "./ProjectCard";
import "./App.css";

class App extends React.Component {
    render () {
        return (
            <div className="component-app">
                <div id="content">
                    <SocialCard />
                    
                    <h2 id="projects-header">Projects</h2>
                    
                    <div id="projects">
                        <ProjectCard title="TextGen" tools="Python 3" description="Text generation using Markov chains" link="https://github.com/tjshaffer21/TextGen" />
                        <ProjectCard title="LSystem" tools="Common Lisp (CCL), OpenGL" description="L-System implementation" link="https://github.com/tjshaffer21/LSystem" />
                        <ProjectCard title="tag_reader script" tools="Python" description="A script that reads ID3 tags from MP3 files." link="https://github.com/tjshaffer21/Scripts/blob/master/tag_reader.py" />
                        <ProjectCard title="Haunted Maze" tools="Lua, Love" description="A Pacman clone prototype." link="https://github.com/tjshaffer21/HauntedMaze" />
                        <ProjectCard title="pygamegui" tools="Python, pygame" description="Higher level objects around pygame objects." link="https://github.com/tjshaffer21/pygamegui" />
                        
                        <div id="projects-all">
                            <h4><a href="https://github.com/tjshaffer21">View All</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;