//your code here
function majorityElement(arr){
	let count=0,ele=0;
	for(let i=0;i<arr.length;i++){
		if(count===0){
			ele=arr[i];
			count=1;
		}else if(ele===arr[i]){
			count++;
		}else{
			count--;
		}
	}

	let majority = Math.floor(arr.length/2);
	count=0;
	for(let i=0;i<arr.length;i++){
		if(ele===arr[i]) count++;
	}
	if(count>majority){
		return ele;
	}else{
		return null
	}
}

alert(majorityElement(arr));