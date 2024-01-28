import placeholderAvatar from '../assets/placeholder-avatar.jpg';

export default function AboutJSX() {
    return (
        <>
            <div className="flex justify-center pt-3">
                <img className="rounded-full" src={placeholderAvatar} alt="Placeholder Avatar" />
            </div>
            <div className="flex justify-center text-paletteOxfordBlue text-2xl pt-6 pb-2">
                <h1>Hello.</h1>
            </div>
            <div className="flex justify-center text-paletteCharcoal text-wrap text-xl px-4 py-3">
                <p>
                    I am Peter Matthew Earls.
                    I went to the University of Texas where I attended the full-stack web development bootcamp 
                    in an effort to better myself in the world of programming. I have always liked games and have 
                    wanted to become either a game developer or game modder, but not a hacker, as that's immoral. 
                    I got into the idea of modding and game developing while in my previous classed in a school 
                    for game development, where I wanted to create mods and spin-offs for my favorite games for 
                    their communities. That eventually brought me to UT, which I studied in and learn many of the 
                    essential languages, as well as dabbled in other things unrelating to the classes, like 
                    esoteric languages. Now, I'm aiming to learn more about other languages that I didn't learn 
                    yet, like C++ and C#, as well as other esoteric languages, like Piet and Whitespace, to 
                    have the knowledge to be able to code in any game and make any mod.
                </p>
                    
            </div>
        </>
    );
}