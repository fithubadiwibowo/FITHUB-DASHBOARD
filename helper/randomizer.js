const RandomNewPhoneNumber = async ()  => {
    const phone_number = "835"+Math.floor(Math.random() * 1000000000).toString().substr(0, 9)
    return phone_number;
}

const RandomName = async ()  => {
    var randomName = "QA Testing ";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
    randomName += possible.charAt(Math.floor(Math.random() * possible.length));
   return randomName;
}

module.exports = {RandomNewPhoneNumber, RandomName};
