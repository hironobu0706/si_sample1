
import { create } from 'zustand'

export interface Customer {
  firstName: string;
  furigana: string;
  tel: string;
  postCode: string;
  prefectures: string;
  address: string;
  mailAddress: string;
  password: string;
}

interface BaseState {
  customer: Customer;
  setCustomer: (customerData: Customer) => void;
}

// storeの作成
export const useCustomerStore = create<BaseState>((set) => ({
  customer: {
    firstName: "",
    furigana: "",
    tel: "",
    postCode: "",
    prefectures: "",
    address: "",
    mailAddress: "",
    password: "",
  },
  setCustomer: (customerData: Customer) => 
    set((state) => ({ customer: { ...state.customer, ...customerData } })),
}));

export default useCustomerStore;