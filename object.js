const devs = {
    name: 'Bellal', id: 1234, phone: 2456,

    details: {

        vill: 'Haydarabad',
        po: 'Gazipur',
        ward: [39, 40, 41]
    },

    taka: [20, 30, 40, 50]


}

devs.details.ward[2] = 42;


const ward = devs.details.ward;
console.log(ward);
