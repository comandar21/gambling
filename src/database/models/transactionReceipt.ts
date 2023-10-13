import { Document, Schema, model } from "mongoose";

export interface ITransactionReceipt {
  betId: number;
  who: string;
  guess: number;
  random: number;
  input: number;
  prize: number;
  won: boolean;
}

const schema = new Schema({
  betId: { type: Number, required: true },
  who: { type: String, required: true },
  guess: { type: Number, required: true },
  random: { type: Number, required: true },
  input: { type: Number, required: true },
  prize: { type: Number, required: true },
  won: { type: Boolean, required: true },
});

export type ITransactionReceiptModel = ITransactionReceipt & Document;
export const TransactionReceipt = model<ITransactionReceiptModel>(
  "TransactionReceipt",
  schema
);
export default TransactionReceipt;
