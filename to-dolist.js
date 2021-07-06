function clicked()
{
	document.write("hi");
	console.log("hello");
}

function getandAddItems()
{
	 var todo=document.getElementById('itm').value;
	
	console.log("updating list..");
	if(localStorage.getItem('itmjson')==null)
	{
		itemsarray = [];
		itemsarray.push(todo);
		localStorage.setItem('itmjson',JSON.stringify(itemsarray));


	}
	else
	{
		itemsarraystr=localStorage.getItem('itmjson');
		// console.log(itemsarraystr);
		 itemsarray=JSON.parse(itemsarraystr);
		 // console.log(itemsarray);
		itemsarray.push(todo);
		localStorage.setItem('itmjson',JSON.stringify(itemsarray));
	}
	// console.log(localStorage.getItem('itmjson'));

	let tableBody=document.getElementById('tablebody');
	let str='';
	itemsarray.forEach((element,index)=>{
		 str+=
	`<tr>
      <td scope="row">${index+1}</td>
      <td>${element}</td>
      <td><button class="btn btn-danger" onclick="remove(${index})">Delete</button></td>
    </tr>`

	});
	tableBody.innerHTML = str;

	
}

function addItems()
{
	 // var todo=document.getElementById('itm').value;
	
	console.log("updating list..");
	if(localStorage.getItem('itmjson')==null)
	{
		itemsarray = [];
		// itemsarray.push(todo);
		localStorage.setItem('itmjson',JSON.stringify(itemsarray));


	}
	else
	{
		itemsarraystr=localStorage.getItem('itmjson');
		// console.log(itemsarraystr);
		 itemsarray=JSON.parse(itemsarraystr);
		 // console.log(itemsarray);
		// itemsarray.push(todo);
		localStorage.setItem('itmjson',JSON.stringify(itemsarray));
	}
	// console.log(localStorage.getItem('itmjson'));

	let tableBody=document.getElementById('tablebody');
	let str='';
	itemsarray.forEach((element,index)=>{
		 str+=
	`<tr>
      <td scope="row">${index+1}</td>
      <td>${element}</td>
      <td><button class="btn btn-danger" onclick="remove(${index})">Delete</button></td>
    </tr>`

	});
	tableBody.innerHTML = str;

	
}



function remove(itemnumber)
{
	itemsarraystr=localStorage.getItem('itmjson');
	itemsarray=JSON.parse(itemsarraystr);
	itemsarray.splice(itemnumber,1);
	localStorage.setItem('itmjson',JSON.stringify(itemsarray));
	addItems();
}

function clr()
{
	var decsn=confirm("Do you wish to clear list?");
	if(decsn)
	{
		localStorage.clear();
	}
	addItems();
}