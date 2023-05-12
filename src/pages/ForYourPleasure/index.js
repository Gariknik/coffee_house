import ForYourPleasureFirstSection from "./ForYourPleasureFirstSection";
import ForYourPleasureSecondSection from "./ForYourPleasureSecondSection";
import ForYourPleasureThirdSection from "./ForYourPleasureThirdSection";

const ForYourPleasure = ({data, handleCardClick}) => {
    return (
        <>
            <ForYourPleasureFirstSection />
            <ForYourPleasureSecondSection />
            <ForYourPleasureThirdSection data={data} handleCardClick={handleCardClick}/>
        </>
    );
};

export default ForYourPleasure;