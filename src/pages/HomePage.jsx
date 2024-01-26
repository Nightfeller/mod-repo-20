import placeholderAvatar from '../assets/placeholder-avatar.jpg';

export default function AboutJSX() {
    return (
        <>
            <div className="flex justify-center pt-3">
                <img className="rounded-full" src={placeholderAvatar} alt="Placeholder Avatar" />
            </div>
            <div className="flex justify-center text-xl pt-11 pb-2">
                <h1>About Me</h1>
            </div>
        </>
    );
}