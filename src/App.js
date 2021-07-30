import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {

  const expenses = [
    { id: 'a1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'a2', title: 'Xbox Pass', amount: 15.00, date: new Date(2021, 7, 28) },
    { id: 'a3', title: 'Zelda Game', amount: 60.00, date: new Date(2021, 7, 15) },
    { id: 'a4', title: 'iPad', amount: 449.99, date: new Date(2021, 2, 29) }
  ];

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}
 
export default App;
