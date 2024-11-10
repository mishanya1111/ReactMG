
import '../first.css';
import CardList from '../сomponents/CardList';
import Header from "../сomponents/Header";


function CardsPage() {
    return (
        <div>
            <Header />
            <div className="cardContainer">
                <CardList />
            </div>
        </div>
    );
}

export default CardsPage;
