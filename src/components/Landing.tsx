// @ts-ignore
import ring from '../../public/ring.png';
// @ts-ignore
import tiktok from '../../public/tiktok.png';
// @ts-ignore
import spotify from '../../public/spotify.png';
// @ts-ignore
import kindle from '../../public/kindle.png';
// @ts-ignore
import powerpoint from '../../public/powerpoint.png';




const HomePage = () => {
    return (
        <div className="container-fluid |">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h1>Welcome to Smart Ring</h1>
                    <p className="lead">Control your phone and favorite apps with just a spin!</p>
                    <img src={ring} alt="Ring Logo" className="img-fluid mt-5" style={{width:'25rem'}}/>
                    <button className="btn btn-outline-primary btn-lg mx-5">Get Started</button>
                    <button className="btn btn-outline-success btn-lg mx-5">Learn More</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 text-center offset-md-2">
                    <h2>TikTok</h2>
                    <img src={tiktok} alt="TikTok Logo" className="img-fluid mt-3 custom-image" style={{width: '9rem'}} />
                    <p>Swipe through TikTok videos effortlessly</p>
                    <button className="btn btn-dark" onClick={() => window.location.href = "https://www.tiktok.com/"}>Open TikTok</button>
                </div>
                <div className="col-md-4 text-center">
                    <h2>Spotify</h2>
                    <img src={spotify} alt="Spotify Logo" className="img-fluid mt-3 custom-image" style={{width: '10rem'}}/>
                    <p>Control your music playback seamlessly</p>
                    <button className="btn btn-success" onClick={() => window.location.href = "https://open.spotify.com/"}>Open Spotify</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 text-center offset-md-2">
                    <h2>Ebooks</h2>
                    <img src={kindle} alt="Ebook Logo" className="img-fluid custom-image" style={{width: '8rem'}}/>
                    <p>Read your favorite ebooks with a spin</p>
                    <button className="btn btn-warning" onClick={() => window.location.href = "https://www.librariesireland.ie/elibrary/ebooks"}>Open Ebook</button>
                    {/* Add Ebook Logo */}
                </div>
                <div className="col-md-4 text-center">
                    <h2>Presentations</h2>
                    <img src={powerpoint} alt="Presentation Logo" className="img-fluid mt-3"
                         style={{width: '10rem'}}/>
                    <p>Advance slides in your presentations with ease</p>
                    <button className="btn btn-danger"  onClick={() => window.location.href = "https://www.microsoft.com/en-us/microsoft-365/powerpoint"}>
                        Open Presentation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
