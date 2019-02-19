;(($) => {
    $(document).ready(() => {
        let gMap = new google.maps.Map(document.getElementById("map"), {
            center: {lat: 40.676, lng: -73.949},
            zoom: 13
        });
        const marker = new google.maps.Marker({
            position: {lat: 40.697, lng: -73.953},
            map: gMap,
            icon: "images/pin.svg"
        });
    });
}) (jQuery);
