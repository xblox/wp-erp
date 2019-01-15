import Vue               from 'vue';
import Router            from 'vue-router';
import People            from 'admin/components/people/People.vue';
import Products          from 'admin/components/products/Products.vue';
import Employees         from 'admin/components/people/Employees.vue';
import Dashboard         from 'admin/components/Dashboard.vue';
import TrialBalance      from 'admin/components/reports/TrialBalance.vue';
import PeopleDetails     from 'admin/components/people/PeopleDetails.vue';
import InvoiceCreate     from 'admin/components/invoice/InvoiceCreate.vue';
import ChartOfAccounts   from 'admin/components/chart-accounts/ChartOfAccounts.vue';
import AddChartAccounts  from 'admin/components/chart-accounts/AddChartAccounts.vue';
import ReportsOverview   from 'admin/components/reports/ReportsOverview.vue';
import ProductCategory   from 'admin/components/product-category/ProductCategory.vue';
import RecPaymentCreate  from 'admin/components/rec-payment/RecPaymentCreate.vue';
import BillCreate        from 'admin/components/bill/BillCreate.vue';
import PayBillCreate     from 'admin/components/pay-bill/PayBillCreate.vue';
import PurchaseCreate    from 'admin/components/purchase/PurchaseCreate.vue';
import PayPurchaseCreate from 'admin/components/pay-purchase/PayPurchaseCreate.vue';
import JournalList       from 'admin/components/journal/JournalList.vue';
import JournalCreate     from 'admin/components/journal/JournalCreate.vue';
import JournalModal      from 'admin/components/journal/JournalModal.vue';
import Transfer          from 'admin/components/transfers/Transfer.vue';
import ExpenseCreate     from 'admin/components/expense/ExpenseCreate.vue';
import Sales             from 'admin/components/transactions/sales/Sales.vue';
import Expenses          from 'admin/components/transactions/expenses/Expenses.vue';
import Purchases         from 'admin/components/transactions/purchases/Purchases.vue';
import NewTaxCategory    from 'admin/components/tax/NewTaxCategory.vue';
import TaxCategories     from 'admin/components/tax/TaxCategories.vue';
import NewTax            from 'admin/components/tax/NewTax.vue';
import TaxRates          from 'admin/components/tax/TaxRates.vue';
import NewTaxAgency      from 'admin/components/tax/NewTaxAgency.vue';
import TaxAgencies       from 'admin/components/tax/TaxAgencies.vue';
import PayTaxRecord      from 'admin/components/tax/PayTaxRecord.vue';
import TaxRecords        from 'admin/components/tax/TaxRecords.vue';
import TaxRateModal      from 'admin/components/tax/TaxRateModal.vue';
import TaxCatModal       from 'admin/components/tax/TaxCatModal.vue';
import TaxAgencyModal    from 'admin/components/tax/TaxAgencyModal.vue';
import BankAccounts      from 'admin/components/bank-accounts/BankAccounts.vue';
import RecPaymentModal   from 'admin/components/rec-payment/RecPaymentModal.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Dashboard,
            children: [
                {
                    path : '/dashboard',
                    name : 'Dashboard',
                    component: Dashboard,
                }
            ]
        },
        {
            path : '/users',
            name : 'Customers',
            component: People,
        },
        {
            path : '/transactions',
            name : 'Sales',
            component: Sales,
        },
        {
            path : '/inventory',
            name : 'Products',
            component: Products,
        },
        {
            path: '/customers',
            component: { render (c) { return c('router-view') } },
            children: [
                {
                    path : '',
                    name : 'Customers',
                    component: People,
                },
                {
                    path : 'page/:page',
                    name : 'PaginateCustomers',
                    component: People,
                },
                {
                    path : 'view/:id',
                    name : 'CustomerDetails',
                    component: PeopleDetails,
                }
            ]
        },
        {
            path: '/vendors',
            component: { render (c) { return c('router-view') } },
            children: [
                {
                    path: '',
                    name: 'Vendors',
                    component: People,
                },
                {
                    path : 'view/:id',
                    name : 'VendorDetails',
                    component: PeopleDetails,
                },
                {
                    path: 'page/:page',
                    name: 'PaginateVendors',
                    component: People,
                },
            ]
        },
        {
            path: '/employees',
            component: { render (c) { return c('router-view') } },
            children: [
                {
                    path: '',
                    name: 'Employees',
                    component: Employees,
                },
                {
                    path: 'page/:page',
                    name: 'PaginateEmployees',
                    component: Employees,
                },
            ]
        },
        {
            path: '/transactions/sales',
            name: 'Sales',
            component: Sales
        },
        {
            path: '/transactions/expenses',
            name: 'Expenses',
            component: Expenses
        },
        {
            path: '/transactions/purchases',
            name: 'Purchases',
            component: Purchases
        },
        {
            path: '/charts',
            component: { render (c) { return c('router-view') } },
            children: [
                {
                    path: '',
                    name: 'ChartOfAccounts',
                    component: ChartOfAccounts,
                },
                {
                    path: 'new',
                    name: 'AddChartAccounts',
                    component: AddChartAccounts,
                },
            ]
        },
        {
            path: '/banks',
            name: 'BankAccounts',
            component: BankAccounts
        },
        {
            path: '/journals',
            name: 'JournalList',
            component: JournalList
        },
        {
            path: '/invoices/new',
            name: 'InvoiceCreate',
            component: InvoiceCreate
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },
        {
            path: '/product_categories',
            name: 'ProductCategory',
            component: ProductCategory
        },
        {
            path: '/payments/new',
            name: 'RecPaymentCreate',
            component: RecPaymentCreate
        },
        {

            path: '/payments/:id',
            name: 'SinglePayment',
            component: RecPaymentModal
        },
        {
            path: '/bills/new',
            name: 'BillCreate',
            component: BillCreate
        },
        {
            path: '/pay-bills/new',
            name: 'PayBillCreate',
            component: PayBillCreate
        },
        {
            path: '/purchases/new',
            name: 'PurchaseCreate',
            component: PurchaseCreate
        },
        {
            path: '/pay-purchase/new',
            name: 'PayPurchaseCreate',
            component: PayPurchaseCreate
        },
        {
            path: '/reports',
            component: { render (c) { return c('router-view') } },
            children: [
                {
                    path: '',
                    name: 'ReportsOverview',
                    component: ReportsOverview,
                },
                {
                    path: 'trial-balance',
                    name: 'TrialBalance',
                    component: TrialBalance,
                },
            ]
        },
        {
            path: '/journals',
            component: { render (c) { return c('router-view') } },
            children: [
                {
                    path: '',
                    name: 'Journals',
                    component: JournalList,
                },
                {

                    path: '/journals/new',
                    name: 'JournalCreate',
                    component: JournalCreate
                },
                {

                    path: '/journals/:id',
                    name: 'SingleJournal',
                    component: JournalModal
                },
                {
                    path: 'page/:page',
                    name: 'PaginateJournals',
                    component: JournalList,
                },
            ]
        },
        {
            path: '/tax-rates',
            component: { render (c) { return c('router-view') } },
            children: [
                {
                    path: '',
                    name: 'TaxRates',
                    component: TaxRates,
                },
                {

                    path: '/tax-rates/new',
                    name: 'NewTax',
                    component: NewTax
                },
                {

                    path: '/tax-rates/:id',
                    name: 'SingleTaxRate',
                    component: TaxRateModal
                },
                {
                    path: 'page/:page',
                    name: 'PaginateTaxRates',
                    component: TaxRates,
                },
            ]
        },
        {
            path: '/tax-categories',
            component: { render (c) { return c('router-view') } },
            children: [
                {
                    path: '',
                    name: 'TaxCategories',
                    component: TaxCategories,
                },
                {

                    path: '/tax-categories/new',
                    name: 'NewTaxCategory',
                    component: NewTaxCategory
                },
                {

                    path: '/tax-categories/:id',
                    name: 'SingleTaxCategory',
                    component: TaxCatModal
                },
                {
                    path: 'page/:page',
                    name: 'PaginateTaxCategories',
                    component: TaxCategories,
                },
            ]
        },
        {
            path: '/tax-agencies',
            component: { render (c) { return c('router-view') } },
            children: [
                {
                    path: '',
                    name: 'TaxAgencies',
                    component: TaxAgencies,
                },
                {

                    path: '/tax-categories/new',
                    name: 'NewTaxAgency',
                    component: NewTaxAgency
                },
                {

                    path: '/tax-categories/:id',
                    name: 'SingleTaxAgency',
                    component: TaxAgencyModal
                },
                {
                    path: 'page/:page',
                    name: 'PaginateTaxAgencies',
                    component: TaxAgencies,
                },
            ]
        },
        {
            path: '/transfer/new',
            name: 'Transfer',
            component: Transfer
        },
        {
            path: '/expenses/new',
            name: 'ExpenseCreate',
            component: ExpenseCreate
        },
        {
            path: '/pay-tax',
            name: 'PayTaxRecord',
            component: PayTaxRecord
        },
        {
            path: '/tax-records',
            name: 'TaxRecords',
            component: TaxRecords
        },
    ]
})