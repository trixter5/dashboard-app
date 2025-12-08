export interface Order {
  id: number;
  customerName: string;
  email: string;
  productCategory: 'Electronics' | 'Clothing' | 'Books' | 'Other';
  amount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'delivered';
  date: string; // ISO format
}

export interface User {
  id: number;
  name: string;
  email: string;
  registrationDate: string;
  totalSpent: number;
}

export interface ChartDataPoint {
  date: string;
  sales: number;
  orders: number;
}

export interface CategorySales {
  category: string;
  revenue: number;
  percentage: number;
}

export interface DashboardFilters {
  search: string;
  status: Order['status'] | 'All';
  category: Order['productCategory'] | 'All';
  dateRange: [string, string];
}

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
  sortBy: keyof Order | null;
  sortDirection: 'asc' | 'desc';
}
