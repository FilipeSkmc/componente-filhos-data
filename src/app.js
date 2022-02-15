import { LightningElement } from "lwc";

export default class App extends LightningElement {
    listaProdutos = [
      {codigo: "P001", nome:"PRODUTO A", preco: 100.00},
      {codigo: "P002", nome:"PRODUTO B", preco: 120.00},
      {codigo: "P003", nome:"PRODUTO C", preco: 130.00},
      {codigo: "P004", nome:"PRODUTO D", preco: 140.00},
      {codigo: "P005", nome:"PRODUTO E", preco: 150.00},
      {codigo: "P006", nome:"PRODUTO F", preco: 160.00}
    ]
}
