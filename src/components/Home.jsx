import {Link} from "react-router-dom";
// https://w.wallha.com/ws/12/zp8chFwT.jpg
export default function Home() {
    return (
        <>
            <img src={'/home-background.jpg'} className="bg" alt="home-background" />
            <div className="home">
                <h1 className="home-header">Welcome to our world of chocolates</h1>
                <p className="home-content">Come and discover all our products which are homemade with high quality which takes away your heart. </p>
                <Link to="/chocolates" className="home-link">Shop Now</Link>
            </div>
        </> 
    )
}
