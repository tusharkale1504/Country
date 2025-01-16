import { FaLongArrowAltRight } from "react-icons/fa"


export const HeroSection = () => {
    return (
        <main className="hero-section main container">
            <div className="grid grid-two-cols heropart">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World , One Country at a time.
                    </h1>

                    <p className="paragraph">
                        Discover the history , culture, and beauty of every nation. Sort, search , and filter through countries to find the details you.
                    </p>

                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring<FaLongArrowAltRight />
                    </button>
                </div>

                <div className="hero-image">
                    <img src="/images/world.png" alt="" />
                </div>

            </div>
        </main>
    )
}