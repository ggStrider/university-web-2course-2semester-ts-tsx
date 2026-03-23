import type { User } from "./User";
import { userToString, daysFromLastLogin } from "./UserTools";

const user1: User = {
	username: "someone111",
	email: "someone@example.com",
	lastLogin: new Date(2026, 2, 20, 15, 10)
}

function App() {
	const userString = userToString(user1);
	console.log(userString);

	const daysLeft = daysFromLastLogin(user1);
	console.log(daysLeft);

	return <h1>results are in console</h1>
}

// wtf ts is even do
export default App;
