import React from 'react';

// Components
import HIWTopSection from '../components/HIWTopSection';
import HIWMidSection from '../components/HIWMidSection';
import HIWBottomSection from '../components/HIWBottomSection';
import HIWBanner from '../components/HIWBanner';

const HowItWorksPage = () => {
    return (
        <div>
            <HIWBanner />
            <HIWTopSection />
            <HIWMidSection />
            <HIWBottomSection />
        </div>
    );
};

export default HowItWorksPage;