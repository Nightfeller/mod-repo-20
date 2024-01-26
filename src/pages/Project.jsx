import vibify from '../assets/vibify.png';
import dndBuilder from '../assets/dnd_builder.png';
import placeholderImage from '../assets/placeholder-image.webp';

export default function ProjectJSX() {
    return (
        <>
            <div className="flex justify-center py-5">
                <p>
                <a href="https://nataniel-c.github.io/vibeify/"><img src={vibify} alt="Project 1: Vibify" /></a>
                </p>
            </div>
            <div className="flex justify-center py-5 px-6">
                <p>
                <a href="https://dnd-builder-8e53886511db.herokuapp.com/"><img src={dndBuilder} alt="Project 2: DnD Builder" /></a>
                </p>
            </div>
            <div className="flex justify-center py-5 px-7">
                <p>
                <a href="#"><img src={placeholderImage} alt="Project 3: LFG" /></a>
                </p>
            </div>
        </>
    );
}