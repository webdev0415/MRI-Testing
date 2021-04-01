
function convertDate(dateString: string){
    var event = new Date(dateString);
    let date = JSON.stringify(event)
    return date = date.slice(1,11);
};

const columns = [
    {
        title: 'Order Number',
        dataIndex: 'order_number',
        key: 'order_number',
        sorter: (a:any, b:any) => (a.order_number > b.order_number ? 1 : -1),
        render: (order_number: number) => `${order_number}`,
    },
    {
      title: 'Customer Name',
      dataIndex: 'customer',
      sorter: (a:any, b:any) => (a.customer.first_name > b.customer.first_name ? 1 : -1),
      key: 'customer',
      render: (customer: { first_name: string; last_name: string; }) => `${customer.first_name} ${customer.last_name}`,
    },
    {
        title: 'Customer Address',
        dataIndex: 'customer',
        key: 'customer_address',
        sorter: (a:any, b:any) => (a.customer.address.line1 > b.customer.address.line1 ? 1 : -1),
        render: (customer_address: {address: {line1: string}}) => `${customer_address.address.line1}`,
    },
    {
        title: 'Order Value',
        dataIndex: 'order_details',
        key: 'order_details',
        sorter: (a:any, b:any) => (a.order_details.value > b.order_details.value ? 1 : -1),
        render: (order_details: {value: number}) => `$${order_details.value}`,
    },
    {
        title: 'Order Date',
        dataIndex: 'order_details',
        key: 'order_details_date',
        sorter: (a:any, b:any) => (a.order_details.date > b.order_details.date ? 1 : -1),
        render: (order_details: {date: string}) => `${convertDate(order_details.date)}`,
    },
    {
        title: 'Ship Date',
        dataIndex: 'shipping_details',
        key: 'shipping_details',
        sorter: (a:any, b:any) => (a.shipping_details.date > b.shipping_details.date ? 1 : -1),
        render: (shipping_details: {date: string}) => `${convertDate(shipping_details.date)}`,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a:any, b:any) => (a.status > b.status ? 1 : -1),
        render: (status: string) => `${status}`,
    },
  ];
  export default columns;