function validatePIN (pin) {
	let reg = /^\d+$/;
	if (pin.length == 4 || pin.length == 6) {
		return reg.test(pin);
	} else {
		return false;
	}
	
}