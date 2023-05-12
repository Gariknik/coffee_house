import OurCoffeeFirstSection from "./OurCoffeeFirstSection";
import OurCoffeeSecondSection from "./OurCoffeeSecondSection";
import OurCoffeeThirdSection from "./OurCoffeeThirdSection";

const OurCoffee = ({data, handleCardClick}) => {
    return (
        <>
            <OurCoffeeFirstSection />
            <OurCoffeeSecondSection />
            <OurCoffeeThirdSection data={data} handleCardClick={handleCardClick}/>
        </>
    );
};

export default OurCoffee;