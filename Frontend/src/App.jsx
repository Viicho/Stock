import { useState } from "react";
import "./App.css";
import {
	ShoppingCartOutlined,
	EditOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import { Button, Input, Table } from "antd";

function App() {

	const dataSource = [
		{
			nombre: "super 8",
			precio: 20.000,
			stock: 10
		}
	]


	const columns = [
		{
			title: "Nombre",
			dataIndex: "nombre",
			key: "nombre",
		},
		{
			title: "Precio",
			dataIndex: "precio",
			key: "precio",
		},
		{
			title: "Stock",
			dataIndex: "stock",
			key: "stock",
		},
		{
			title: "Acciones",
			dataIndex: "acciones",
			key: "acciones",
			render: (_, record) => (
				<>
					<EditOutlined style={{ color: "blue", fontSize: "20px" }} />
					<DeleteOutlined
						style={{
							color: "#eb2f96",
							padding: "10px",
							fontSize: "20px",
						}}
					/>
				</>
			),
		},
	];

	return (
		<>
			<header>
				<ShoppingCartOutlined style={{ fontSize: "40px" }} />
				<nav>
					<ul>
						<li>Foo</li>
						<li>Foo</li>
						<li>Foo</li>
						<li>Foo</li>
						<li>Foo</li>
						<li>Foo</li>
					</ul>
				</nav>
			</header>
			<div className="acciones">
				<Button>Agregar producto</Button>
				<Input placeholder="Filtrado de producto" />
			</div>
			<Table columns={columns} dataSource={dataSource} />
		</>
	);
}

export default App;
