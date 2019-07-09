define(function(){
	return{
		postShow: function(){
			this.view.TempReveal.onSecretShown = () => {
				kony.print("*******onSecretShown");
			};
			this.view.TempReveal.onSecretHidden = () => {
				kony.print("*******onSecretHidden");
			};
		},

		onNavigate: function(){
			this.view.postShow = this.postShow;
		}
	};
});