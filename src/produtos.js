import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Produtos extends LightningElement {
  @api nome;
  @api preco; 
  @api cod;


}
