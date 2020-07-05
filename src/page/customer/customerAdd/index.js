import React, { Component } from 'react';
import { Button, Table, Modal, Form, Input, Cascader } from 'antd';
import './index.less';
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
          const options = [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ];
      return (
        <Modal
          visible={visible}
          title="客户录入"
          okText="新增"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form {...formItemLayout}>
            <Form.Item label="姓名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入姓名!' }],
              })(<Input placeholder="请输入客户姓名"/>)}
            </Form.Item>
            <Form.Item label="住址">
              {getFieldDecorator('address', {
                rules: [{ required: true, message: '请选择住址!' }],
              })(<Cascader options={options} placeholder="请选择地址" />)}
            </Form.Item>
            <Form.Item label="国籍">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入国籍!' }],
              })(<Input placeholder="请输入客户国籍"/>)}
            </Form.Item>
            <Form.Item label="联系方式">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入联系方式!' }],
              })(<Input placeholder="请输入联系方式" maxLength={11}/>)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);
class CustomerADD extends Component{
  constructor (props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  };

  handleCancel = () => {
    this.setState({
      visible: false
    })
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({
        visible: false
      })
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render () {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '国籍',
        dataIndex: 'nationality',
        key: 'nationality',
      },
      {
        title: '联系方式',
        dataIndex: 'contact',
        key: 'contact',
      },
      {
        title: "录入时间",
        dataIndex: "addTime",
        key: "addTime"
      }
    ];
    return (
      <div className="customer_box">
        <div className="customer_title">
          <Button type="primary" onClick={this.showModal}>客户录入</Button>
        </div>
        <div className="customer_table">
        <Table dataSource={dataSource} columns={columns} />
        </div>
        <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
      </div>
    )
  }
}

export default CustomerADD