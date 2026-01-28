function insert_Row(){
	let table=document.getElementById('sampleTable');
	let tr=document.createElement('tr');
	tr.innerHTML=`<td>New Cell1</td>
		<td>New Cell2</td>`;
	table.prepend(tr);
}
