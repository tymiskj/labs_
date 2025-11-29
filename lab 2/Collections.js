use = 'strict';

const usersList = [
    { username: "Boris_Antonovich", phone: "+380501112233" },
    { username: "Marina_Sokolova", phone: "+380671234567" },
    { username: "Andrii_Shevchenko", phone: "+380931112233" },
    { username: "Katerina_Luskova", phone: "+380991234567" },
];

let FindPhoneByName = (username) => {
    for (const user of usersList) {
        if (user.username === username) {
            return user.phone;
        }
    }
    return null;
};

console.log(FindPhoneByName("Olena_Koval"));

const userPhones = {
    Boris_Antonovich: "+380501112233",
    Marina_Sokolova: "+380671234567",
    Andrii_Shevchenko: "+380931112233",
    Katerina_Luskova: "+380991234567",
};

FindPhoneByName = (username) => userPhones[username] ?? null;

console.log(FindPhoneByName("Marina_Sokolova"));
