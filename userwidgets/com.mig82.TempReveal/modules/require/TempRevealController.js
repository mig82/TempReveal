define(["./animateReveal"], function(animateReveal) {

	//TODO: Expose this as a configurable value.
	var duration = 10; //seconds;
	const timerId = "TempReveal.countDown";

	//FontAwesome sand clocks.
	const SAND_FULL = "\uF251";
	const SAND_HALF = "\uF252";
	const SAND_DONE = "\uF253";

	return {
		toggleCountAndClockVisibility: function(){
			var counterLabel = this.view.counterLabel;
			var clockIconLabel = this.view.clockIconLabel;

			if(counterLabel.zIndex > 0){
				this.clockZ = counterLabel.zIndex;
				counterLabel.zIndex = clockIconLabel.zIndex = 0;
			}
			else{
				counterLabel.zIndex = clockIconLabel.zIndex = this.clockZ;
			}
		},
		countDown: function(){
			this.view.counterLabel.text = --this.timer;
			kony.print("*******Updating clock:" + this.timer);

			if(this.timer >= 8){
				this.view.clockIconLabel.text = SAND_FULL;
			}
			else if(this.timer >=4){
				this.view.clockIconLabel.text = SAND_HALF;
			}
			else if(this.timer > 0){
				this.view.clockIconLabel.text = SAND_DONE;
			}
			else{
				kony.timer.cancel(timerId);
				this.toggleCountAndClockVisibility();
			}
		},

		startCountDown: function(){
			this.view.counterLabel.text = this.timer = duration;
			this.toggleCountAndClockVisibility();
			kony.timer.schedule(timerId, this.countDown, 1, true);
		},

		reveal: function(){
			animateReveal(this.view.lidFlex)
			.then(() => {
				this.startCountDown();
			});
		},

		preShow: function(){
			this.view.lidFlex.left = "0%";
			this.toggleCountAndClockVisibility();
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