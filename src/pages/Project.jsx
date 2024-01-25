import vibeify from '../assets/vibeify.png';
import dndBuilder from '../assets/dnd_builder.png';
import placeholderImage from '../assets/placeholder-image.png';

export default function ProjectJSX() {
    return (
        <>
            <div className="flex justify-center">
                <p className="pt-6">Vibeify</p>
                <p>
                <a href="https://nataniel-c.github.io/vibeify/"><img src={vibeify} alt="Project 1: Vibify" /></a>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="pt-6">DnD Builder</p>
                <p>
                <a href="https://dnd-builder-8e53886511db.herokuapp.com/"><img src={dndBuilder} alt="Project 2: DnD Builder" /></a>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="pt-6">NaN</p>
                <p>
                <a href="#"><img src={placeholderImage} alt="Project 3: LFG" /></a>
                </p>
            </div>
        </>
    );
}