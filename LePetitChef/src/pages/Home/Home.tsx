import CadernoReceitas from "../../components/CadernoReceitas/CadernoReceitas";
import Equipe from "../../components/Equipe/Equipe";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero"
import ReceitasFavoritas from "../../components/ReceitasFavoritas/ReceitasFavoritas";
import Sobre from "../../components/Sobre/Sobre";

const Home = () => {
    return (
        <>
        <Hero />
        <ReceitasFavoritas />
        <CadernoReceitas />
        <Sobre />
        <Equipe />
        <Footer />
        </>
    )
}
export default Home;