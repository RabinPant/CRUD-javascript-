function Employee(){
		return {
			firstName:"",
			lastName:"",
			email:"",
			contactNo:"",
			statuss:false,
			getFullName:function(){
				return this.firstName+ " " + this.lastName;
			}
		};
}



