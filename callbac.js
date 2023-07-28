function arnab(callback) {
    console.log('I am function');
    callback();
}
function age() {
    console.log('My age is 24');
}

arnab(function () {
    age();
})
