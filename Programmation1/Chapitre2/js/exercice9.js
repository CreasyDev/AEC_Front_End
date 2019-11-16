
// 9. Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et le mot de passe “12345”,
// affichez le message suivant : « Bonjour [nom de l’utilisateur] ». // Si les informations ne sont pas correctes, affichez le message suivant :
// « Votre nom d’utilisateur ou votre mot de passe est invalide »

var userName;
var login;
var password;

userName = (prompt ('UserName'));
login = (prompt('Login'));
password = Number (prompt('Password'));


if (login === 'admin' && password === 12345) {
    console.log('Bonjour ' + userName + '!');
}
else {
    console.log('Votre nom d\'utilisateur ou votre mot de passe est invalide');
}
