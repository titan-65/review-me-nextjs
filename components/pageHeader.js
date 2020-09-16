import React from 'react';

const PageHeader = (props) => {
    const {url, title} = props
    return (
        <div className="page-header header-filter header-small" data-parallax="true"
             style={{backgroundImage: `url(${url})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto text-center">
                        <h2 className="title">{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
