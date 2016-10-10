import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FauxFormsService implements InMemoryDbService {
    createDb() {
        const forms = [
            {
                id: 1,
                questions: [
                    {
                        controlType: 'radio',
                        id: 'doyou',
                        label: 'Do you like pizza?',
                        options: [
                            { label: 'Yes', value: 1 },
                            { label: 'Of course', value: 2 }
                        ],
                        required: true
                    },
                    {
                        controlType: 'select',
                        id: 'favorite',
                        label: 'Which is your favorite pizza?',
                        options: [
                            { label: '', value: 'no-answer' },
                            { label: 'Anchovie', value: 'fish' },
                            { label: 'Hawaiian', value: 'pineapple-ham' },
                            { label: 'Meat Lover\'s', value: 'meat lover' },
                            { label: 'Veggie', value: 'vegetable' }
                        ],
                        required: false
                    },
                    {
                        controlType: 'textarea',
                        id: 'more',
                        label: 'Gives us your thoughts on pizza:',
                        required: false
                    }
                ],
                title: 'Pizza Perfection'
            },
            {
                id: 5,
                questions: [
                    {
                        controlType: 'select',
                        id: 'delicious',
                        label: 'What is the best cheese for a burger?',
                        options: [
                            { label: '', value: 'no-cheese' },
                            { label: 'American', value: 'american' },
                            { label: 'Cheddar', value: 'cheddar' },
                            { label: 'Provolone', value: 'provolone' },
                            { label: 'Swiss', value: 'swiss' }
                        ],
                        required: true
                    },
                    {
                        controlType: 'textarea',
                        id: 'perfection',
                        label: 'Describe your perfect burger:',
                        required: true
                    }
                ],
                title: 'Burger Bonanza'
            }
        ];

        return {forms};
    }
}