import React, { useState, useEffect } from 'react';
import { Statistic, Card, Row, Col, Table, Pagination } from 'antd';
import { count } from '../../utils/index';
import './index.less';

const Home = () => {
  const columns = [
    {
      title: '系统名称',
      dataIndex: 'systemName',
    },
    {
      title: '是否通过第三方',
      dataIndex: "thirdParty",
      render: (text) => {
        return <span>{text === 0 ? '否' : '是'}</span>
      }
    },
    {
      title: '第三方交易量',
      dataIndex: 'thirdPartyNum',
      render: (text) => {
        if (text) {
          return <span>{text}笔</span>
        }
      }
    },
    {
      title: '自营交易量',
      dataIndex: 'nothirdPartyNum',
      render: (text) => {
        if (text) {
          return <span>{text}笔</span>
        }
      }
    },
    {
      title: '总交易量',
      dataIndex: 'allthirdPartyNum',
      render: (text) => {
        if (text) {
          return <span>{text}笔</span>
        }
      }
    },
    {
      title: '第三方交易金额',
      dataIndex: 'thirdPartyAmountNum',
      render: (text) => {
        return <span>{count(text)}</span>
      }
    },
    {
      title: '自营交易金额',
      dataIndex: 'supportAmountNum',
      render: (text) => {
        return <span>{count(text)}</span>
      }
    },
    {
      title: '总金额',
      dataIndex: 'totalAmount',
      render: (text) => {
        return <span>{count(text)}</span>
      }
    }
  ];
  const dataSource = [
    {
      key: '1',
      systemName: '旅行者',
      thirdParty: 0,
      thirdPartyNum: 30,
      nothirdPartyNum: 24,
      allthirdPartyNum: 54,
      thirdPartyAmountNum: 2100000,
      supportAmountNum: 1680000,
      totalAmount: 3780000
    },
    {
      key: '2',
      systemName: '漫步者',
      thirdParty: 1,
      thirdPartyNum: 20,
      nothirdPartyNum: 24,
      allthirdPartyNum: 44,
      thirdPartyAmountNum: 1400000,
      supportAmountNum: 1680000,
      totalAmount: 3080000
    },
    {
      key: '3',
      systemName: '探望者',
      thirdParty: 0,
      thirdPartyNum: 40,
      nothirdPartyNum: 24,
      allthirdPartyNum: 64,
      thirdPartyAmountNum: 2800000,
      supportAmountNum: 1680000,
      totalAmount: 4480000
    },
  ];
    const [dataList, setDataList] = useState([]);
    const [total, setTotal] = useState(1);
    useEffect(() => {
     
    }, [])
    const onShowSizeChange = (current, pageSize) => {
      console.log(current, pageSize);
    }
    return (
      <div className="home_box">
        <div className="home_title">
          <Row gutter={16}>
            <Col span={6}>
              <Card hoverable={true}>
                <Statistic
                  title="购买人数"
                  value={90}
                  // precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  // prefix={<Icon type="arrow-up" />}
                  suffix="人"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card hoverable={true}>
                <Statistic
                  title="成功订单"
                  value={90}
                  // precision={2}
                  valueStyle={{ color: 'green' }}
                  // prefix={<Icon type="arrow-down" />}
                  suffix="笔"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card hoverable={true}>
                <Statistic
                  title="交易金额"
                  value={11.28}
                  // precision={2}
                  valueStyle={{ color: 'yellow' }}
                  // prefix={<Icon type="arrow-up" />}
                  suffix="￥"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card hoverable={true}>
                <Statistic
                  title="交易单数"
                  value={93}
                  // precision={2}
                  valueStyle={{ color: 'orange' }}
                  // prefix={<Icon type="arrow-down" />}
                  suffix="笔"
                />
              </Card>
            </Col>
          </Row>
        </div>
        <div className="home_data" id="container">
        </div>
        <div className="home_table">
        <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        size="middle" />
          <div className="home_page">
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            pageSizeOptions={['10', '20', '30', '40']}
            current={1}
            total={total}
          />
          </div>
        </div>
      </div>
    );
}

export default Home;
