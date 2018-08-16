import humanizeDuration from 'humanize-duration';

export function printDuration(duration) {
    return humanizeDuration(duration, {
        language: 'shortFr',
        languages: {
            shortFr: {
                h: 'h',
                m: 'm',
                s: 's',
                ms: 'ms'
            }
        },
        delimiter: '\u00A0',
        spacer: ''
    });
}
