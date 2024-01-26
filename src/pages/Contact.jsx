import gmail from '../assets/gmail.jpg';
import github from '../assets/github.webp';
import linkedin from '../assets/linkedin.png';

export default function ContactJSX() {
    return (
        <>
            <div className="flex justify-center pt-7 pb-5 px-10">
                <a href="mailto:family2earls@gmail.com"><img src={gmail} alt="Gmail" /></a>
            </div>
            <div className="flex justify-center py-5">
                <a href="https://github.com/Nightfeller"><img src={github} alt="Github" /></a>
            </div>
            <div className="flex justify-center pt-5 pb-8">
                <a href="https://www.linkedin.com/in/matthew-earls-3a141b2aa/"><img src={linkedin} alt="LinkedIn" /></a>
            </div>
        </>
    );
}