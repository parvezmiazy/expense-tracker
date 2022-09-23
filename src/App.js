import "./App.css";
import { Header } from "./componets/Header.jsx";
import { Balance } from "./componets/Balance.jsx";
import { IncomeExpenses } from "./componets/IncomeExpenses.jsx";
import { TransactionList } from "./componets/TransactionList";
import { AddTransaction } from "./componets/AddTransaction";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <i class="fa fa-text-height" aria-hidden="true">
          tttt
        </i>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
