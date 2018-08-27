import humanizeDuration from 'humanize-duration';

export function printDuration(duration) {
    return humanizeDuration(duration, {
        language: 'shortFr',
        languages: {
            shortFr: {
                h: '',
                m: '',
                s: '',
                ms: ''
            }
        },
        //delimiter: '\u00A0',
        delimiter: ' : ',
        spacer: ''
    });
}
