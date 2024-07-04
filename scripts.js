let balance = 0;

function updateBalanceDisplay() {
    document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalanceDisplay();
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter a valid amount.');
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            updateBalanceDisplay();
            document.getElementById('amount').value = '';
        } else {
            alert('Insufficient balance.');
        }
    } else {
        alert('Please enter a valid amount.');
    }
}

document.addEventListener('DOMContentLoaded', updateBalanceDisplay);

let transactions = [
    { id: 1, type: 'open', details: 'Transaction 1 details...', date: '2024-07-01', time: '12:34', amount: 10000.00, role: 'Sender', actionRequired: false },
    { id: 2, type: 'closed', details: 'Transaction 2 details...', date: '2024-07-02', time: '14:56', amount: 15000.00, role: 'Receiver', actionRequired: false },
    { id: 3, type: 'open', details: 'Transaction 3 details...', date: '2024-07-03', time: '09:12', amount: 20000.00, role: 'Sender', actionRequired: true },
    { id: 4, type: 'closed', details: 'Transaction 4 details...', date: '2024-07-04', time: '16:45', amount: 25000.00, role: 'Receiver', actionRequired: false },
    { id: 5, type: 'action-required', details: 'Transaction 5 details...', date: '2024-07-05', time: '11:22', amount: 30000.00, role: 'Sender', actionRequired: true }
];

function showTransactions(filter) {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    let filteredTransactions;
    if (filter === 'all') {
        filteredTransactions = transactions;
    } else if (filter === 'open') {
        filteredTransactions = transactions.filter(t => t.type === 'open');
    } else if (filter === 'closed') {
        filteredTransactions = transactions.filter(t => t.type === 'closed');
    } else if (filter === 'action-required') {
        filteredTransactions = transactions.filter(t => t.actionRequired);
    }

    filteredTransactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.className = 'transaction-item';
        transactionItem.innerHTML = `
            <h3>Transaction ${transaction.id}</h3>
            <p>Details: ${transaction.details}</p>
            <p>Date: ${transaction.date}</p>
            <p>Time: ${transaction.time}</p>
            <p>Amount: ₦${transaction.amount.toLocaleString()}</p>
            <p>Role: ${transaction.role}</p>
        `;
        transactionList.appendChild(transactionItem);
    });
}

document.addEventListener('DOMContentLoaded', () => showTransactions('all'));

