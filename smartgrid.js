const smartgrid = require('smart-grid');

const settings = {
    filename: "_smart-grid",
    columns: 20,
    outputStyle: 'sass',
    offset: '40px',
    container: {
        maxWidth: '2360px',
        fields: '30px'
    },
    breakPoints: {
        xxl: {
            width: "2300px",
            fields: "20px"
        },
        xl: {
            width: "1413px",
            fields: "20px"
        },
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./app/sass', settings);