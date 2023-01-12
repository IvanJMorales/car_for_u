import React from 'react';

// Components
import HIWTopSection from './HIWTopSection';
import HIWMidSection from './HIWMidSection';
import HIWBottomSection from './HIWBottomSection';
import HIWBanner from './HIWBanner';

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