function EmployeeService(){
	return {
		list:[],

		insert:function(emp){
			this.list.push(emp);
		},

		getAll:function(){
			this.list;
		},
		getById:function(id){
			for(var i=0;i<this.list.length;i++){
				var emp = this.list[i];
				if(emp.id==id){
					return emp;
				}
			}
			return null;
		},
		count:function(){
			return this.list.length;
		},
		getByIndex:function(index){
			return this.list[index];
		},
		getInsertId:function(){
			var size = this.count();
			if(size == 0){
				return 1;
			}
			var emp = this.getByIndex(size-1);
			return emp.id+1;
		}
	};
}

