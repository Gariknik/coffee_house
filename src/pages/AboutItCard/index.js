import AboutItCardFirstSection from "./AboutItCardFirstSection";
import AboutItCardSecondSection from "./AboutItCardSecondSection";


const AboutItCard = ({data, id}) => {
    return (
        <>
            <AboutItCardFirstSection />
            <AboutItCardSecondSection data={data} id={id} />
        </>
    );
};

export default AboutItCard;