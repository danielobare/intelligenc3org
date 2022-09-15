import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class AddSecurityModal extends React.Component {
  formRef = React.createRef();
  state = {
    visible: false,
  };

  onFinish = (values) => {
    const url = "api/v1/securities/";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          this.handleCancel();

          return data.json();
        }
        throw new Error("There is an error");
      })
      .then(() => {
        this.props.reloadSecurities();
      })
      .catch((err) => console.error("Error:  " + err));
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create New +
        </Button>

        <Modal
          title="Add New Security concern ..."
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item
              name="place"
              label="Place"
              rules={[
                { required: true, message: "Please input place of security issue" },
              ]}
            >
              <Input placeholder="Input your security description" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: "Please enter casulaties" },
              ]}
            >
              <Input placeholder="Input security issue description" />
            </Form.Item>

            <Form.Item
              name="country"
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Please enter country where incident occurred.",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Select country of security concern"
                optionFilterProp="children"
                style={{ width: "100%" }}
              >
                <Option value="South Africa">South Africa</Option>
                <Option value="Europe">Europe</Option>
                <Option value="Netherlands">Netherlands</Option>
                <Option value="Kenya">Kenya</Option>
                <Option value="USA">USA</Option>
                <Option value="Zimbabwe">Zimbabwe</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[
                { required: true, message: "Please input the quantity!" },
              ]}
            >
              <Input type="number" placeholder="Number of security concerns" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default AddSecurityModal;
