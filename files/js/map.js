$(document).ready(function () {
    var center = SMap.Coords.fromWGS84(14.4212353, 50.0801848);
    var m = new SMap(JAK.gel("map"), center, 17);
    m.addDefaultLayer(SMap.DEF_BASE).enable();
    m.addDefaultControls();

    var layer = new SMap.Layer.Marker();
    m.addLayer(layer);
    layer.enable();

    var options = {};
    var marker = new SMap.Marker(center, "myMarker", options);
    layer.addMarker(marker);
});