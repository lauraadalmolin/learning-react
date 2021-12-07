import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
