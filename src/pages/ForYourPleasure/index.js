import ForYourPleasureFirstSection from "./ForYourPleasureFirstSection";
import ForYourPleasureSecondSection from "./ForYourPleasureSecondSection";
import ForYourPleasureThirdSection from "./ForYourPleasureThirdSection";

const ForYourPleasure = ({data}) => {
    return (
        <>
            <ForYourPleasureFirstSection />
            <ForYourPleasureSecondSection />
            <ForYourPleasureThirdSection data={data} />
        </>
    );
};

export default ForYourPleasure;