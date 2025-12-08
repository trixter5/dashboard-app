import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { faker } from '@faker-js/faker';
import type { Order, DashboardFilters, PaginationState } from '@/types';

export const useDashboardStore = defineStore('dashboard', () => {
  const orders = ref<Order[]>([]);
  const filters = ref<DashboardFilters>({
    search: '',
    status: 'All',
    category: 'All',
    dateRange: ['2025-01-01', new Date().toISOString().split('T')[0] as string],
  });
  const pagination = ref<PaginationState>({
    page: 1,
    pageSize: 10,
    total: 0,
    sortBy: null,
    sortDirection: 'desc',
  });

  // init mock data

  // filters and sorting

  // pagination

  // actions

  // statistics

  // chart Data
    // sales by data
    // sales by category
  return {
    orders,
    filters,
    pagination,
  };
});
