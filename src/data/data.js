const invoice1 = {
    sender: 'John Doe',
    billTo: 'Donuld Duck',
    shipTo: 'Donuld Ducks Office Address',
    invoiceNumber: 'DD-016',
    date: '08/01/2023',
    dueDate: '08/05/2023',
    additionalNote: 'Not Applicable',
    items: [{ "description": "Frontend", "quantity": 23, "rate": 50, "discount": 0, "amount": 1150 }, { "description": "Backend", "quantity": 40, "rate": 50, "discount": 0, "amount": 2000 }, { "description": "Devops", "quantity": 10, "rate": 150, "discount": 0, "amount": 1500 }],
    notes: 'Account Number: 0199283',
    terms: 'Send by wire transfer',
    subtotal: '',
    tax: '10',
    total: '',
    cash: '',
    balance: ''
}


export { invoice1}