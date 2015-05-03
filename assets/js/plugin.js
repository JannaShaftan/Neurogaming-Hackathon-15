function ELSPlugin()
	{
		return document.getElementById('plugin0');
	}
	function pluginLoaded() 
    {
        //alert("Plugin loaded!");
    }
	//check plugin is exist
	function checkPluginExits()
	{
		var L = navigator.plugins.length;
		for(var i = 0; i < L; i++)
		{
			console.log(
				navigator.plugins[i].name +
				" | " +
				navigator.plugins[i].filename +
				" | " +
				navigator.plugins[i].description +
				" | " +
				navigator.plugins[i].version +
				"<br>"
			);
			if(navigator.plugins[i].name=="EmotivLifeSciences")
			{
				console.log("Good to go")
				return true;
				break;
			}
		}
		return false;
	}
	//if not exist and notify to download
	window.onload=function()
	{
		if(!checkPluginExits())
		{
			var confirmDownload = confirm("Download plugin (Please restart your browser after install plugin)?");
			if (confirmDownload == true)
			{
				window.location.href=('download.php');
			}
		}
		init();
	};
	