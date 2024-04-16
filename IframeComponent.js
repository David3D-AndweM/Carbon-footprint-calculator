import React from 'react';

const IframeComponent = () => {
    return (
        <div className="iframe-container">
            <iframe
                title="Carbon Footprint Calculator"
                src="https://carbon-calculator-kzvv7xpjqnmbcaj8gdpqml.streamlit.app/?embed=true"
                width="800px"
                height="600px"
            />
        </div>
    );
}

export default IframeComponent;
