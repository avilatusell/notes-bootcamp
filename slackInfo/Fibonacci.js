function fibonacci(n){
	var arr = [0,1];
	for (i = 1; i <= n; i++){
		arr.push(arr[i] + arr[i-1]);
	}
}