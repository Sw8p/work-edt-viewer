export default [
    {
        name: 'exam',
        path: '/exam',
        children: [
            {
                name: 'viewer',
                path: '/viewer'
            },
            {
                name: 'results',
                path: '/results'
            }
        ]
    },
    {
        name: 'notfound',
        path: '/notfound'
    }
];
