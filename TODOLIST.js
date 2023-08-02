let arr=[];
const task_List=document.getElementById('list')
const input_box=document.getElementById('input-box');
const count_box=document.getElementById('count-box');
const img="F:/Downloads/trash3.svg";
function Noti(a){
	window.alert(a)
}

function addTaskList(data){
	const li=document.createElement('li');
	li.innerHTML=`<input type="checkbox" id="${data.id}" ${data.done ? "checked" :" "}>
	<label for="${data.id}" class='label'>${data.data} </label>
	<img src='${img}' data-id="${data.id}" class='Delete'>;
	`;
   task_List.append(li);
}


function Render_List(){
	task_List.innerHTML='';
	for(let i=0;i<arr.length;i++){
		addTaskList(arr[i]);
	}
	count_box.innerHTML=arr.length;
}


function Toggle(arrId){
	arr=arr.filter(function(data){
		return data.id == arrId;
	});
	if(arr.length>0){
		const reve=arr[0];
		reve.done = !reve.done;
		Render_List();
		Noti('Toggeld Successfully');
		return;
	}
	Noti('Toggeld not done');
}



function Delete(arrId){
	arr=arr.filter(function(data){
		return data.id !==arrId;
	});
	arr=arr;
	Render_List();
	Noti('Delete Successfully  :)');
}


function Main_Delete(e){
	const dele=e.target;
	if(dele.className=='Delete'){
		const tar=dele.dataset.id;
		Delete(tar);
	}
}

function AddData(data){
	if(data){
	arr.push(data);
	Render_List();
	Noti('Data Added  :)');
	return ;
	}
	Noti('Data Cannot be Added  :(');
}


function InputData(e){
	if(e.key=='Enter'){
		var data=e.target.value;
	}
	if(!data){
		console.log('Empty Data Is Not Allowed !!');
		return;
	}
	var obj={
		data,
		id:Date.now().toString(),
		done:false
	};
	e.target.value='';
	AddData(obj);
}


input_box.addEventListener('keyup',InputData);
document.addEventListener('click',Main_Delete);