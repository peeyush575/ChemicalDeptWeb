import React, { useEffect } from 'react';
import PureCounter from "@srexi/purecounterjs";

function NewCounter() {
    useEffect(() => {
    new PureCounter('.new-purecounter', {
        duration: 1,
        start: 0,
        end: 100,
    });
    }, []);

    return (
    <div>
        <span className="new-purecounter"></span>
    </div>
    );
}

export default NewCounter;
