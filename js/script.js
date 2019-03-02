$(document).ready(function() {
	    videoIframe = document.getElementById('videoIframe'); // YouTube embed Iframe
	window.onresize = iframeResize;                           // Auto-resize iframe concurrently with window
	         mapImg = document.getElementById('mapImg');      // Florida map image
	         videos = new Array();                            // YouTube embed codes
	        regions = document.getElementById('floridaMap').getElementsByTagName('area'); // image map areas (Florida Map)

	$('map').imageMapResize(); // scale image map coords to fit current mapImg dimensions

	for (i = 0; i < regions.length; i++) // run for all regions (prefix)
		{
			videos.push('http://www.youtube.com/embed/'); // Default YouTube embed prefix
		};
	for (i = 0; i < regions.length; i++) // run for all regions (specific embed codes)
		{
			if (i==0)  videos[i] += 'hJ8m2WTaSFc'; // UWF
			if (i==1)  videos[i] += 'VDxdnlepsq4'; // GCSC - PICTURE AND QUOTE
			if (i==2)  videos[i] += 'cWVMrmjSZj0'; // FAMU - PICTURE AND QUOTE
			if (i==3)  videos[i] += '9dfEdsMqcVo'; // UNF
			if (i==4)  videos[i] += '6m8E4oezX9c'; // UCF
			if (i==5)  videos[i] += 'ws2fo-tnYRk'; // USF
			if (i==6)  videos[i] += 'm5MR8yD5Uqg'; // IRSC
			if (i==7)  videos[i] += 'tiQYteISpHI'; // FGCU
			if (i==8)  videos[i] += 'Y8kXbwIUWPk'; // PBSC
			if (i==9)  videos[i] += '436BnQoe1OI'; // Fort Lauderdale
			if (i==10) videos[i] += 'wQ-exPU3APE'; // FIU - PICTURE AND QUOTE
			if (i==11) videos[i] += 'eC2OMHJBGmU'; // Key West - PICTURE AND QUOTE
		};
	iframeResize(); // initial iframe dimensions reset
});
/*
 * repairs iframe dimensions
 */
function iframeResize()
{
	x = 560; // default YouTube width
	y = 315; // default YouTube height
	videoIframe.style.height = (y / x) * videoIframe.clientWidth + 'px'; // sets iframe to default ratio
}
/*
 * shows separate image for each regions when hovering over matching map area
 * @param: region = map area
 */
function mapHover(region)
{
	mapImg.src = 'img/map/' + region.title + '.png'; // Sets mapImg src to file named (@param.title).png
}
/*
 * shows specific YouTube video for each region
 * @param: region = map area
 */
function mapClick(region)
{
	   mapClick.currentRegion = region;  // static reference to currently selected region

	for (i = 0; i < regions.length; i++) // run for all regions
		{
			if(region.title == regions[i].title) // checks for match b/w @param title and index title
				{
					videoIframe.src = videos[i]; // sets iframe src to matching index's value
				}
		};
	iframeResize(); //resizes iframe onclick (helps size first iframe)
}
/*
 * sets mapImg src to file named (mapClick.currentRegion.title).png
 */
function mapRestore()
{
	mapImg.src = 'img/map/' + mapClick.currentRegion.title + '.png'; // reset mapImg src
}