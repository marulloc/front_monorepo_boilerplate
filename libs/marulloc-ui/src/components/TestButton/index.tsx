// import React, { ReactElement } from 'react';

// import React, { ReactElement } from 'react';

type TProps = {
    children?: string;
    // children?: any;
};

const TestButton = ({ children }) => {
    return <button onClick={() => alert('Click!!')}>{children || 'Button'}</button>;
};

export default TestButton;
