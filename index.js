const fs = require('fs');

const moment = require('moment');
const oneDay = moment().add(1, 'days').format('MM-DD');
const fiveDays = moment().add(5, 'days').format('MM-DD');

const SlackNotifier = require('./SlackNotifier');
const notifier = new SlackNotifier();

const notify = (people, birthdayPerson, days) => {
    people.filter(
        person => person.slack !== birthdayPerson.slack
    ).forEach(
        person => notifier.send(birthdayPerson, person, days)
    );
}

const checkBirthdays = (err, peopleJson) => {
    const people = JSON.parse(peopleJson);

    people.forEach(person => {
        if (person.date === oneDay) {
            notify(people, person, 1);
        }

        if (person.date === fiveDays) {
            notify(people, person, 5);
        }
    });
}

fs.readFile('./people.json', checkBirthdays);
