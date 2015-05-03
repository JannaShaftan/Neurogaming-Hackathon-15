	// main javascript
	var sysTime;
	var engine = EmoEngine.instance();
	var es = new EmoState();


	function init(){
engine.Connect(); //Connect to EPOC

EdkDll.EE_EngineGetNextEvent(); //Get current Event of EPOC 

EdkDll.EE_EmoEngineEventGetEmoState(); //Get current State of Event 

es. GetTimeFromStart(); //Get time of current State 

es.ES_GetContactQualityFromAllChannels(); //Get value of Contact Quality 

es.ExpressivIsBlink(); //Currently, you are blinkState

		}