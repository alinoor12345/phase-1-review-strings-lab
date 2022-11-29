const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; 
// AssertionError: expected 'Welcome, Grace Hopper' to  contain 'Grace Hopper'
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//const shortGreeting = "Welcome, "
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
