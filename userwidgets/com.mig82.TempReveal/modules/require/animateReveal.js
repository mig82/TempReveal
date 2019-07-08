/**
* Slide right the lid to allow the underlying secret to be seen.
*/
define(function () {

	const doNothing = ()=>{};
	const steps = {
		100: {
			"left": "50%",
			"stepConfig": {
				"timingFunction": kony.anim.EASE_IN_OUT
			}
		}
	};

	const config = {
		"duration": 0.25,
		"iterationCount": 1,
		"delay": 0,
		"fillMode": kony.anim.FILL_MODE_FORWARDS
	};

	function animateReveal(lidFlex){

		try{
			var animation = kony.ui.createAnimation(steps);
			lidFlex.animate(animation, config, {
				animationStart: doNothing,
				animationEnd: doNothing
			});
		}
		catch(e){
			kony.print(`Problem animating:\n\t${e}`);
		}
	}

    return animateReveal;
});