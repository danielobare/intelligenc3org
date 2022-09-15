import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddSecurityModal from "./AddSecurityModal";

class Securities extends React.Component {
	columns = [
		{
			title: "Brand",
			dataIndex: "brand",
			key: "brand",
		},
		{
			title: "Style",
			dataIndex: "style",
			key: "style",
		},
		{
			title: "Country",
			dataIndex: "country",
			key: "country",
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			key: "quantity",
		},
		{
			title: "",
			key: "action",
			render: (_text, record) => (
				<Popconfirm
					title="Are you sure delete this security concern?"
					onConfirm={() => this.deleteSecurity(record.id)}
					okText="Yes"
					cancelText="No"
				>
					<a href="#" type="danger">
						Delete{" "}
					</a>
				</Popconfirm>
			),
		},
	];

	state = {
		securities: [],
	};

	componentDidMount() {
		this.loadSecurities();
	}

	loadSecurities = () => {
		const url = "api/v1/securities/index";
		fetch(url)
			.then((data) => {
				if (data.ok) {
					return data.json();
				}
				throw new Error("There is an error");
			})
			.then((data) => {
				data.forEach((security) => {
					const newEl = {
						key: security.id,
						id: security.id,
						place: security.place,
						description: security.description,
						country: security.country,
						casualties: security.casualties,
					};

					this.setState((prevState) => ({
						securities: [...prevState.securities, newEl],
					}));
				});
			})
			.catch((err) => message.error("Error: " + err));
	};

	reloadSecurities = () => {
		this.setState({ securities: [] });
		this.loadSecurities();
	};

	deleteSecurity = (id) => {
		const url = `api/v1/securities/${id}`;

		fetch(url, {
			method: "delete",
		})
			.then((data) => {
				if (data.ok) {
					this.reloadSecurities();
					return data.json();
				}
				throw new Error("There is an error");
			})
			.catch((err) => message.error("Error:  " + err));
	};

	render() {
		return (
			<>
				<Table
					className="table-striped-rows"
					dataSource={this.state.securities}
					columns={this.columns}
					pagination={{ pageSize: 5 }}
				/>

				<AddBeerModal reloadSecurities={this.reloadSecurities} />
			</>
		);
	}
}

export default Securities;
