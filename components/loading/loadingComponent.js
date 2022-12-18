import React from 'react';
function LoadingComponent() {
    return (
        <div className="loading position-fixed fixed-top ">
            <div className="content  center">

                <div className="loading center">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

            </div>
        </div>
    );
}

export default LoadingComponent;