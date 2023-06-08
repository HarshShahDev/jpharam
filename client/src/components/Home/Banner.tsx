export default function Banner() {
  return (
    <section className="bg-[url(/placeholder/1920x623.png)] p-20">
      {/* <img src="/placeholder/1920x623.png" /> */}
      <div className="max-w-6xl mx-auto grid grid-cols-2">
        <div>
          <div>
            <h6>N95 Facial Covering Mask</h6>
            <h1>Grade A Safety Masks
              For Sale. Haurry Up!</h1>
            <p className="my-3">Over 39,000 people work for us in more than 70 countries all over the
              This breadth of global coverage, combined with specialist services</p>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <ul>
                <li className="pb-3">
                  <i className="flaticon-home-2"></i>
                  Activated Carbon
                </li>
                <li className="pb-3">
                  <i className="flaticon-mountain"></i>
                  Breathing Valve
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="pb-3">
                  <i className="flaticon-heart"></i>
                  6 Layer Filteration
                </li>
                <li className="pb-3">
                  <i className="flaticon-secure"></i>
                  Rewashes & Reusable
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="service.html">View Products</a>
          </div>
        </div>

      </div>
    </section>
  )
}
