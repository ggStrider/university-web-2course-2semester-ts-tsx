import type { User } from "./components/User"

export function userToString(user: User) : string {
	if(user == null) {
		console.log("user you want to check is null/undefined!")
		return "";
	}

	let toString = user.username + "\n" + user.email
		+ "\n" + user.lastLogin;

	return toString;
}

export function daysFromLastLogin(user: User) : number {
	if(user == null) {
		console.log("user you want to check is null/undefined!")
		return -1;
	}

	let elapsedInMs = Date.now() - user.lastLogin.getTime();
	let dayInMs = 1000 * 60 * 60 * 24;

	return Math.floor(elapsedInMs / dayInMs);
}
