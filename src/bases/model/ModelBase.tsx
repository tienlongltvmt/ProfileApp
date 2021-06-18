export interface Province {
  id?: number;
  code?: string;
  name?: string;
}

export interface CreatedBy {
  id: number;
  name: string;
}

/**
 * same @param Sender in api https://api-lep.csell.com.vn/v1/exports/id_exports
 */
export interface Store {
  id: number;
  name?: string;
  phone?: string;
  address?: string;
}

export interface Receiver {
  id?: number;
  name?: string;
  phone?: string;
}

export interface Unit {
  name: string;
  quantity: number;
  original_price: number;
}
export interface Variation {
  name: string;
  values: string[];
}
export interface Product {
  id: number;
  sku: string;
  name: string;
  type: string;
  unit: string;
  brand: any;
  price: number;
  discount: any;
  option_id: number;
  categories: Category[];
  normal_price: number;
  discount_value: number;
  original_price: number;
  total_export_price: number;
  total_import_price: number;
  total_discount_value: number;
  total_export_quantity: number;
  total_import_quantity: number;
  total_price_before_discount: number;
}
export interface Category {
  id?: number;
  name?: string;
  slug?: string;
}
export interface Payment {
  id: number;
  code: string;
  type: number;
  note: any;
  value: string;
  card: any;
  store: Receiver;
  group: CreatedBy;
  partner: Receiver;
  order: Order;
  provider: any;
  method: number;
  method_name: string;
  status: string;
  status_name: string;
  transaction_code: string;
  transaction_type: string;
  is_active: boolean;
  is_warning: boolean;
  device_id: string;
  ip_address: string;
  created_at: string;
  created_by: CreatedBy;
  updated_at: string;
  updated_by: any;
  cancelled_at: any;
  cancelled_by: any;
}
export interface Order {
  id: number;
  code: string;
  total_paid: string;
  total_price: string;
}
