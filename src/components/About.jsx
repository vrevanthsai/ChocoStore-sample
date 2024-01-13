export default function About() {
  // https://www.wallpaperflare.com/static/22/123/581/chocolate-cocoa-delicious-5k-wallpaper-preview.jpg
  return (
    <>
      <div className="container">
        <h1 className="about-header">About us</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <p className="about-para">Generations of experience, well-preserved recipes and techniques, and quality ingredients were skilfully blended into Fantasie’s celebrated selection of craft chocolates. ChocoShop has added a variety of indulgent and delectable treats to create a unique flavour profile. A host of fresh arrivals filled with distinct flavours reprise the old into new while retaining the classics.</p>
            </div>
            <div className="col-sm-6">
              <img src={'/about-pageimg.jpg'} className="img-fluid" alt="about-page-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
