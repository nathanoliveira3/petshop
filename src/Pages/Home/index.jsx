import img from '../../Assets/pets.jpg'
import './estilos.css'
const Home = () => {
    return(
        <div className='home'>
            <h1>PETSHOP</h1>
            <h2>A MELHOR DA REGIÃO</h2>
            <div className="img">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Home