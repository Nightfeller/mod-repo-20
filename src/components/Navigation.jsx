function NavJSX() {
    return (
        <>
            <div className="flex bg-paletteOxfordBlue gap-11 py-5 px-4">
                <div className="flex-1">
                    <a>Matthew's Portfolio</a>
                </div>
                <div className="transition-all hover:text-paletteCharcoal duration-500">
                    <a href="#">Home</a>
                </div>
                <div className="transition-all hover:text-paletteCharcoal duration-500">
                    <a href="#">Portfolio</a>
                </div>
                <div className="transition-all hover:text-paletteCharcoal duration-500">
                    <a href="#">About</a>
                </div>
                <div className="transition-all hover:text-paletteCharcoal duration-500">
                    <a href="#">Contact</a>
                </div>
            </div>
        </>
    );
}

export default NavJSX;