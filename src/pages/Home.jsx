
import { HeroSection } from "../components/UI/HeroSection"
import { About } from "./About"
import { Category } from "./Category"
import { Country } from "./Country"
import { Product } from "./Product"
// import { Contact } from "./Contact"


export const Home = () => {
    return <>
        <HeroSection />
        <About />
        <Country />
        <Product/>
         <Category/> 
    </>
}