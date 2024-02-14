import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "johndoe",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "51034szv",
      user: "goodmanave",
      date: "2022-11-05",
      cost: "200.95",
    },
    {
      txId: "0a123sb",
      user: "stevebower",
      date: "2022-11-02",
      cost: "13.55",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "120s51a",
      user: "wootzifer",
      date: "2019-04-15",
      cost: "24.20",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
  ];

function TransactionList() {
  return (
    <Paper sx={{ maxHeight: 400, overflow: 'auto', marginTop: 2, padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Recent Transactions
      </Typography>
      <List>
        {mockTransactions.map((transaction) => (
          <ListItem key={transaction.txId} divider>
            <ListItemText
              primary={`User: ${transaction.user}`}
              secondary={`Date: ${transaction.date} - Cost: $${transaction.cost}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default TransactionList;
