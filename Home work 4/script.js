alert('Create your account');

do {
    q1 = prompt('Your Name (must be at least six characters, e.g. Anna Ivanova)');
} while (q1.length < 6)

do {
    q2 = prompt('Nick Name (must be at least six characters, without whitespaces and must begin with a letter, e.g. annaivanova)');
} while (q2.length < 6 || q2.indexOf(' ') !== -1  || !isNaN(q2[0])) 

do {
    q3 = prompt('Email Address (must be at least six characters, without whitespaces, begin with a letter and contains @, e.g. annaivanova@gmail.com)');
} while (q3.length < 6 || q3.indexOf(' ') !== -1 || !isNaN(q3[0]) || q3.indexOf('@') == -1)

do {
    q4 = +prompt('Year of Birth (must be a number, e.g. 1990)');
} while (isNaN(q4))

date = new Date();

document.write(`<ul>`);
document.write(`<li>Your Name: ${q1}</li>`);
document.write(`<li>Nick Name: ${q2}</li>`);
document.write(`<li>Email Address: <a href='${q3}'>${q3}</a></li>`);
document.write(`<li>Age: ${date.getFullYear() - q4}</li>`);
document.write(`</ul>`);