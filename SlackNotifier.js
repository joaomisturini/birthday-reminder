const Slack = require('node-slack');

class SlackNotifier {
    constructor() {
        this._slack = new Slack(
            'your-slack-webhook-url'
        );
    }

    send = (person, notifiable, days) => {
        this._slack.send({
            text: this._makeText(person, days),
            channel: notifiable.slack,
            username: 'Birthday Bot',
            icon_emoji: ':tada:',
        });
    }

    _makeText = (person, days) => {
        const payment = days > 1
            ? 'The birthday is in 5 days'
            : 'The birthday is today!';

        return `It's ${ person.name }'s birthday in ${ days } day${
            days > 1 ? 's' : ''
        }! ${ payment }`;
    }
};

module.exports = SlackNotifier;
