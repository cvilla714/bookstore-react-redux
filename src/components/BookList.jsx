import React, { Fragment } from 'react';

const BookList = () => {
	return (
		<Fragment>
			<Table striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Harry Potter</td>
						<td>Sci-fi</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Star trek</td>
						<td>Sci-fi</td>
					</tr>
				</tbody>
			</Table>
		</Fragment>
	);
};

export default BookList;
