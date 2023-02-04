import React from 'react';

export type TTestDivProps = {
    propA: string;
    propB: boolean;
    propC: number;
};

const TestDiv: React.FC<TTestDivProps> = ({ propA, propB, propC }) => {
    return (
        <div>
            <div>{`propA is ${propA}`}</div>
            <div>{`propB is ${propB}`}</div>
            <div>{`propC is ${propC}`}</div>
        </div>
    );
};

export default React.memo(TestDiv);
