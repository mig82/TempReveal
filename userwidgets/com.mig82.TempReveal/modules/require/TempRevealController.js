define(["./animateReveal"], function(animateReveal) {

	return {
		reveal: function(){
			animateReveal(this.view.lidFlex);
			kony.print("*******reveal");
		},

		preShow: function(){
			this.view.lidFlex.left = "0%";
		},

		postShow: function(){

			if(typeof window === "function"){
				this.view.gestureIconLabel.onTouchEnd = this.reveal;
				kony.print("*******Added onTouchEnd");
			}
			else{
				this.view.lidFlex.setGestureRecognizer(2, {
					fingers: 1,
					swipedistance: 50,
					swipevelocity: 75
				}, this.reveal);
				kony.print("*******Added gesture recogniser");
			}
		},

		onHide: function(){},

		constructor: function(/*baseConfig, layoutConfig, pspConfig*/) {
			this.view.preShow = this.preShow;
			this.view.postShow = this.postShow;
			this.view.onHide = this.onHide;
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});