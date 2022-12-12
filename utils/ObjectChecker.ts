export default function isEmpty(obj: any) {
	for (var prop in obj) {
		if (obj[prop] === "") return false;
	}

	return true;
}
