import Card from "../components/Card";
import cards from "../data";
import Search from "../components/Search";

const HomePage = () => {
    return (
        <div>
            <Search />
            <div className="mb-3">
                <div
                    className="grid gap-6 
                      grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
                      max-sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-10 px-4 max-w-7xl mx-auto"
                >
                    {cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
