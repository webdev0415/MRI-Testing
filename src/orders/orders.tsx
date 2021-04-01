import React, { useEffect } from 'react';
import { Table, Row, Skeleton, Empty } from 'antd';
import columns from './columns';
import './style.scss';
import { connect } from 'react-redux';
import { fetchOrders as fetchOrdersAction } from '../actions/orders';

interface DataType {
    key: React.Key;
    order_number: number;
    status: string;
    customer: { first_name: string; last_name: string; address:{line1:string }};
    order_details: { value: number, date: string};
    shipping_details: { date: string};
  }
 
const OrdersTable = ({orders,fetchOrders}:any) => {

    useEffect(()=>{
        fetchOrders();
    },[fetchOrders])

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
          disabled: record.status === null,
          order_number: record.order_number,
        }),
      };

return(
    <div className="page">
      <Row>
        <Table
          rowKey={record => record.order_number}
          pagination={{
            position: ['bottomRight'],
            current: 1,
            pageSize: 10,
            total:100,
          }}
          rowSelection={{
            ...rowSelection,
          }}
          title={() => {
            return (
              <div className="card-header">
                <h1 className="title">Orders</h1>
              </div>
            );
          }}
          className="table"
          dataSource={orders.data ? orders.data : []}
          locale={{
            emptyText: orders.loading ? <Skeleton active /> : <Empty />,
          }}
          columns={[...columns]}
          scroll={{ x: 800 }}
        />
      </Row>
    </div>
)
}
const mapStateToProps = (state:any) => ({
    orders: state.orders,
  });
  
  const mapDispatchToProps = (dispatch:any) => ({
    fetchOrders: () => dispatch(fetchOrdersAction()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(OrdersTable);
