function MyList ({ products }) {
	const listItems = products.map(product => {
		return (
			<li key={product.id}>
				- {product.title}
			</li>
		);
	});
	
	return (
		<ul>{listItems}</ul>
	);
}

export default MyList;