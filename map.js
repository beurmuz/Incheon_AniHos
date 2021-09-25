        var bounds = null;
    

    var map_5f6b3c1b1d554d4cb6c8413f0b648a17 = L.map(
        'map_5f6b3c1b1d554d4cb6c8413f0b648a17', {
        center: [37.45607486154619, 126.70590497551922],
        zoom: 12,
        maxBounds: bounds,
        layers: [],
        worldCopyJump: false,
        crs: L.CRS.EPSG3857,
        zoomControl: true,
        });


    
    var tile_layer_a224c9faf50a42908f581db77b5173e5 = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
        "attribution": null,
        "detectRetina": false,
        "maxNativeZoom": 18,
        "maxZoom": 18,
        "minZoom": 0,
        "noWrap": false,
        "opacity": 1,
        "subdomains": "abc",
        "tms": false
}).addTo(map_5f6b3c1b1d554d4cb6c8413f0b648a17);
    

        var tile_layer_7a45600274d74e94863775453fb1b411 = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
        "attribution": null,
        "detectRetina": false,
        "maxNativeZoom": 18,
        "maxZoom": 18,
        "minZoom": 0,
        "noWrap": false,
        "opacity": 1,
        "subdomains": "abc",
        "tms": false
} );

        var mini_map_28613752b8854ce480f9541a5a3ac6e7 = new L.Control.MiniMap( tile_layer_7a45600274d74e94863775453fb1b411,
         {
  "autoToggleDisplay": false,
  "centerFixed": false,
  "collapsedHeight": 25,
  "collapsedWidth": 25,
  "height": 150,
  "minimized": false,
  "position": "bottomright",
  "toggleDisplay": false,
  "width": 150,
  "zoomAnimation": false,
  "zoomLevelFixed": null,
  "zoomLevelOffset": -5
});
        map_5f6b3c1b1d554d4cb6c8413f0b648a17.addControl(mini_map_28613752b8854ce480f9541a5a3ac6e7);

        
    
            var marker_cluster_44202f4780704ba0b7dfbb81c0218aed = L.markerClusterGroup({});
            map_5f6b3c1b1d554d4cb6c8413f0b648a17.addLayer(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
            
    
        var marker_c7d67ca808ea4ded94d4a9162c1f7c95 = L.marker(
            [37.4582978, 126.686571],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_bbbfa57f762245059fcc237510d47142 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_c7d67ca808ea4ded94d4a9162c1f7c95.setIcon(icon_bbbfa57f762245059fcc237510d47142);
            
    
            var popup_972e8120f0514c99a4fcd2eaa001d373 = L.popup({maxWidth: '100%'
            
            });

            
                var html_6198c1958acf43cb955e18587d8bd404 = $(`<div id="html_6198c1958acf43cb955e18587d8bd404" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>중앙동물약품병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-424-3331<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 경인로 417-1 (주안동)<br></div>`)[0];
                popup_972e8120f0514c99a4fcd2eaa001d373.setContent(html_6198c1958acf43cb955e18587d8bd404);
            

            marker_c7d67ca808ea4ded94d4a9162c1f7c95.bindPopup(popup_972e8120f0514c99a4fcd2eaa001d373)
            ;

            
        
    
        marker_c7d67ca808ea4ded94d4a9162c1f7c95.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_cd94933b2a434cbd89c24f81633e1e0e = L.marker(
            [37.4514844, 126.68252],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_6419efb4c8aa476794b9541086410d5b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_cd94933b2a434cbd89c24f81633e1e0e.setIcon(icon_6419efb4c8aa476794b9541086410d5b);
            
    
            var popup_5e7a6dce31d949c593fcecbb7c248175 = L.popup({maxWidth: '100%'
            
            });

            
                var html_75d5cf1d8b2c448f89f149cfd4aba03f = $(`<div id="html_75d5cf1d8b2c448f89f149cfd4aba03f" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>시민동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-426-4545<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 인주대로 413 (주안동)<br></div>`)[0];
                popup_5e7a6dce31d949c593fcecbb7c248175.setContent(html_75d5cf1d8b2c448f89f149cfd4aba03f);
            

            marker_cd94933b2a434cbd89c24f81633e1e0e.bindPopup(popup_5e7a6dce31d949c593fcecbb7c248175)
            ;

            
        
    
        marker_cd94933b2a434cbd89c24f81633e1e0e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e8af93a033a04c6ab3dbc89a22b3b01e = L.marker(
            [37.4507391, 126.636673],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b67eab3fe0af420187d4b17818e8644b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e8af93a033a04c6ab3dbc89a22b3b01e.setIcon(icon_b67eab3fe0af420187d4b17818e8644b);
            
    
            var popup_166cbbf1db9e4343983ab046af1bf0fe = L.popup({maxWidth: '100%'
            
            });

            
                var html_8da96a927f0b4b17b1fe965a7f5ba75b = $(`<div id="html_8da96a927f0b4b17b1fe965a7f5ba75b" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>한국동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-887-2952<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 낙섬중로 25 (용현동)<br></div>`)[0];
                popup_166cbbf1db9e4343983ab046af1bf0fe.setContent(html_8da96a927f0b4b17b1fe965a7f5ba75b);
            

            marker_e8af93a033a04c6ab3dbc89a22b3b01e.bindPopup(popup_166cbbf1db9e4343983ab046af1bf0fe)
            ;

            
        
    
        marker_e8af93a033a04c6ab3dbc89a22b3b01e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e0ed5daa1a6146ad8d692dd2026a54d2 = L.marker(
            [37.4528795, 126.63828999999998],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_01c9a3ab280b4b4f98d1f4d189606752 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e0ed5daa1a6146ad8d692dd2026a54d2.setIcon(icon_01c9a3ab280b4b4f98d1f4d189606752);
            
    
            var popup_72358dfad1354db9bc82cecc5d478aaa = L.popup({maxWidth: '100%'
            
            });

            
                var html_523a16f645f443428886e000974397f6 = $(`<div id="html_523a16f645f443428886e000974397f6" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>안상수동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-887-1537<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 낙섬중로 53, 1층 (용현동)<br></div>`)[0];
                popup_72358dfad1354db9bc82cecc5d478aaa.setContent(html_523a16f645f443428886e000974397f6);
            

            marker_e0ed5daa1a6146ad8d692dd2026a54d2.bindPopup(popup_72358dfad1354db9bc82cecc5d478aaa)
            ;

            
        
    
        marker_e0ed5daa1a6146ad8d692dd2026a54d2.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_ef1fa942fb5144ba9992479fe0879afc = L.marker(
            [37.4482159, 126.67999099999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_6e9a42598ef648ec8c24c06133e4a262 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_ef1fa942fb5144ba9992479fe0879afc.setIcon(icon_6e9a42598ef648ec8c24c06133e4a262);
            
    
            var popup_baf96dd3b94949b38b15dc0c9d04e37d = L.popup({maxWidth: '100%'
            
            });

            
                var html_32c835f9441e48e7ac20de50934b554b = $(`<div id="html_32c835f9441e48e7ac20de50934b554b" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>24시 건국 본 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-864-0075<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 인하로 287, 2층 (주안동)<br></div>`)[0];
                popup_baf96dd3b94949b38b15dc0c9d04e37d.setContent(html_32c835f9441e48e7ac20de50934b554b);
            

            marker_ef1fa942fb5144ba9992479fe0879afc.bindPopup(popup_baf96dd3b94949b38b15dc0c9d04e37d)
            ;

            
        
    
        marker_ef1fa942fb5144ba9992479fe0879afc.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e47d6b15bf3a4ff7bf5ee043b83bb70a = L.marker(
            [37.443806200000004, 126.662517],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_93d21c8477d14427b8169f081897e47d = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e47d6b15bf3a4ff7bf5ee043b83bb70a.setIcon(icon_93d21c8477d14427b8169f081897e47d);
            
    
            var popup_04552853c6ea40039d411f8a37aa0160 = L.popup({maxWidth: '100%'
            
            });

            
                var html_212a04faff4849ad9c118fe64bd8d1e4 = $(`<div id="html_212a04faff4849ad9c118fe64bd8d1e4" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>지오동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-872-7582<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 소성로 121 (학익동)<br></div>`)[0];
                popup_04552853c6ea40039d411f8a37aa0160.setContent(html_212a04faff4849ad9c118fe64bd8d1e4);
            

            marker_e47d6b15bf3a4ff7bf5ee043b83bb70a.bindPopup(popup_04552853c6ea40039d411f8a37aa0160)
            ;

            
        
    
        marker_e47d6b15bf3a4ff7bf5ee043b83bb70a.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_410fd58c92324074a2967665b05d7a8a = L.marker(
            [37.4557334, 126.655569],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_3a45c1b5973f4f5b90fd4e84c61c76c5 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_410fd58c92324074a2967665b05d7a8a.setIcon(icon_3a45c1b5973f4f5b90fd4e84c61c76c5);
            
    
            var popup_f8e4d55fb18d4eb8b656b1b4ad017341 = L.popup({maxWidth: '100%'
            
            });

            
                var html_d1a2d6e8771b4f4fadcc64dd7688bf5f = $(`<div id="html_d1a2d6e8771b4f4fadcc64dd7688bf5f" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>온누리동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-866-5725<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 인주대로 168 (용현동)<br></div>`)[0];
                popup_f8e4d55fb18d4eb8b656b1b4ad017341.setContent(html_d1a2d6e8771b4f4fadcc64dd7688bf5f);
            

            marker_410fd58c92324074a2967665b05d7a8a.bindPopup(popup_f8e4d55fb18d4eb8b656b1b4ad017341)
            ;

            
        
    
        marker_410fd58c92324074a2967665b05d7a8a.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_ae05c7e1253544aa9f06ce37351309e7 = L.marker(
            [37.464329, 126.677842],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_963d1d1ce3704cc9a1478bb923475ff8 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_ae05c7e1253544aa9f06ce37351309e7.setIcon(icon_963d1d1ce3704cc9a1478bb923475ff8);
            
    
            var popup_c3b88a91eca44e239e954bafa5bf3172 = L.popup({maxWidth: '100%'
            
            });

            
                var html_7eb910ee8d974ecaa8a1be5d970a3c27 = $(`<div id="html_7eb910ee8d974ecaa8a1be5d970a3c27" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>아라종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-886-0079<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 주안로 73 (주안동)<br></div>`)[0];
                popup_c3b88a91eca44e239e954bafa5bf3172.setContent(html_7eb910ee8d974ecaa8a1be5d970a3c27);
            

            marker_ae05c7e1253544aa9f06ce37351309e7.bindPopup(popup_c3b88a91eca44e239e954bafa5bf3172)
            ;

            
        
    
        marker_ae05c7e1253544aa9f06ce37351309e7.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_877dd1220e80479287194728200fe9ee = L.marker(
            [37.466685999999996, 126.679822],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_c145e26664bb42edae5a966ee5ecea1c = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_877dd1220e80479287194728200fe9ee.setIcon(icon_c145e26664bb42edae5a966ee5ecea1c);
            
    
            var popup_2856df579a5c4ca985df560e839b3166 = L.popup({maxWidth: '100%'
            
            });

            
                var html_17f1fb02388447abb59301b0f1d93cb6 = $(`<div id="html_17f1fb02388447abb59301b0f1d93cb6" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>주안동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-203-0075<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 석정로 400 (주안동)<br></div>`)[0];
                popup_2856df579a5c4ca985df560e839b3166.setContent(html_17f1fb02388447abb59301b0f1d93cb6);
            

            marker_877dd1220e80479287194728200fe9ee.bindPopup(popup_2856df579a5c4ca985df560e839b3166)
            ;

            
        
    
        marker_877dd1220e80479287194728200fe9ee.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_480e65470fad40b3b914be74c7266cc8 = L.marker(
            [37.4524969, 126.667428],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_76f48bb748f647d5bf5713cd5a0454e8 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_480e65470fad40b3b914be74c7266cc8.setIcon(icon_76f48bb748f647d5bf5713cd5a0454e8);
            
    
            var popup_89f86545f2f241d98bb7f6fe8002b745 = L.popup({maxWidth: '100%'
            
            });

            
                var html_6a8df85771ee4452a161b439eda21732 = $(`<div id="html_6a8df85771ee4452a161b439eda21732" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>삼성동물종합병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-868-2526<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 인주대로 277 (주안동)<br></div>`)[0];
                popup_89f86545f2f241d98bb7f6fe8002b745.setContent(html_6a8df85771ee4452a161b439eda21732);
            

            marker_480e65470fad40b3b914be74c7266cc8.bindPopup(popup_89f86545f2f241d98bb7f6fe8002b745)
            ;

            
        
    
        marker_480e65470fad40b3b914be74c7266cc8.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_2b08643ae72e4363aa8f7eb9be3cd476 = L.marker(
            [37.45817879999999, 126.67916899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_4d1f5f40f3eb4468b4d215d45fe7b069 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_2b08643ae72e4363aa8f7eb9be3cd476.setIcon(icon_4d1f5f40f3eb4468b4d215d45fe7b069);
            
    
            var popup_8a8e76e39cce4ca597843076e819652b = L.popup({maxWidth: '100%'
            
            });

            
                var html_398eb46d5aa949efb9a5430cbba82518 = $(`<div id="html_398eb46d5aa949efb9a5430cbba82518" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>아나파동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-876-7585<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 경인로354번길 6 (주안동)<br></div>`)[0];
                popup_8a8e76e39cce4ca597843076e819652b.setContent(html_398eb46d5aa949efb9a5430cbba82518);
            

            marker_2b08643ae72e4363aa8f7eb9be3cd476.bindPopup(popup_8a8e76e39cce4ca597843076e819652b)
            ;

            
        
    
        marker_2b08643ae72e4363aa8f7eb9be3cd476.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_95b16cfc5b134320b6c3c3873f1fa211 = L.marker(
            [37.452731899999996, 126.637184],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_523af9da7be04871bf14ba11d0ef7378 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_95b16cfc5b134320b6c3c3873f1fa211.setIcon(icon_523af9da7be04871bf14ba11d0ef7378);
            
    
            var popup_706be3976a9e4a83b626e5e82319da3a = L.popup({maxWidth: '100%'
            
            });

            
                var html_cb9cea2505f24817b9de399c69da4963 = $(`<div id="html_cb9cea2505f24817b9de399c69da4963" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>페트로 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-203-0072<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 토금중로 36 (용현동)<br></div>`)[0];
                popup_706be3976a9e4a83b626e5e82319da3a.setContent(html_cb9cea2505f24817b9de399c69da4963);
            

            marker_95b16cfc5b134320b6c3c3873f1fa211.bindPopup(popup_706be3976a9e4a83b626e5e82319da3a)
            ;

            
        
    
        marker_95b16cfc5b134320b6c3c3873f1fa211.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_bbc5cdd0549d4237849ca4221e6e2616 = L.marker(
            [37.4582109, 126.649386],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_dd84df4b0e634d628efadcbc7060f499 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_bbc5cdd0549d4237849ca4221e6e2616.setIcon(icon_dd84df4b0e634d628efadcbc7060f499);
            
    
            var popup_0c572eac96da4fb6b6a8cf67f4a1b06d = L.popup({maxWidth: '100%'
            
            });

            
                var html_d89237b91cdb4114a2d21c1c029f30f2 = $(`<div id="html_d89237b91cdb4114a2d21c1c029f30f2" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>브라운동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-889-7582<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 독배로432번길 3, 1층 (숭의동)<br></div>`)[0];
                popup_0c572eac96da4fb6b6a8cf67f4a1b06d.setContent(html_d89237b91cdb4114a2d21c1c029f30f2);
            

            marker_bbc5cdd0549d4237849ca4221e6e2616.bindPopup(popup_0c572eac96da4fb6b6a8cf67f4a1b06d)
            ;

            
        
    
        marker_bbc5cdd0549d4237849ca4221e6e2616.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_65c770914cf74fb0a77af0210f721983 = L.marker(
            [37.4662383, 126.684198],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_4b15bf8101874eaf997035dc769e5fac = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_65c770914cf74fb0a77af0210f721983.setIcon(icon_4b15bf8101874eaf997035dc769e5fac);
            
    
            var popup_3670eab3daa546eab7bcce7693070bf8 = L.popup({maxWidth: '100%'
            
            });

            
                var html_5ac605521bc84ff798d11d4a77980ed8 = $(`<div id="html_5ac605521bc84ff798d11d4a77980ed8" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>러브펫동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-889-6164<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 석정로 438, 1층 (주안동)<br></div>`)[0];
                popup_3670eab3daa546eab7bcce7693070bf8.setContent(html_5ac605521bc84ff798d11d4a77980ed8);
            

            marker_65c770914cf74fb0a77af0210f721983.bindPopup(popup_3670eab3daa546eab7bcce7693070bf8)
            ;

            
        
    
        marker_65c770914cf74fb0a77af0210f721983.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_90044ee68b1840a0b130e0805fc7c211 = L.marker(
            [37.4476643, 126.65075800000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_28b6236ddeb449afa04c4d63f4a6239b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_90044ee68b1840a0b130e0805fc7c211.setIcon(icon_28b6236ddeb449afa04c4d63f4a6239b);
            
    
            var popup_9a12cfa1fd2c401797894860b7b93a08 = L.popup({maxWidth: '100%'
            
            });

            
                var html_755bf93da28147859fe58b0188eb6fd0 = $(`<div id="html_755bf93da28147859fe58b0188eb6fd0" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>아이러브펫동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-875-7566<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 소성로 6 (용현동, 홈플러스 인하점 지하1층)<br></div>`)[0];
                popup_9a12cfa1fd2c401797894860b7b93a08.setContent(html_755bf93da28147859fe58b0188eb6fd0);
            

            marker_90044ee68b1840a0b130e0805fc7c211.bindPopup(popup_9a12cfa1fd2c401797894860b7b93a08)
            ;

            
        
    
        marker_90044ee68b1840a0b130e0805fc7c211.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_89822db0e61b4f96ba9e0277eeb9fb8e = L.marker(
            [37.4449864, 126.678559],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b981286c582546089ed8a455a8ec704b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_89822db0e61b4f96ba9e0277eeb9fb8e.setIcon(icon_b981286c582546089ed8a455a8ec704b);
            
    
            var popup_7397e2ae51e8442eab1dc82e8fcdc128 = L.popup({maxWidth: '100%'
            
            });

            
                var html_1adcd71859724c118f32732482f56240 = $(`<div id="html_1adcd71859724c118f32732482f56240" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>닥터파파동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-863-7582<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 미추홀대로 533 (주안동)<br></div>`)[0];
                popup_7397e2ae51e8442eab1dc82e8fcdc128.setContent(html_1adcd71859724c118f32732482f56240);
            

            marker_89822db0e61b4f96ba9e0277eeb9fb8e.bindPopup(popup_7397e2ae51e8442eab1dc82e8fcdc128)
            ;

            
        
    
        marker_89822db0e61b4f96ba9e0277eeb9fb8e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_c1ea52e7e427483f8ee8e18ca9e83e1d = L.marker(
            [37.441933500000005, 126.662989],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_da04acd32fc04b9b8e0e5847d296793a = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_c1ea52e7e427483f8ee8e18ca9e83e1d.setIcon(icon_da04acd32fc04b9b8e0e5847d296793a);
            
    
            var popup_60e13c35a3db4cf596c78d1cc9509012 = L.popup({maxWidth: '100%'
            
            });

            
                var html_8070b71b4f8d4c03821f19f23ce741f3 = $(`<div id="html_8070b71b4f8d4c03821f19f23ce741f3" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>학익동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-868-2626<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 한나루로 379 (학익동, 제중빌딩)<br></div>`)[0];
                popup_60e13c35a3db4cf596c78d1cc9509012.setContent(html_8070b71b4f8d4c03821f19f23ce741f3);
            

            marker_c1ea52e7e427483f8ee8e18ca9e83e1d.bindPopup(popup_60e13c35a3db4cf596c78d1cc9509012)
            ;

            
        
    
        marker_c1ea52e7e427483f8ee8e18ca9e83e1d.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e0b97de28d3747cab59d4ca38d98686e = L.marker(
            [37.4428361, 126.66356100000002],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_9a376735d70344ceade5569354325a14 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e0b97de28d3747cab59d4ca38d98686e.setIcon(icon_9a376735d70344ceade5569354325a14);
            
    
            var popup_72752ea156694e19bf8c31b3403516c9 = L.popup({maxWidth: '100%'
            
            });

            
                var html_3b2d5577e1aa41338c383833447f4216 = $(`<div id="html_3b2d5577e1aa41338c383833447f4216" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>바른동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-876-8575<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 소성로 136 (학익동)<br></div>`)[0];
                popup_72752ea156694e19bf8c31b3403516c9.setContent(html_3b2d5577e1aa41338c383833447f4216);
            

            marker_e0b97de28d3747cab59d4ca38d98686e.bindPopup(popup_72752ea156694e19bf8c31b3403516c9)
            ;

            
        
    
        marker_e0b97de28d3747cab59d4ca38d98686e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_2527c5ae0466433fbaa9eefdc524dabb = L.marker(
            [37.4474273, 126.64984399999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_e57c87d4ed634c8db2f75669b1941bd1 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_2527c5ae0466433fbaa9eefdc524dabb.setIcon(icon_e57c87d4ed634c8db2f75669b1941bd1);
            
    
            var popup_d49cbfe3c0af4a2a93e38c6eb7ba7baf = L.popup({maxWidth: '100%'
            
            });

            
                var html_a9b0319f0f8b47f8bd61c0782ebd99d7 = $(`<div id="html_a9b0319f0f8b47f8bd61c0782ebd99d7" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>하인츠동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-204-7707<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 독배로 305, 201호 (용현동)<br></div>`)[0];
                popup_d49cbfe3c0af4a2a93e38c6eb7ba7baf.setContent(html_a9b0319f0f8b47f8bd61c0782ebd99d7);
            

            marker_2527c5ae0466433fbaa9eefdc524dabb.bindPopup(popup_d49cbfe3c0af4a2a93e38c6eb7ba7baf)
            ;

            
        
    
        marker_2527c5ae0466433fbaa9eefdc524dabb.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_491f98e8ecfd43269ab0b3d5fd0677cd = L.marker(
            [37.4526581, 126.680074],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b9267f21a7b9470a9c22e42dc1cd8533 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_491f98e8ecfd43269ab0b3d5fd0677cd.setIcon(icon_b9267f21a7b9470a9c22e42dc1cd8533);
            
    
            var popup_ecd6a2b3aa9f4bdc9396f3f13013d69d = L.popup({maxWidth: '100%'
            
            });

            
                var html_75fa4a32035f4391aed958114038b2df = $(`<div id="html_75fa4a32035f4391aed958114038b2df" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>펫홈종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-427-7588<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 미추홀대로 620, 1층 (주안동)<br></div>`)[0];
                popup_ecd6a2b3aa9f4bdc9396f3f13013d69d.setContent(html_75fa4a32035f4391aed958114038b2df);
            

            marker_491f98e8ecfd43269ab0b3d5fd0677cd.bindPopup(popup_ecd6a2b3aa9f4bdc9396f3f13013d69d)
            ;

            
        
    
        marker_491f98e8ecfd43269ab0b3d5fd0677cd.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_2714d57b9fc047959ec228ceb517f93d = L.marker(
            [37.4704516, 126.663482],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_433666f8eda4470f8617e969a47e643e = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_2714d57b9fc047959ec228ceb517f93d.setIcon(icon_433666f8eda4470f8617e969a47e643e);
            
    
            var popup_e8c56fd6535644279fd8ef9899f88a10 = L.popup({maxWidth: '100%'
            
            });

            
                var html_a7a33fef144d4ce28e3252dcd6bb3591 = $(`<div id="html_a7a33fef144d4ce28e3252dcd6bb3591" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>노아 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-874-2202<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 숙골로 90, 도화프라자 201호 (도화동)<br></div>`)[0];
                popup_e8c56fd6535644279fd8ef9899f88a10.setContent(html_a7a33fef144d4ce28e3252dcd6bb3591);
            

            marker_2714d57b9fc047959ec228ceb517f93d.bindPopup(popup_e8c56fd6535644279fd8ef9899f88a10)
            ;

            
        
    
        marker_2714d57b9fc047959ec228ceb517f93d.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_148699600284479b9e444fae2b4eba19 = L.marker(
            [37.4577149, 126.687602],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_49fd7dae57ef42e6bae0e2af2a909542 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_148699600284479b9e444fae2b4eba19.setIcon(icon_49fd7dae57ef42e6bae0e2af2a909542);
            
    
            var popup_fd24fffa7d4f4786b1b5d81b47c57712 = L.popup({maxWidth: '100%'
            
            });

            
                var html_a8d58d2a05e2498ba360e9b156d58579 = $(`<div id="html_a8d58d2a05e2498ba360e9b156d58579" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>사랑애동물메디컬센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-223-0119<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 경인로 428, 1층 (주안동)<br></div>`)[0];
                popup_fd24fffa7d4f4786b1b5d81b47c57712.setContent(html_a8d58d2a05e2498ba360e9b156d58579);
            

            marker_148699600284479b9e444fae2b4eba19.bindPopup(popup_fd24fffa7d4f4786b1b5d81b47c57712)
            ;

            
        
    
        marker_148699600284479b9e444fae2b4eba19.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_f21506ffaac845648164366e8205fe87 = L.marker(
            [37.4505318, 126.680117],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ccac0435b39747d2be426a6eca827431 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f21506ffaac845648164366e8205fe87.setIcon(icon_ccac0435b39747d2be426a6eca827431);
            
    
            var popup_ab90196f43744588b3cdb8660cef4ab3 = L.popup({maxWidth: '100%'
            
            });

            
                var html_d3326b48a07447f792c703c1f00a1d87 = $(`<div id="html_d3326b48a07447f792c703c1f00a1d87" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>시드니종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-437-7588<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 미추홀대로 594, 동경프라자 1층 (주안동)<br></div>`)[0];
                popup_ab90196f43744588b3cdb8660cef4ab3.setContent(html_d3326b48a07447f792c703c1f00a1d87);
            

            marker_f21506ffaac845648164366e8205fe87.bindPopup(popup_ab90196f43744588b3cdb8660cef4ab3)
            ;

            
        
    
        marker_f21506ffaac845648164366e8205fe87.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_58560f5d745d4774843ecd8eb9029f60 = L.marker(
            [37.4556802, 126.640786],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_5df8907f98f54ead9e85f16fd22245e1 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_58560f5d745d4774843ecd8eb9029f60.setIcon(icon_5df8907f98f54ead9e85f16fd22245e1);
            
    
            var popup_cbfc1d2cf6354bf2ad5ea4dbdc0c909b = L.popup({maxWidth: '100%'
            
            });

            
                var html_06d5f31eeb6b4a358b05992f52bfa335 = $(`<div id="html_06d5f31eeb6b4a358b05992f52bfa335" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>24시 포인트동물의료센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-882-8275<br>            <strong>- 주소 :</strong> 인천광역시 미추홀구 낙섬중로 92, 101호, 102호 (용현동)<br></div>`)[0];
                popup_cbfc1d2cf6354bf2ad5ea4dbdc0c909b.setContent(html_06d5f31eeb6b4a358b05992f52bfa335);
            

            marker_58560f5d745d4774843ecd8eb9029f60.bindPopup(popup_cbfc1d2cf6354bf2ad5ea4dbdc0c909b)
            ;

            
        
    
        marker_58560f5d745d4774843ecd8eb9029f60.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d43c81dcbba14c41ba6b0f4db1581761 = L.marker(
            [37.5039796, 126.711634],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_c77a9379aee7402f8ebdc4826b78c033 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d43c81dcbba14c41ba6b0f4db1581761.setIcon(icon_c77a9379aee7402f8ebdc4826b78c033);
            
    
            var popup_c5a911e5e67e4b82b7c12a114069fe39 = L.popup({maxWidth: '100%'
            
            });

            
                var html_848b53d561074315985a236666d07620 = $(`<div id="html_848b53d561074315985a236666d07620" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>보비동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-524-6959<br>            <strong>- 주소 :</strong> 인천광역시 부평구 원적로 407 (산곡동)<br></div>`)[0];
                popup_c5a911e5e67e4b82b7c12a114069fe39.setContent(html_848b53d561074315985a236666d07620);
            

            marker_d43c81dcbba14c41ba6b0f4db1581761.bindPopup(popup_c5a911e5e67e4b82b7c12a114069fe39)
            ;

            
        
    
        marker_d43c81dcbba14c41ba6b0f4db1581761.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d0c0446d9efd4ff2a48d21703415b55c = L.marker(
            [37.503615, 126.70993899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_af5e4d1094a24187a0e8a4f215103f81 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d0c0446d9efd4ff2a48d21703415b55c.setIcon(icon_af5e4d1094a24187a0e8a4f215103f81);
            
    
            var popup_785fa36c872b48e3a5468d6eaf5af98c = L.popup({maxWidth: '100%'
            
            });

            
                var html_a6908609e5614a4b9b098a303d5abac4 = $(`<div id="html_a6908609e5614a4b9b098a303d5abac4" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>세림동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-503-0075<br>            <strong>- 주소 :</strong> 인천광역시 부평구 원적로 392 (산곡동)<br></div>`)[0];
                popup_785fa36c872b48e3a5468d6eaf5af98c.setContent(html_a6908609e5614a4b9b098a303d5abac4);
            

            marker_d0c0446d9efd4ff2a48d21703415b55c.bindPopup(popup_785fa36c872b48e3a5468d6eaf5af98c)
            ;

            
        
    
        marker_d0c0446d9efd4ff2a48d21703415b55c.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_ea717b55d5904a34af816e627fd6e80a = L.marker(
            [37.5123659, 126.70358200000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_3e2752d396f14dcdb8ba8d62142d8ff3 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_ea717b55d5904a34af816e627fd6e80a.setIcon(icon_3e2752d396f14dcdb8ba8d62142d8ff3);
            
    
            var popup_d41e3c19c1824bf2adc19d3d8c3ee59f = L.popup({maxWidth: '100%'
            
            });

            
                var html_d1ff1a1e242c4713811d8918b5a2e9c0 = $(`<div id="html_d1ff1a1e242c4713811d8918b5a2e9c0" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>애나동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-529-9633<br>            <strong>- 주소 :</strong> 인천광역시 부평구 마장로 383 (산곡동)<br></div>`)[0];
                popup_d41e3c19c1824bf2adc19d3d8c3ee59f.setContent(html_d1ff1a1e242c4713811d8918b5a2e9c0);
            

            marker_ea717b55d5904a34af816e627fd6e80a.bindPopup(popup_d41e3c19c1824bf2adc19d3d8c3ee59f)
            ;

            
        
    
        marker_ea717b55d5904a34af816e627fd6e80a.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_f097cf70d58a43e28530e9bc522659f2 = L.marker(
            [37.5032025, 126.721928],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_3be19759feaa4b319258a8f21b277a67 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f097cf70d58a43e28530e9bc522659f2.setIcon(icon_3be19759feaa4b319258a8f21b277a67);
            
    
            var popup_62b0f15f282c47c7b9113c5258f0027e = L.popup({maxWidth: '100%'
            
            });

            
                var html_9ec5670cce3342a2891b68608e7ca93f = $(`<div id="html_9ec5670cce3342a2891b68608e7ca93f" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>백마동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-528-1359<br>            <strong>- 주소 :</strong> 인천광역시 부평구 부평대로 132, 1층 102호 (부평동, 헤리움노블레스)<br></div>`)[0];
                popup_62b0f15f282c47c7b9113c5258f0027e.setContent(html_9ec5670cce3342a2891b68608e7ca93f);
            

            marker_f097cf70d58a43e28530e9bc522659f2.bindPopup(popup_62b0f15f282c47c7b9113c5258f0027e)
            ;

            
        
    
        marker_f097cf70d58a43e28530e9bc522659f2.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_94f5d76a9d654078ba296014d376e9b7 = L.marker(
            [37.490879799999995, 126.72703999999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_9c3eb491c555496091488bcfadeb72ac = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_94f5d76a9d654078ba296014d376e9b7.setIcon(icon_9c3eb491c555496091488bcfadeb72ac);
            
    
            var popup_f0025bceaf8b4dfa879860649ccd466e = L.popup({maxWidth: '100%'
            
            });

            
                var html_8c4c706a44f745c796638a835aee63ee = $(`<div id="html_8c4c706a44f745c796638a835aee63ee" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>동수동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-511-5338<br>            <strong>- 주소 :</strong> 인천광역시 부평구 경원대로 1422 (부평동)<br></div>`)[0];
                popup_f0025bceaf8b4dfa879860649ccd466e.setContent(html_8c4c706a44f745c796638a835aee63ee);
            

            marker_94f5d76a9d654078ba296014d376e9b7.bindPopup(popup_f0025bceaf8b4dfa879860649ccd466e)
            ;

            
        
    
        marker_94f5d76a9d654078ba296014d376e9b7.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_6c14530ddc354514824eddd25ff7b3fa = L.marker(
            [37.5055311, 126.731397],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_5521e4bd081b4af484c84eac458d8bdc = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_6c14530ddc354514824eddd25ff7b3fa.setIcon(icon_5521e4bd081b4af484c84eac458d8bdc);
            
    
            var popup_9e53c20a70c34c969d750e42d6c87fac = L.popup({maxWidth: '100%'
            
            });

            
                var html_2205cab482c04135bc088b05c9c69048 = $(`<div id="html_2205cab482c04135bc088b05c9c69048" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>아프리카동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-508-7582<br>            <strong>- 주소 :</strong> 인천광역시 부평구 장제로 224-1 (부개동)<br></div>`)[0];
                popup_9e53c20a70c34c969d750e42d6c87fac.setContent(html_2205cab482c04135bc088b05c9c69048);
            

            marker_6c14530ddc354514824eddd25ff7b3fa.bindPopup(popup_9e53c20a70c34c969d750e42d6c87fac)
            ;

            
        
    
        marker_6c14530ddc354514824eddd25ff7b3fa.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_61c6613bee6c4b57b5ff6be6587eb1e7 = L.marker(
            [37.503251899999995, 126.739571],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_08de350d75ba41f49ba666367a115485 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_61c6613bee6c4b57b5ff6be6587eb1e7.setIcon(icon_08de350d75ba41f49ba666367a115485);
            
    
            var popup_bde1fe56abd84a5f8c0a0330e2c12cb3 = L.popup({maxWidth: '100%'
            
            });

            
                var html_f3e19883d1e84aa99fb025685a328759 = $(`<div id="html_f3e19883d1e84aa99fb025685a328759" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>부개종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-522-7585<br>            <strong>- 주소 :</strong> 인천광역시 부평구 부개로 61-6 (부개동)<br></div>`)[0];
                popup_bde1fe56abd84a5f8c0a0330e2c12cb3.setContent(html_f3e19883d1e84aa99fb025685a328759);
            

            marker_61c6613bee6c4b57b5ff6be6587eb1e7.bindPopup(popup_bde1fe56abd84a5f8c0a0330e2c12cb3)
            ;

            
        
    
        marker_61c6613bee6c4b57b5ff6be6587eb1e7.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_6d122af700ad4918b7f5b5c16601ba6d = L.marker(
            [37.5166299, 126.70451499999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_d664887f3b0f42d08363d0669c6990ac = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_6d122af700ad4918b7f5b5c16601ba6d.setIcon(icon_d664887f3b0f42d08363d0669c6990ac);
            
    
            var popup_7dbe9b383f6f43ec9593ef0a60141aa0 = L.popup({maxWidth: '100%'
            
            });

            
                var html_a07e986205384d208b0d8248d7d43faf = $(`<div id="html_a07e986205384d208b0d8248d7d43faf" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>청천종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-517-0075<br>            <strong>- 주소 :</strong> 인천광역시 부평구 마장로432번길 3 (청천동)<br></div>`)[0];
                popup_7dbe9b383f6f43ec9593ef0a60141aa0.setContent(html_a07e986205384d208b0d8248d7d43faf);
            

            marker_6d122af700ad4918b7f5b5c16601ba6d.bindPopup(popup_7dbe9b383f6f43ec9593ef0a60141aa0)
            ;

            
        
    
        marker_6d122af700ad4918b7f5b5c16601ba6d.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_edf23aa7e5ec4d8099d324fb0e6cd7fa = L.marker(
            [37.5082177, 126.73611499999998],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_172003ea37fb4a2fa972b5c739f419dc = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_edf23aa7e5ec4d8099d324fb0e6cd7fa.setIcon(icon_172003ea37fb4a2fa972b5c739f419dc);
            
    
            var popup_5a96f33036574302979c0763f7cfe112 = L.popup({maxWidth: '100%'
            
            });

            
                var html_f985c220cda34a458aa535f6ab870529 = $(`<div id="html_f985c220cda34a458aa535f6ab870529" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>삼산종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-330-0075<br>            <strong>- 주소 :</strong> 인천광역시 부평구 체육관로 40 (삼산동)<br></div>`)[0];
                popup_5a96f33036574302979c0763f7cfe112.setContent(html_f985c220cda34a458aa535f6ab870529);
            

            marker_edf23aa7e5ec4d8099d324fb0e6cd7fa.bindPopup(popup_5a96f33036574302979c0763f7cfe112)
            ;

            
        
    
        marker_edf23aa7e5ec4d8099d324fb0e6cd7fa.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a3baa1b7529b4e0b8a9c323a9fa365ba = L.marker(
            [37.496552, 126.73710600000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_457062340a884485b8f87f269a888a0b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a3baa1b7529b4e0b8a9c323a9fa365ba.setIcon(icon_457062340a884485b8f87f269a888a0b);
            
    
            var popup_f8c0d76a194940d0838a4c6442706d8f = L.popup({maxWidth: '100%'
            
            });

            
                var html_9d9b6e86f01d4dc1a4047a6a51df79e8 = $(`<div id="html_9d9b6e86f01d4dc1a4047a6a51df79e8" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>사랑동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-203-8984<br>            <strong>- 주소 :</strong> 인천광역시 부평구 동수천로 124, 103~104호 (부개동)<br></div>`)[0];
                popup_f8c0d76a194940d0838a4c6442706d8f.setContent(html_9d9b6e86f01d4dc1a4047a6a51df79e8);
            

            marker_a3baa1b7529b4e0b8a9c323a9fa365ba.bindPopup(popup_f8c0d76a194940d0838a4c6442706d8f)
            ;

            
        
    
        marker_a3baa1b7529b4e0b8a9c323a9fa365ba.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_8b925cc0c94f4359887d8d0a76f22f72 = L.marker(
            [37.503944, 126.711826],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_422fa12357ef4ba390a22509cdd3261f = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_8b925cc0c94f4359887d8d0a76f22f72.setIcon(icon_422fa12357ef4ba390a22509cdd3261f);
            
    
            var popup_5b5f326eebf044f088a226dc381f3c20 = L.popup({maxWidth: '100%'
            
            });

            
                var html_371b5f9798474b8597f2f6d0a6a70116 = $(`<div id="html_371b5f9798474b8597f2f6d0a6a70116" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>조재진동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-518-3800<br>            <strong>- 주소 :</strong> 인천광역시 부평구 원적로 409 (산곡동)<br></div>`)[0];
                popup_5b5f326eebf044f088a226dc381f3c20.setContent(html_371b5f9798474b8597f2f6d0a6a70116);
            

            marker_8b925cc0c94f4359887d8d0a76f22f72.bindPopup(popup_5b5f326eebf044f088a226dc381f3c20)
            ;

            
        
    
        marker_8b925cc0c94f4359887d8d0a76f22f72.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_f9d65c72ed4b44299b33fbfe134b5bf7 = L.marker(
            [37.5175735, 126.72968],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_bbb2295d50ed42d7acba519edd51f49f = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f9d65c72ed4b44299b33fbfe134b5bf7.setIcon(icon_bbb2295d50ed42d7acba519edd51f49f);
            
    
            var popup_17024734f028495f8dad1e763297c07d = L.popup({maxWidth: '100%'
            
            });

            
                var html_22116f12da974a8993206ada7642ccf0 = $(`<div id="html_22116f12da974a8993206ada7642ccf0" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>짱구네동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-511-5515<br>            <strong>- 주소 :</strong> 인천광역시 부평구 평천로 356 (갈산동, 민상빌딩)<br></div>`)[0];
                popup_17024734f028495f8dad1e763297c07d.setContent(html_22116f12da974a8993206ada7642ccf0);
            

            marker_f9d65c72ed4b44299b33fbfe134b5bf7.bindPopup(popup_17024734f028495f8dad1e763297c07d)
            ;

            
        
    
        marker_f9d65c72ed4b44299b33fbfe134b5bf7.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_b68a0f7401c24008b21e91b3b15d8099 = L.marker(
            [37.4913665, 126.719439],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_3268f0d208e84aff904e5be9e1f7897b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_b68a0f7401c24008b21e91b3b15d8099.setIcon(icon_3268f0d208e84aff904e5be9e1f7897b);
            
    
            var popup_eb01d673321c4e8f9c717603969415e8 = L.popup({maxWidth: '100%'
            
            });

            
                var html_9180890add724c9c9a56cd5fd2740d79 = $(`<div id="html_9180890add724c9c9a56cd5fd2740d79" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>도그앤캣동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-524-0075<br>            <strong>- 주소 :</strong> 인천광역시 부평구 경원대로 1355 (부평동)<br></div>`)[0];
                popup_eb01d673321c4e8f9c717603969415e8.setContent(html_9180890add724c9c9a56cd5fd2740d79);
            

            marker_b68a0f7401c24008b21e91b3b15d8099.bindPopup(popup_eb01d673321c4e8f9c717603969415e8)
            ;

            
        
    
        marker_b68a0f7401c24008b21e91b3b15d8099.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a862cc23f7d245c18752b6d2cb0197bf = L.marker(
            [37.511590500000004, 126.72566299999998],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_2f6dc93ac90a40178315c4283ba90e49 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a862cc23f7d245c18752b6d2cb0197bf.setIcon(icon_2f6dc93ac90a40178315c4283ba90e49);
            
    
            var popup_a129f670a7ae479884049338542a25df = L.popup({maxWidth: '100%'
            
            });

            
                var html_1742f53baec94375933727045ad25608 = $(`<div id="html_1742f53baec94375933727045ad25608" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>서울종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-508-7571<br>            <strong>- 주소 :</strong> 인천광역시 부평구 굴포로 42 (갈산동)<br></div>`)[0];
                popup_a129f670a7ae479884049338542a25df.setContent(html_1742f53baec94375933727045ad25608);
            

            marker_a862cc23f7d245c18752b6d2cb0197bf.bindPopup(popup_a129f670a7ae479884049338542a25df)
            ;

            
        
    
        marker_a862cc23f7d245c18752b6d2cb0197bf.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_428fc765866d4d9aad58247db3574217 = L.marker(
            [37.521844, 126.703465],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_96ab713fbe684010b33502ea9dc46e65 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_428fc765866d4d9aad58247db3574217.setIcon(icon_96ab713fbe684010b33502ea9dc46e65);
            
    
            var popup_16874e963cd644c78984829cc1e9ea63 = L.popup({maxWidth: '100%'
            
            });

            
                var html_f21e37fac837474ebb368d9a94da262e = $(`<div id="html_f21e37fac837474ebb368d9a94da262e" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>튼튼동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-270-2727<br>            <strong>- 주소 :</strong> 인천광역시 부평구 마장로 489, 2층 2113~2114호 (청천동, 아이즈빌아울렛)<br></div>`)[0];
                popup_16874e963cd644c78984829cc1e9ea63.setContent(html_f21e37fac837474ebb368d9a94da262e);
            

            marker_428fc765866d4d9aad58247db3574217.bindPopup(popup_16874e963cd644c78984829cc1e9ea63)
            ;

            
        
    
        marker_428fc765866d4d9aad58247db3574217.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_4fb784bb76a847fd9873e26add2ceb62 = L.marker(
            [37.4858055, 126.71866899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_90392f2000114416a8d9a37a0a49c8b9 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_4fb784bb76a847fd9873e26add2ceb62.setIcon(icon_90392f2000114416a8d9a37a0a49c8b9);
            
    
            var popup_5e80bea3ac5d4cea88672ceb81302b2f = L.popup({maxWidth: '100%'
            
            });

            
                var html_ac17e73efebb40b6b3ec58072393b5c2 = $(`<div id="html_ac17e73efebb40b6b3ec58072393b5c2" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>동수사랑동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-344-5554<br>            <strong>- 주소 :</strong> 인천광역시 부평구 경인로 887, 203호 (부평동, 롯데아이원)<br></div>`)[0];
                popup_5e80bea3ac5d4cea88672ceb81302b2f.setContent(html_ac17e73efebb40b6b3ec58072393b5c2);
            

            marker_4fb784bb76a847fd9873e26add2ceb62.bindPopup(popup_5e80bea3ac5d4cea88672ceb81302b2f)
            ;

            
        
    
        marker_4fb784bb76a847fd9873e26add2ceb62.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a29b8a799ab441078dad634861b2e21b = L.marker(
            [37.498191399999996, 126.732905],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_1454d529d93b4104a4d7fef0d4867a94 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a29b8a799ab441078dad634861b2e21b.setIcon(icon_1454d529d93b4104a4d7fef0d4867a94);
            
    
            var popup_d486c218841e496f9a06948eb6b69678 = L.popup({maxWidth: '100%'
            
            });

            
                var html_f95c32f52ef644bca9522c2d0650b074 = $(`<div id="html_f95c32f52ef644bca9522c2d0650b074" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>24시쥬라기 동물종합병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-504-7582<br>            <strong>- 주소 :</strong> 인천광역시 부평구 부흥로 367 (부평동)<br></div>`)[0];
                popup_d486c218841e496f9a06948eb6b69678.setContent(html_f95c32f52ef644bca9522c2d0650b074);
            

            marker_a29b8a799ab441078dad634861b2e21b.bindPopup(popup_d486c218841e496f9a06948eb6b69678)
            ;

            
        
    
        marker_a29b8a799ab441078dad634861b2e21b.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e729590ee70e4ba0a5610cd34d6e0389 = L.marker(
            [37.5226839, 126.73843899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_134a7a661a1e4992bad335dfa9f3426a = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e729590ee70e4ba0a5610cd34d6e0389.setIcon(icon_134a7a661a1e4992bad335dfa9f3426a);
            
    
            var popup_3db83e474f02493590fcad292cbc6875 = L.popup({maxWidth: '100%'
            
            });

            
                var html_04afd5853a9841509bbadd1da13cf541 = $(`<div id="html_04afd5853a9841509bbadd1da13cf541" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>늘푸른동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-507-0075<br>            <strong>- 주소 :</strong> 인천광역시 부평구 후정동로 60, 107호 (삼산동)<br></div>`)[0];
                popup_3db83e474f02493590fcad292cbc6875.setContent(html_04afd5853a9841509bbadd1da13cf541);
            

            marker_e729590ee70e4ba0a5610cd34d6e0389.bindPopup(popup_3db83e474f02493590fcad292cbc6875)
            ;

            
        
    
        marker_e729590ee70e4ba0a5610cd34d6e0389.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_6112cbf62a254bca80b5c3ed390c5f1c = L.marker(
            [37.52166679999999, 126.743002],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_bd2812e4c1d34d979173fd3166eecc12 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_6112cbf62a254bca80b5c3ed390c5f1c.setIcon(icon_bd2812e4c1d34d979173fd3166eecc12);
            
    
            var popup_b7a2139ed1694b1dbdae1386751e95b7 = L.popup({maxWidth: '100%'
            
            });

            
                var html_fb9a123e36ae4c368dcffd41688ccafe = $(`<div id="html_fb9a123e36ae4c368dcffd41688ccafe" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>리치동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-507-1110<br>            <strong>- 주소 :</strong> 인천광역시 부평구 부평북로 446, 101호 (삼산동, 우리빌딩)<br></div>`)[0];
                popup_b7a2139ed1694b1dbdae1386751e95b7.setContent(html_fb9a123e36ae4c368dcffd41688ccafe);
            

            marker_6112cbf62a254bca80b5c3ed390c5f1c.bindPopup(popup_b7a2139ed1694b1dbdae1386751e95b7)
            ;

            
        
    
        marker_6112cbf62a254bca80b5c3ed390c5f1c.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_bc2337244a8647b288c48697dbb115a4 = L.marker(
            [37.5006339, 126.70321000000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_d35c20f432d740109a0d45f1bd7a1838 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_bc2337244a8647b288c48697dbb115a4.setIcon(icon_d35c20f432d740109a0d45f1bd7a1838);
            
    
            var popup_0bc61803028c4107be68b45d130e7188 = L.popup({maxWidth: '100%'
            
            });

            
                var html_0cde6c5439ec4d6386b3526708fa913d = $(`<div id="html_0cde6c5439ec4d6386b3526708fa913d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>펫사랑동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-521-0003<br>            <strong>- 주소 :</strong> 인천광역시 부평구 마장로 256, 102호 (산곡동)<br></div>`)[0];
                popup_0bc61803028c4107be68b45d130e7188.setContent(html_0cde6c5439ec4d6386b3526708fa913d);
            

            marker_bc2337244a8647b288c48697dbb115a4.bindPopup(popup_0bc61803028c4107be68b45d130e7188)
            ;

            
        
    
        marker_bc2337244a8647b288c48697dbb115a4.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_ff93326cc8ff41339a211300b589cfae = L.marker(
            [37.503384999999994, 126.730658],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_a2c967c4c777403aac9c75d49b22b5a2 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_ff93326cc8ff41339a211300b589cfae.setIcon(icon_a2c967c4c777403aac9c75d49b22b5a2);
            
    
            var popup_2ebd45eaada245fa968ff179dee0a292 = L.popup({maxWidth: '100%'
            
            });

            
                var html_374234ed448e47908f3138b45186ca99 = $(`<div id="html_374234ed448e47908f3138b45186ca99" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>해오름 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-522-7582<br>            <strong>- 주소 :</strong> 인천광역시 부평구 장제로 199 (부평동)<br></div>`)[0];
                popup_2ebd45eaada245fa968ff179dee0a292.setContent(html_374234ed448e47908f3138b45186ca99);
            

            marker_ff93326cc8ff41339a211300b589cfae.bindPopup(popup_2ebd45eaada245fa968ff179dee0a292)
            ;

            
        
    
        marker_ff93326cc8ff41339a211300b589cfae.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_5e2312da8cae45a2a7bd8ca496019068 = L.marker(
            [37.4907672, 126.72900800000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ac971d087cd5456d99e22f637657e4ad = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_5e2312da8cae45a2a7bd8ca496019068.setIcon(icon_ac971d087cd5456d99e22f637657e4ad);
            
    
            var popup_ec8617bb49b144988dd0f2c557a93803 = L.popup({maxWidth: '100%'
            
            });

            
                var html_0e5863ec738d47a487673722ed5e0eb9 = $(`<div id="html_0e5863ec738d47a487673722ed5e0eb9" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>부평프라임동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-715-7587<br>            <strong>- 주소 :</strong> 인천광역시 부평구 경원대로 1442, 1층 (부평동, 정은빌딩)<br></div>`)[0];
                popup_ec8617bb49b144988dd0f2c557a93803.setContent(html_0e5863ec738d47a487673722ed5e0eb9);
            

            marker_5e2312da8cae45a2a7bd8ca496019068.bindPopup(popup_ec8617bb49b144988dd0f2c557a93803)
            ;

            
        
    
        marker_5e2312da8cae45a2a7bd8ca496019068.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_0227f80f3ed24281ba064b15933b9825 = L.marker(
            [37.5071874, 126.73471599999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_a115cd16075e440a95dc29ec82015064 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_0227f80f3ed24281ba064b15933b9825.setIcon(icon_a115cd16075e440a95dc29ec82015064);
            
    
            var popup_e060482ad22d49e9a924455eb184fdad = L.popup({maxWidth: '100%'
            
            });

            
                var html_1d641ba3838a4d0badce390fea0f8818 = $(`<div id="html_1d641ba3838a4d0badce390fea0f8818" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>반디동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-724-8575<br>            <strong>- 주소 :</strong> 인천광역시 부평구 길주로647번길 4, 102~104호 (삼산동, 프리엘림)<br></div>`)[0];
                popup_e060482ad22d49e9a924455eb184fdad.setContent(html_1d641ba3838a4d0badce390fea0f8818);
            

            marker_0227f80f3ed24281ba064b15933b9825.bindPopup(popup_e060482ad22d49e9a924455eb184fdad)
            ;

            
        
    
        marker_0227f80f3ed24281ba064b15933b9825.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_5485467359de4013b5f06e2e4bea82c2 = L.marker(
            [37.490402100000004, 126.711878],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_06da8217cd614af19968531e04f8d2d1 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_5485467359de4013b5f06e2e4bea82c2.setIcon(icon_06da8217cd614af19968531e04f8d2d1);
            
    
            var popup_b4d1cbecef414082b8487b5214a6e8c0 = L.popup({maxWidth: '100%'
            
            });

            
                var html_545cd1769ba34c65998610bddaa83c53 = $(`<div id="html_545cd1769ba34c65998610bddaa83c53" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>현대동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-521-6578<br>            <strong>- 주소 :</strong> 인천광역시 부평구 경원대로 1286, 101,201호 (부평동, 부평메디아나센터)<br></div>`)[0];
                popup_b4d1cbecef414082b8487b5214a6e8c0.setContent(html_545cd1769ba34c65998610bddaa83c53);
            

            marker_5485467359de4013b5f06e2e4bea82c2.bindPopup(popup_b4d1cbecef414082b8487b5214a6e8c0)
            ;

            
        
    
        marker_5485467359de4013b5f06e2e4bea82c2.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_123a28e2ee584e6d93c6d6f357d6206a = L.marker(
            [37.4868343, 126.73891599999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_870db6ba7e154c7ca0e86347ff3d20b9 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_123a28e2ee584e6d93c6d6f357d6206a.setIcon(icon_870db6ba7e154c7ca0e86347ff3d20b9);
            
    
            var popup_a4c027eac90740e68d3d70799ff89ab2 = L.popup({maxWidth: '100%'
            
            });

            
                var html_7eaa85b71585499a969a09bfae551687 = $(`<div id="html_7eaa85b71585499a969a09bfae551687" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>주주종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-505-7262<br>            <strong>- 주소 :</strong> 인천광역시 부평구 경인로 1069, 1층 (부개동)<br></div>`)[0];
                popup_a4c027eac90740e68d3d70799ff89ab2.setContent(html_7eaa85b71585499a969a09bfae551687);
            

            marker_123a28e2ee584e6d93c6d6f357d6206a.bindPopup(popup_a4c027eac90740e68d3d70799ff89ab2)
            ;

            
        
    
        marker_123a28e2ee584e6d93c6d6f357d6206a.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e73eaf063a1e43719b6200ceb5bec939 = L.marker(
            [37.5037703, 126.72198300000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_4b70ebc05cc34225a2ff5a32fa15aaa2 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e73eaf063a1e43719b6200ceb5bec939.setIcon(icon_4b70ebc05cc34225a2ff5a32fa15aaa2);
            
    
            var popup_acc17b070a904528bf299d782d3ed9e7 = L.popup({maxWidth: '100%'
            
            });

            
                var html_7ac41119a67c4a6f9dca0309ca0ff1d6 = $(`<div id="html_7ac41119a67c4a6f9dca0309ca0ff1d6" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>부평종합고양이의료센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 070-4849-1184<br>            <strong>- 주소 :</strong> 인천광역시 부평구 부평대로 138, 206~207호 (부평동)<br></div>`)[0];
                popup_acc17b070a904528bf299d782d3ed9e7.setContent(html_7ac41119a67c4a6f9dca0309ca0ff1d6);
            

            marker_e73eaf063a1e43719b6200ceb5bec939.bindPopup(popup_acc17b070a904528bf299d782d3ed9e7)
            ;

            
        
    
        marker_e73eaf063a1e43719b6200ceb5bec939.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_8da84a1d4462460b889de21b52ff3435 = L.marker(
            [37.5037703, 126.72198300000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_c7d85fbca8de4943938651c0b73fa8f7 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_8da84a1d4462460b889de21b52ff3435.setIcon(icon_c7d85fbca8de4943938651c0b73fa8f7);
            
    
            var popup_f4b8b2ae2cac49fdbeac4ba182b37d77 = L.popup({maxWidth: '100%'
            
            });

            
                var html_55658dc64c7f4b9e9c4632ca3cd4a87f = $(`<div id="html_55658dc64c7f4b9e9c4632ca3cd4a87f" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>부평종합동물의료센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-511-6836<br>            <strong>- 주소 :</strong> 인천광역시 부평구 부평대로 138, 부평 신일유스테이션 오피스텔 2층 208~209호 (부평동)<br></div>`)[0];
                popup_f4b8b2ae2cac49fdbeac4ba182b37d77.setContent(html_55658dc64c7f4b9e9c4632ca3cd4a87f);
            

            marker_8da84a1d4462460b889de21b52ff3435.bindPopup(popup_f4b8b2ae2cac49fdbeac4ba182b37d77)
            ;

            
        
    
        marker_8da84a1d4462460b889de21b52ff3435.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_11b65d5a42814349a4d9c9af1e686692 = L.marker(
            [37.50578, 126.70376599999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_0c4b539cfffa4e21b0d1b3fa2c43a7da = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_11b65d5a42814349a4d9c9af1e686692.setIcon(icon_0c4b539cfffa4e21b0d1b3fa2c43a7da);
            
    
            var popup_00225272f3f04b23a166460dace041f7 = L.popup({maxWidth: '100%'
            
            });

            
                var html_6c2b69bfac0040c6ba2b5914d0306e2d = $(`<div id="html_6c2b69bfac0040c6ba2b5914d0306e2d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>라파동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-330-7522<br>            <strong>- 주소 :</strong> 인천광역시 부평구 마장로 312, 2층 (산곡동)<br></div>`)[0];
                popup_00225272f3f04b23a166460dace041f7.setContent(html_6c2b69bfac0040c6ba2b5914d0306e2d);
            

            marker_11b65d5a42814349a4d9c9af1e686692.bindPopup(popup_00225272f3f04b23a166460dace041f7)
            ;

            
        
    
        marker_11b65d5a42814349a4d9c9af1e686692.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_6ee1e828a21341f6a176c118f7c528a6 = L.marker(
            [37.49853, 126.731241],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_977b4659761940d88b530af3a55596ab = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_6ee1e828a21341f6a176c118f7c528a6.setIcon(icon_977b4659761940d88b530af3a55596ab);
            
    
            var popup_f4e5a0873884439aa84d89c26f8ef99b = L.popup({maxWidth: '100%'
            
            });

            
                var html_884c891d8bee428389ce2ae644a4e56d = $(`<div id="html_884c891d8bee428389ce2ae644a4e56d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>부평24시 SKY 동물의료센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-710-7533<br>            <strong>- 주소 :</strong> 인천광역시 부평구 부흥로 351, 3층 (부평동)<br></div>`)[0];
                popup_f4e5a0873884439aa84d89c26f8ef99b.setContent(html_884c891d8bee428389ce2ae644a4e56d);
            

            marker_6ee1e828a21341f6a176c118f7c528a6.bindPopup(popup_f4e5a0873884439aa84d89c26f8ef99b)
            ;

            
        
    
        marker_6ee1e828a21341f6a176c118f7c528a6.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_2df11344a8a7496ea30578b43bc4aa2a = L.marker(
            [37.5083369, 126.72908000000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_8f45dd7eb73e4a1fb1a1bc7dffe39334 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_2df11344a8a7496ea30578b43bc4aa2a.setIcon(icon_8f45dd7eb73e4a1fb1a1bc7dffe39334);
            
    
            var popup_3ac76cf7e1ea45dbb4424019fbeeac0c = L.popup({maxWidth: '100%'
            
            });

            
                var html_200d33d57d564e1f87a430e06e85ae29 = $(`<div id="html_200d33d57d564e1f87a430e06e85ae29" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>예동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-362-8111<br>            <strong>- 주소 :</strong> 인천광역시 부평구 갈월동로 13, 1층 (갈산동)<br></div>`)[0];
                popup_3ac76cf7e1ea45dbb4424019fbeeac0c.setContent(html_200d33d57d564e1f87a430e06e85ae29);
            

            marker_2df11344a8a7496ea30578b43bc4aa2a.bindPopup(popup_3ac76cf7e1ea45dbb4424019fbeeac0c)
            ;

            
        
    
        marker_2df11344a8a7496ea30578b43bc4aa2a.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_9b602c82294d4b529f4b89afe8c1a561 = L.marker(
            [37.5037703, 126.72198300000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b6c49d1e80e94d1bb7244cddcea23b31 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_9b602c82294d4b529f4b89afe8c1a561.setIcon(icon_b6c49d1e80e94d1bb7244cddcea23b31);
            
    
            var popup_5cb77105ccca4adb8208fc7ddc9948af = L.popup({maxWidth: '100%'
            
            });

            
                var html_2df9f5a2b62242f9890bd38722a34648 = $(`<div id="html_2df9f5a2b62242f9890bd38722a34648" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>부평종합외과센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 070-4849-1182<br>            <strong>- 주소 :</strong> 인천광역시 부평구 부평대로 138, 부평 신일유스테이션 오피스텔 2층 210호 (부평동)<br></div>`)[0];
                popup_5cb77105ccca4adb8208fc7ddc9948af.setContent(html_2df9f5a2b62242f9890bd38722a34648);
            

            marker_9b602c82294d4b529f4b89afe8c1a561.bindPopup(popup_5cb77105ccca4adb8208fc7ddc9948af)
            ;

            
        
    
        marker_9b602c82294d4b529f4b89afe8c1a561.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_040abd6d64024d58882e141a5e9162d5 = L.marker(
            [37.4901209, 126.711099],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_3f6ce522da974e2aa3f980ffb4963e5d = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_040abd6d64024d58882e141a5e9162d5.setIcon(icon_3f6ce522da974e2aa3f980ffb4963e5d);
            
    
            var popup_99ec80d9222743a48ee2e10574b78041 = L.popup({maxWidth: '100%'
            
            });

            
                var html_019ca10c03c44e38b4900194104b248a = $(`<div id="html_019ca10c03c44e38b4900194104b248a" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>부평 모모 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-524-5557<br>            <strong>- 주소 :</strong> 인천광역시 부평구 경원대로 1278, 101호 (부평동)<br></div>`)[0];
                popup_99ec80d9222743a48ee2e10574b78041.setContent(html_019ca10c03c44e38b4900194104b248a);
            

            marker_040abd6d64024d58882e141a5e9162d5.bindPopup(popup_99ec80d9222743a48ee2e10574b78041)
            ;

            
        
    
        marker_040abd6d64024d58882e141a5e9162d5.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_b5f5d5842a8943c1b00e98e2df683fb8 = L.marker(
            [37.4915344, 126.72568100000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_592034ba2d424add90bfac00ffcab35c = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_b5f5d5842a8943c1b00e98e2df683fb8.setIcon(icon_592034ba2d424add90bfac00ffcab35c);
            
    
            var popup_cf89ace0326f41049e3bfbfd6681ea07 = L.popup({maxWidth: '100%'
            
            });

            
                var html_fa77cc95980d454b8ffbe9aaedc5272b = $(`<div id="html_fa77cc95980d454b8ffbe9aaedc5272b" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>우성 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 부평구 경원대로 1409, 8층 (부평동)<br></div>`)[0];
                popup_cf89ace0326f41049e3bfbfd6681ea07.setContent(html_fa77cc95980d454b8ffbe9aaedc5272b);
            

            marker_b5f5d5842a8943c1b00e98e2df683fb8.bindPopup(popup_cf89ace0326f41049e3bfbfd6681ea07)
            ;

            
        
    
        marker_b5f5d5842a8943c1b00e98e2df683fb8.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_b4c2ba4e5e46488c856bca3949479030 = L.marker(
            [37.4517412, 126.735331],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_e4b937dea9af4df78bfe2d61313cab21 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_b4c2ba4e5e46488c856bca3949479030.setIcon(icon_e4b937dea9af4df78bfe2d61313cab21);
            
    
            var popup_24e1676f18664481ae9b861443dd63f1 = L.popup({maxWidth: '100%'
            
            });

            
                var html_31142644d7ed41a2bda56624d3e5c645 = $(`<div id="html_31142644d7ed41a2bda56624d3e5c645" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>신진동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-463-8801<br>            <strong>- 주소 :</strong> 인천광역시 남동구 소래로 697<br></div>`)[0];
                popup_24e1676f18664481ae9b861443dd63f1.setContent(html_31142644d7ed41a2bda56624d3e5c645);
            

            marker_b4c2ba4e5e46488c856bca3949479030.bindPopup(popup_24e1676f18664481ae9b861443dd63f1)
            ;

            
        
    
        marker_b4c2ba4e5e46488c856bca3949479030.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d9e09bb4e8224092982331db679e0723 = L.marker(
            [37.454777, 126.731082],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_fa34b5a818aa421fbc9c9b20af9d2c4d = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d9e09bb4e8224092982331db679e0723.setIcon(icon_fa34b5a818aa421fbc9c9b20af9d2c4d);
            
    
            var popup_d6502e605a994c96b5fb809474c67173 = L.popup({maxWidth: '100%'
            
            });

            
                var html_a64266b83de340e3bdaf8b5bee9be88d = $(`<div id="html_a64266b83de340e3bdaf8b5bee9be88d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>젬마동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-464-4488<br>            <strong>- 주소 :</strong> 인천광역시 남동구 구월로 364 <br></div>`)[0];
                popup_d6502e605a994c96b5fb809474c67173.setContent(html_a64266b83de340e3bdaf8b5bee9be88d);
            

            marker_d9e09bb4e8224092982331db679e0723.bindPopup(popup_d6502e605a994c96b5fb809474c67173)
            ;

            
        
    
        marker_d9e09bb4e8224092982331db679e0723.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_9e75ff9888a446e98c6291ee7872ae03 = L.marker(
            [37.4610955, 126.72055900000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_14655a1a67904355a9d390242a1dc0ca = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_9e75ff9888a446e98c6291ee7872ae03.setIcon(icon_14655a1a67904355a9d390242a1dc0ca);
            
    
            var popup_8b13fc2f30b4455a8ed5d2baf628e473 = L.popup({maxWidth: '100%'
            
            });

            
                var html_080570d070bf4cd19896f35b80cd4421 = $(`<div id="html_080570d070bf4cd19896f35b80cd4421" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>세우리동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-463-9066<br>            <strong>- 주소 :</strong> 인천광역시 남동구 백범로 260<br></div>`)[0];
                popup_8b13fc2f30b4455a8ed5d2baf628e473.setContent(html_080570d070bf4cd19896f35b80cd4421);
            

            marker_9e75ff9888a446e98c6291ee7872ae03.bindPopup(popup_8b13fc2f30b4455a8ed5d2baf628e473)
            ;

            
        
    
        marker_9e75ff9888a446e98c6291ee7872ae03.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e86a501983a44a108960a2fdd3adfab9 = L.marker(
            [37.45171129999999, 126.718594],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_9b6826eccace4ffea9a05482efed4e6f = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e86a501983a44a108960a2fdd3adfab9.setIcon(icon_9b6826eccace4ffea9a05482efed4e6f);
            
    
            var popup_66615426482c4686a79eb0ab5f962a0e = L.popup({maxWidth: '100%'
            
            });

            
                var html_086595100f3840c18b1bf35271d73dc8 = $(`<div id="html_086595100f3840c18b1bf35271d73dc8" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>자연동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-468-6406<br>            <strong>- 주소 :</strong> 인천광역시 남동구 호구포로 775<br></div>`)[0];
                popup_66615426482c4686a79eb0ab5f962a0e.setContent(html_086595100f3840c18b1bf35271d73dc8);
            

            marker_e86a501983a44a108960a2fdd3adfab9.bindPopup(popup_66615426482c4686a79eb0ab5f962a0e)
            ;

            
        
    
        marker_e86a501983a44a108960a2fdd3adfab9.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_49da42c362c24a8a9d80f3b80f7daa27 = L.marker(
            [37.4442801, 126.73900800000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_13df3a78871b4baa965a578fd2c04fed = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_49da42c362c24a8a9d80f3b80f7daa27.setIcon(icon_13df3a78871b4baa965a578fd2c04fed);
            
    
            var popup_a15adab40fea4b0db40bd2c17a9fcdaa = L.popup({maxWidth: '100%'
            
            });

            
                var html_7d611ccef3424e5984f37a0814b2d2d2 = $(`<div id="html_7d611ccef3424e5984f37a0814b2d2d2" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>만수동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-467-8450<br>            <strong>- 주소 :</strong> 인천광역시 남동구 담방로 52-1<br></div>`)[0];
                popup_a15adab40fea4b0db40bd2c17a9fcdaa.setContent(html_7d611ccef3424e5984f37a0814b2d2d2);
            

            marker_49da42c362c24a8a9d80f3b80f7daa27.bindPopup(popup_a15adab40fea4b0db40bd2c17a9fcdaa)
            ;

            
        
    
        marker_49da42c362c24a8a9d80f3b80f7daa27.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e633f28c98804c96bc7869db0079b0ea = L.marker(
            [37.4456234, 126.735353],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_8d80817f4d17427cb0e76e9841f20d0a = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e633f28c98804c96bc7869db0079b0ea.setIcon(icon_8d80817f4d17427cb0e76e9841f20d0a);
            
    
            var popup_f7db9a2fe27043e0978eb399a0a4076a = L.popup({maxWidth: '100%'
            
            });

            
                var html_c1b9733aa80e4ea9990e094a539bd4ad = $(`<div id="html_c1b9733aa80e4ea9990e094a539bd4ad" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>해맑은동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-469-8275<br>            <strong>- 주소 :</strong> 인천광역시 남동구 장승로 24<br></div>`)[0];
                popup_f7db9a2fe27043e0978eb399a0a4076a.setContent(html_c1b9733aa80e4ea9990e094a539bd4ad);
            

            marker_e633f28c98804c96bc7869db0079b0ea.bindPopup(popup_f7db9a2fe27043e0978eb399a0a4076a)
            ;

            
        
    
        marker_e633f28c98804c96bc7869db0079b0ea.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_86e1c264a51642aea6cda4e7a1238420 = L.marker(
            [37.458102200000006, 126.697897],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_417f399a113d40f7ace6180273bc3b68 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_86e1c264a51642aea6cda4e7a1238420.setIcon(icon_417f399a113d40f7ace6180273bc3b68);
            
    
            var popup_c110bd8f31d14a64b432748321fd62c2 = L.popup({maxWidth: '100%'
            
            });

            
                var html_9830e2206900473f9c264427104a9356 = $(`<div id="html_9830e2206900473f9c264427104a9356" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>덕수동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-467-8575<br>            <strong>- 주소 :</strong> 인천광역시 남동구 구월로 65<br></div>`)[0];
                popup_c110bd8f31d14a64b432748321fd62c2.setContent(html_9830e2206900473f9c264427104a9356);
            

            marker_86e1c264a51642aea6cda4e7a1238420.bindPopup(popup_c110bd8f31d14a64b432748321fd62c2)
            ;

            
        
    
        marker_86e1c264a51642aea6cda4e7a1238420.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_9017501bf00a4244be61ef2a7ba46f10 = L.marker(
            [37.4580642, 126.73046000000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_08ff114a9a054ca6a26f78763980b417 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_9017501bf00a4244be61ef2a7ba46f10.setIcon(icon_08ff114a9a054ca6a26f78763980b417);
            
    
            var popup_245060295fce43dcaa090d7add6d2601 = L.popup({maxWidth: '100%'
            
            });

            
                var html_36e96cbaaac04942bd27533fa5c8a0aa = $(`<div id="html_36e96cbaaac04942bd27533fa5c8a0aa" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>하태흥반려동물의료센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-466-8670<br>            <strong>- 주소 :</strong> 인천광역시 남동구 만수로 10<br></div>`)[0];
                popup_245060295fce43dcaa090d7add6d2601.setContent(html_36e96cbaaac04942bd27533fa5c8a0aa);
            

            marker_9017501bf00a4244be61ef2a7ba46f10.bindPopup(popup_245060295fce43dcaa090d7add6d2601)
            ;

            
        
    
        marker_9017501bf00a4244be61ef2a7ba46f10.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_cb840c06cb9f47ef8bf0450673bbc230 = L.marker(
            [37.4592016, 126.73138300000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_a8a0ee2529184a2da3d80f207fb59f07 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_cb840c06cb9f47ef8bf0450673bbc230.setIcon(icon_a8a0ee2529184a2da3d80f207fb59f07);
            
    
            var popup_b6b5819eec6a4adca5472cf5464b7b5a = L.popup({maxWidth: '100%'
            
            });

            
                var html_f755941dfc5249128c14a91d454f6b21 = $(`<div id="html_f755941dfc5249128c14a91d454f6b21" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>좋은친구들동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-469-7782<br>            <strong>- 주소 :</strong> 인천광역시 남동구 만수로 25<br></div>`)[0];
                popup_b6b5819eec6a4adca5472cf5464b7b5a.setContent(html_f755941dfc5249128c14a91d454f6b21);
            

            marker_cb840c06cb9f47ef8bf0450673bbc230.bindPopup(popup_b6b5819eec6a4adca5472cf5464b7b5a)
            ;

            
        
    
        marker_cb840c06cb9f47ef8bf0450673bbc230.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e56d0acf462548e3a3550cdc66c78b2e = L.marker(
            [37.4675492, 126.70678899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ca1e1b57f76e488da531cad18997d0da = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e56d0acf462548e3a3550cdc66c78b2e.setIcon(icon_ca1e1b57f76e488da531cad18997d0da);
            
    
            var popup_3e7f2ce26a0c403ba0d3de86b96db33e = L.popup({maxWidth: '100%'
            
            });

            
                var html_eb688e0ab27542eda53c14f59252d2b6 = $(`<div id="html_eb688e0ab27542eda53c14f59252d2b6" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>마이펫동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-428-8275<br>            <strong>- 주소 :</strong> 인천광역시 남동구 백범로 400<br></div>`)[0];
                popup_3e7f2ce26a0c403ba0d3de86b96db33e.setContent(html_eb688e0ab27542eda53c14f59252d2b6);
            

            marker_e56d0acf462548e3a3550cdc66c78b2e.bindPopup(popup_3e7f2ce26a0c403ba0d3de86b96db33e)
            ;

            
        
    
        marker_e56d0acf462548e3a3550cdc66c78b2e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_0538c903893b4320993158dd877ff29b = L.marker(
            [37.4682592, 126.698953],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b7f61dc9a494413a8c966eeec9367bee = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_0538c903893b4320993158dd877ff29b.setIcon(icon_b7f61dc9a494413a8c966eeec9367bee);
            
    
            var popup_d253bb1c76174002b5217c14eec3fec5 = L.popup({maxWidth: '100%'
            
            });

            
                var html_3090a288a54749d48bd76fa267ee9478 = $(`<div id="html_3090a288a54749d48bd76fa267ee9478" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>동암동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-437-5535<br>            <strong>- 주소 :</strong> 인천광역시 남동구 백범로 469<br></div>`)[0];
                popup_d253bb1c76174002b5217c14eec3fec5.setContent(html_3090a288a54749d48bd76fa267ee9478);
            

            marker_0538c903893b4320993158dd877ff29b.bindPopup(popup_d253bb1c76174002b5217c14eec3fec5)
            ;

            
        
    
        marker_0538c903893b4320993158dd877ff29b.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_6e5b61eb0d5641f9b179adeaf83a7cd3 = L.marker(
            [37.4595136, 126.726047],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_f0c3ea8f010544a988b46deb46e9b09a = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_6e5b61eb0d5641f9b179adeaf83a7cd3.setIcon(icon_f0c3ea8f010544a988b46deb46e9b09a);
            
    
            var popup_7248a692d8b74f76a2e592f16458d1c3 = L.popup({maxWidth: '100%'
            
            });

            
                var html_75324f17c2f54f65ba581732d1882a0d = $(`<div id="html_75324f17c2f54f65ba581732d1882a0d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>신세계동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-468-7533<br>            <strong>- 주소 :</strong> 인천광역시 남동구 백범로 203<br></div>`)[0];
                popup_7248a692d8b74f76a2e592f16458d1c3.setContent(html_75324f17c2f54f65ba581732d1882a0d);
            

            marker_6e5b61eb0d5641f9b179adeaf83a7cd3.bindPopup(popup_7248a692d8b74f76a2e592f16458d1c3)
            ;

            
        
    
        marker_6e5b61eb0d5641f9b179adeaf83a7cd3.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_29777fb65f4e4d2194b577b2cfcb6508 = L.marker(
            [37.4595357, 126.705374],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_bd8ea8430020434d845f6e14f3eef894 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_29777fb65f4e4d2194b577b2cfcb6508.setIcon(icon_bd8ea8430020434d845f6e14f3eef894);
            
    
            var popup_22f50b1feefc4650b8ddb7ca1d67f9e9 = L.popup({maxWidth: '100%'
            
            });

            
                var html_20c9c3a4097448cfa5d8b85caac7a1b9 = $(`<div id="html_20c9c3a4097448cfa5d8b85caac7a1b9" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>주주동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-442-9111<br>            <strong>- 주소 :</strong> 인천광역시 남동구 구월로 137번길59<br></div>`)[0];
                popup_22f50b1feefc4650b8ddb7ca1d67f9e9.setContent(html_20c9c3a4097448cfa5d8b85caac7a1b9);
            

            marker_29777fb65f4e4d2194b577b2cfcb6508.bindPopup(popup_22f50b1feefc4650b8ddb7ca1d67f9e9)
            ;

            
        
    
        marker_29777fb65f4e4d2194b577b2cfcb6508.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_f0a245baab9846b1a953252a48c7dd0e = L.marker(
            [37.431594700000005, 126.71601399999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ef630e38d3724bab8b9b651f64a50143 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f0a245baab9846b1a953252a48c7dd0e.setIcon(icon_ef630e38d3724bab8b9b651f64a50143);
            
    
            var popup_adbcd7bef11745ce9a7ab13e945d9eb9 = L.popup({maxWidth: '100%'
            
            });

            
                var html_3668ffcf47934840b62ca9a2bd4f1e84 = $(`<div id="html_3668ffcf47934840b62ca9a2bd4f1e84" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>필종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-462-2550<br>            <strong>- 주소 :</strong> 인천광역시 남동구 남촌동로 25번길11<br></div>`)[0];
                popup_adbcd7bef11745ce9a7ab13e945d9eb9.setContent(html_3668ffcf47934840b62ca9a2bd4f1e84);
            

            marker_f0a245baab9846b1a953252a48c7dd0e.bindPopup(popup_adbcd7bef11745ce9a7ab13e945d9eb9)
            ;

            
        
    
        marker_f0a245baab9846b1a953252a48c7dd0e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a00eb88c606e47abab776c6eaf3f973b = L.marker(
            [37.452012700000004, 126.701923],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_f20a9fd987514ba38b0aea1e11dac967 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a00eb88c606e47abab776c6eaf3f973b.setIcon(icon_f20a9fd987514ba38b0aea1e11dac967);
            
    
            var popup_888e090d2bb2424094ce730c67309bc4 = L.popup({maxWidth: '100%'
            
            });

            
                var html_7129dd68cf874c3690cce8ed57e016b9 = $(`<div id="html_7129dd68cf874c3690cce8ed57e016b9" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>백슬동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-437-7582<br>            <strong>- 주소 :</strong> 인천광역시 남동구 예술로 198<br></div>`)[0];
                popup_888e090d2bb2424094ce730c67309bc4.setContent(html_7129dd68cf874c3690cce8ed57e016b9);
            

            marker_a00eb88c606e47abab776c6eaf3f973b.bindPopup(popup_888e090d2bb2424094ce730c67309bc4)
            ;

            
        
    
        marker_a00eb88c606e47abab776c6eaf3f973b.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_3e8c4119ba864b0d960206e184c9fc6e = L.marker(
            [37.4552506, 126.725486],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_64b034952e7346479720b0840566d40b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_3e8c4119ba864b0d960206e184c9fc6e.setIcon(icon_64b034952e7346479720b0840566d40b);
            
    
            var popup_0bcea7a774604cbeb738c1afcd68a20e = L.popup({maxWidth: '100%'
            
            });

            
                var html_153226f3fa494a06b10afd73a2f88eec = $(`<div id="html_153226f3fa494a06b10afd73a2f88eec" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>행복한동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-469-7588<br>            <strong>- 주소 :</strong> 인천광역시 남동구 구월로 314<br></div>`)[0];
                popup_0bcea7a774604cbeb738c1afcd68a20e.setContent(html_153226f3fa494a06b10afd73a2f88eec);
            

            marker_3e8c4119ba864b0d960206e184c9fc6e.bindPopup(popup_0bcea7a774604cbeb738c1afcd68a20e)
            ;

            
        
    
        marker_3e8c4119ba864b0d960206e184c9fc6e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_9c455fe075044c38b0ca21ee1ec84766 = L.marker(
            [37.448142299999994, 126.70709099999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_6c42a37041de4e0fa3e34b24c5e93a79 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_9c455fe075044c38b0ca21ee1ec84766.setIcon(icon_6c42a37041de4e0fa3e34b24c5e93a79);
            
    
            var popup_104e5b95ad6e405aafd9635a07160dbb = L.popup({maxWidth: '100%'
            
            });

            
                var html_78894726a1c949d89de3eae67f31d286 = $(`<div id="html_78894726a1c949d89de3eae67f31d286" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>소망동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-434-6002<br>            <strong>- 주소 :</strong> 인천광역시 남동구 남동대로 737<br></div>`)[0];
                popup_104e5b95ad6e405aafd9635a07160dbb.setContent(html_78894726a1c949d89de3eae67f31d286);
            

            marker_9c455fe075044c38b0ca21ee1ec84766.bindPopup(popup_104e5b95ad6e405aafd9635a07160dbb)
            ;

            
        
    
        marker_9c455fe075044c38b0ca21ee1ec84766.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_eb81a596f67c45e79cea09d2f24d338c = L.marker(
            [37.4635528, 126.708444],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_4ac5cba6ac02443996d51d2f66e39085 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_eb81a596f67c45e79cea09d2f24d338c.setIcon(icon_4ac5cba6ac02443996d51d2f66e39085);
            
    
            var popup_475cd95fc22e4488a84a9ef97bf28dd8 = L.popup({maxWidth: '100%'
            
            });

            
                var html_d44a9b6aca4b4d339f6ead6d7530ca28 = $(`<div id="html_d44a9b6aca4b4d339f6ead6d7530ca28" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>24시보보스동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-433-0755<br>            <strong>- 주소 :</strong> 인천광역시 남동구 남동대로 910<br></div>`)[0];
                popup_475cd95fc22e4488a84a9ef97bf28dd8.setContent(html_d44a9b6aca4b4d339f6ead6d7530ca28);
            

            marker_eb81a596f67c45e79cea09d2f24d338c.bindPopup(popup_475cd95fc22e4488a84a9ef97bf28dd8)
            ;

            
        
    
        marker_eb81a596f67c45e79cea09d2f24d338c.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_dfdddf886e8d498f8fccb4dce2583a6e = L.marker(
            [37.3998197, 126.73298500000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_93b26554e94b4f82b867d6cd09bd7cef = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_dfdddf886e8d498f8fccb4dce2583a6e.setIcon(icon_93b26554e94b4f82b867d6cd09bd7cef);
            
    
            var popup_a4753597c19848038eb11b3aabdae2f5 = L.popup({maxWidth: '100%'
            
            });

            
                var html_0efadf78323340b1b732235a09e8db4f = $(`<div id="html_0efadf78323340b1b732235a09e8db4f" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>논현동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-423-0975<br>            <strong>- 주소 :</strong> 인천광역시 남동구 소래역남로 16번길 75<br></div>`)[0];
                popup_a4753597c19848038eb11b3aabdae2f5.setContent(html_0efadf78323340b1b732235a09e8db4f);
            

            marker_dfdddf886e8d498f8fccb4dce2583a6e.bindPopup(popup_a4753597c19848038eb11b3aabdae2f5)
            ;

            
        
    
        marker_dfdddf886e8d498f8fccb4dce2583a6e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_8b728fe46d4443e8aebe7fc1e89a9840 = L.marker(
            [37.4575554, 126.702556],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_fe5541cb30d44a1491237dc12d343b47 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_8b728fe46d4443e8aebe7fc1e89a9840.setIcon(icon_fe5541cb30d44a1491237dc12d343b47);
            
    
            var popup_328ded99db0e411a9a1ca9eb9d5a2490 = L.popup({maxWidth: '100%'
            
            });

            
                var html_d70713c228c94558865f6774e33c9482 = $(`<div id="html_d70713c228c94558865f6774e33c9482" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>강아지와고양이나라동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-439-3578<br>            <strong>- 주소 :</strong> 인천광역시 남동구 예술로 258번길5<br></div>`)[0];
                popup_328ded99db0e411a9a1ca9eb9d5a2490.setContent(html_d70713c228c94558865f6774e33c9482);
            

            marker_8b728fe46d4443e8aebe7fc1e89a9840.bindPopup(popup_328ded99db0e411a9a1ca9eb9d5a2490)
            ;

            
        
    
        marker_8b728fe46d4443e8aebe7fc1e89a9840.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d3fca0da54584df2a7dd60e85ba824a8 = L.marker(
            [37.4678659, 126.700175],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_2c790ad550764d329d42a63f786a40ad = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d3fca0da54584df2a7dd60e85ba824a8.setIcon(icon_2c790ad550764d329d42a63f786a40ad);
            
    
            var popup_78a218133b00499b8c63ef8170d76bc6 = L.popup({maxWidth: '100%'
            
            });

            
                var html_4de4cc12c6a741b9946ed9f9ad10c7a4 = $(`<div id="html_4de4cc12c6a741b9946ed9f9ad10c7a4" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>D&C동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-437-7525<br>            <strong>- 주소 :</strong> 인천광역시 남동구 백범로 457<br></div>`)[0];
                popup_78a218133b00499b8c63ef8170d76bc6.setContent(html_4de4cc12c6a741b9946ed9f9ad10c7a4);
            

            marker_d3fca0da54584df2a7dd60e85ba824a8.bindPopup(popup_78a218133b00499b8c63ef8170d76bc6)
            ;

            
        
    
        marker_d3fca0da54584df2a7dd60e85ba824a8.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_03d00a968d444ff08c6e2ad196e57174 = L.marker(
            [37.469530799999994, 126.689],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_cf196e8101664ce9910949a5872d1b4f = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_03d00a968d444ff08c6e2ad196e57174.setIcon(icon_cf196e8101664ce9910949a5872d1b4f);
            
    
            var popup_03f800c75757468d8209a119e78de210 = L.popup({maxWidth: '100%'
            
            });

            
                var html_098caec6904e41dc8b7f6abdadb46db0 = $(`<div id="html_098caec6904e41dc8b7f6abdadb46db0" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>도그플러스동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-862-0975<br>            <strong>- 주소 :</strong> 인천광역시 남동구 경원대로 971<br></div>`)[0];
                popup_03f800c75757468d8209a119e78de210.setContent(html_098caec6904e41dc8b7f6abdadb46db0);
            

            marker_03d00a968d444ff08c6e2ad196e57174.bindPopup(popup_03f800c75757468d8209a119e78de210)
            ;

            
        
    
        marker_03d00a968d444ff08c6e2ad196e57174.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_4b15dea1ab1a4fb8a00b699a60b187ec = L.marker(
            [37.4449046, 126.698719],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_3fbe7d3ff7d74692ba7c00ba79db73cb = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_4b15dea1ab1a4fb8a00b699a60b187ec.setIcon(icon_3fbe7d3ff7d74692ba7c00ba79db73cb);
            
    
            var popup_f4c3af52942b4f0ab0c6761d439be3c7 = L.popup({maxWidth: '100%'
            
            });

            
                var html_4296954f5ca04055a4c18a2fbecacb90 = $(`<div id="html_4296954f5ca04055a4c18a2fbecacb90" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>동물의왕국동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-439-0039<br>            <strong>- 주소 :</strong> 인천광역시 남동구 문화로 65<br></div>`)[0];
                popup_f4c3af52942b4f0ab0c6761d439be3c7.setContent(html_4296954f5ca04055a4c18a2fbecacb90);
            

            marker_4b15dea1ab1a4fb8a00b699a60b187ec.bindPopup(popup_f4c3af52942b4f0ab0c6761d439be3c7)
            ;

            
        
    
        marker_4b15dea1ab1a4fb8a00b699a60b187ec.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_94bd0e2a4cef490d8dc1af5e923628b6 = L.marker(
            [37.4033004, 126.72251399999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_2d792c6e86d24b74988e68b02ed8d749 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_94bd0e2a4cef490d8dc1af5e923628b6.setIcon(icon_2d792c6e86d24b74988e68b02ed8d749);
            
    
            var popup_fff1e09caf304ff2a1d97b6e049608c3 = L.popup({maxWidth: '100%'
            
            });

            
                var html_075aeed5f9be45c18bbb6f1e41c672b2 = $(`<div id="html_075aeed5f9be45c18bbb6f1e41c672b2" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>해피동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-439-8822<br>            <strong>- 주소 :</strong> 인천광역시 남동구 논현남로 19<br></div>`)[0];
                popup_fff1e09caf304ff2a1d97b6e049608c3.setContent(html_075aeed5f9be45c18bbb6f1e41c672b2);
            

            marker_94bd0e2a4cef490d8dc1af5e923628b6.bindPopup(popup_fff1e09caf304ff2a1d97b6e049608c3)
            ;

            
        
    
        marker_94bd0e2a4cef490d8dc1af5e923628b6.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a1eadf8354b54f2ba9dc86b20a40edc6 = L.marker(
            [37.4637601, 126.70846599999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_0d3b7aef838748069a14342036ec7e45 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a1eadf8354b54f2ba9dc86b20a40edc6.setIcon(icon_0d3b7aef838748069a14342036ec7e45);
            
    
            var popup_d7fc18ac3c874b7baba1d72cc109cdd1 = L.popup({maxWidth: '100%'
            
            });

            
                var html_ceaf5cc085ac4f6eb82cc8a4a1d24222 = $(`<div id="html_ceaf5cc085ac4f6eb82cc8a4a1d24222" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>주식회사 이십사시 독스동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-433-0075<br>            <strong>- 주소 :</strong> 인천광역시 남동구 남동대로 912<br></div>`)[0];
                popup_d7fc18ac3c874b7baba1d72cc109cdd1.setContent(html_ceaf5cc085ac4f6eb82cc8a4a1d24222);
            

            marker_a1eadf8354b54f2ba9dc86b20a40edc6.bindPopup(popup_d7fc18ac3c874b7baba1d72cc109cdd1)
            ;

            
        
    
        marker_a1eadf8354b54f2ba9dc86b20a40edc6.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_b6810968315a45f9ba8332418ccff8fb = L.marker(
            [37.398003499999994, 126.72681399999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b82463b394424579b204dcba68008c2e = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_b6810968315a45f9ba8332418ccff8fb.setIcon(icon_b82463b394424579b204dcba68008c2e);
            
    
            var popup_9826df1ff50e4b3ea82ac2f5b8c3ef64 = L.popup({maxWidth: '100%'
            
            });

            
                var html_9d3c40078e6241f6bdbb04f54e72d43e = $(`<div id="html_9d3c40078e6241f6bdbb04f54e72d43e" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>우리집동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-437-8275<br>            <strong>- 주소 :</strong> 인천광역시 남동구 논고개로 71<br></div>`)[0];
                popup_9826df1ff50e4b3ea82ac2f5b8c3ef64.setContent(html_9d3c40078e6241f6bdbb04f54e72d43e);
            

            marker_b6810968315a45f9ba8332418ccff8fb.bindPopup(popup_9826df1ff50e4b3ea82ac2f5b8c3ef64)
            ;

            
        
    
        marker_b6810968315a45f9ba8332418ccff8fb.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_0789146a328b4cef92c233bfdda1d6d9 = L.marker(
            [37.457092200000005, 126.708266],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_5f66459be12140fcb406f4ed8cd03f8a = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_0789146a328b4cef92c233bfdda1d6d9.setIcon(icon_5f66459be12140fcb406f4ed8cd03f8a);
            
    
            var popup_6f25809c34ce4cbb9b632a1f9678f561 = L.popup({maxWidth: '100%'
            
            });

            
                var html_f6fff0da909648cbba0bc779874ad24b = $(`<div id="html_f6fff0da909648cbba0bc779874ad24b" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>파스텔LC동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-431-7975<br>            <strong>- 주소 :</strong> 인천광역시 남동구 구월로 159<br></div>`)[0];
                popup_6f25809c34ce4cbb9b632a1f9678f561.setContent(html_f6fff0da909648cbba0bc779874ad24b);
            

            marker_0789146a328b4cef92c233bfdda1d6d9.bindPopup(popup_6f25809c34ce4cbb9b632a1f9678f561)
            ;

            
        
    
        marker_0789146a328b4cef92c233bfdda1d6d9.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d57100e3c6cc44fb89f63f6fa860fab6 = L.marker(
            [37.4497421, 126.70192],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_1c6467a3efb4490d8f7aa781bdd680ed = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d57100e3c6cc44fb89f63f6fa860fab6.setIcon(icon_1c6467a3efb4490d8f7aa781bdd680ed);
            
    
            var popup_d6d515bc653e4fdca77a2137e52d9102 = L.popup({maxWidth: '100%'
            
            });

            
                var html_aa6739c8fd834f2b93be24172da486c0 = $(`<div id="html_aa6739c8fd834f2b93be24172da486c0" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>24시 스카이동물의료센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-715-7959<br>            <strong>- 주소 :</strong> 인천광역시 남동구 인주대로 586<br></div>`)[0];
                popup_d6d515bc653e4fdca77a2137e52d9102.setContent(html_aa6739c8fd834f2b93be24172da486c0);
            

            marker_d57100e3c6cc44fb89f63f6fa860fab6.bindPopup(popup_d6d515bc653e4fdca77a2137e52d9102)
            ;

            
        
    
        marker_d57100e3c6cc44fb89f63f6fa860fab6.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d5a3bf437e264d49bb94c26508ced29f = L.marker(
            [37.4459488, 126.69483899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_f9f6d8f3b34342f69e352d6f90582c8f = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d5a3bf437e264d49bb94c26508ced29f.setIcon(icon_f9f6d8f3b34342f69e352d6f90582c8f);
            
    
            var popup_c499b66d36064695b57e173fb495649d = L.popup({maxWidth: '100%'
            
            });

            
                var html_03ecca4f92e64363983e560ebfce04a6 = $(`<div id="html_03ecca4f92e64363983e560ebfce04a6" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>보람동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-429-1673<br>            <strong>- 주소 :</strong> 인천광역시 남동구 문화서로3번길 7<br></div>`)[0];
                popup_c499b66d36064695b57e173fb495649d.setContent(html_03ecca4f92e64363983e560ebfce04a6);
            

            marker_d5a3bf437e264d49bb94c26508ced29f.bindPopup(popup_c499b66d36064695b57e173fb495649d)
            ;

            
        
    
        marker_d5a3bf437e264d49bb94c26508ced29f.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_1608bdce9d6f436595b06bb1d9e9b8c3 = L.marker(
            [37.3998197, 126.73298500000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_495adbe3d69a499a883cbc8c6926e32b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_1608bdce9d6f436595b06bb1d9e9b8c3.setIcon(icon_495adbe3d69a499a883cbc8c6926e32b);
            
    
            var popup_8ea16e693b6d4441afc30e5c8891a80c = L.popup({maxWidth: '100%'
            
            });

            
                var html_70be39762c664ecfa3d96a35f9006b61 = $(`<div id="html_70be39762c664ecfa3d96a35f9006b61" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>24시 소래동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-438-3227<br>            <strong>- 주소 :</strong> 인천광역시 남동구 소래역남로 16번길 75<br></div>`)[0];
                popup_8ea16e693b6d4441afc30e5c8891a80c.setContent(html_70be39762c664ecfa3d96a35f9006b61);
            

            marker_1608bdce9d6f436595b06bb1d9e9b8c3.bindPopup(popup_8ea16e693b6d4441afc30e5c8891a80c)
            ;

            
        
    
        marker_1608bdce9d6f436595b06bb1d9e9b8c3.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_1037a603e6284f7ca40b0d427eab58f3 = L.marker(
            [37.4244284, 126.75032900000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_625c81ed6fc44d82a90a5e4b14dd36e9 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_1037a603e6284f7ca40b0d427eab58f3.setIcon(icon_625c81ed6fc44d82a90a5e4b14dd36e9);
            
    
            var popup_07691d21c51b46819e8edecbc74ae46d = L.popup({maxWidth: '100%'
            
            });

            
                var html_ff03e9d6c6cd4a6eb3b9329a579f0d5d = $(`<div id="html_ff03e9d6c6cd4a6eb3b9329a579f0d5d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>보듬동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-467-0275<br>            <strong>- 주소 :</strong> 인천광역시 남동구 서창남순환로 2<br></div>`)[0];
                popup_07691d21c51b46819e8edecbc74ae46d.setContent(html_ff03e9d6c6cd4a6eb3b9329a579f0d5d);
            

            marker_1037a603e6284f7ca40b0d427eab58f3.bindPopup(popup_07691d21c51b46819e8edecbc74ae46d)
            ;

            
        
    
        marker_1037a603e6284f7ca40b0d427eab58f3.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_fcf6799f80214f6e9f24c41e4aa651b6 = L.marker(
            [37.401768, 126.73392700000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_c9f3da64b47e429583fc3fac11027df1 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_fcf6799f80214f6e9f24c41e4aa651b6.setIcon(icon_c9f3da64b47e429583fc3fac11027df1);
            
    
            var popup_bc63fbad196e434da76189f7d773d39d = L.popup({maxWidth: '100%'
            
            });

            
                var html_5caee1449239467abd08a2e68d3bee1b = $(`<div id="html_5caee1449239467abd08a2e68d3bee1b" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>우리애동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-271-2202<br>            <strong>- 주소 :</strong> 인천광역시 남동구 앵고개로 928<br></div>`)[0];
                popup_bc63fbad196e434da76189f7d773d39d.setContent(html_5caee1449239467abd08a2e68d3bee1b);
            

            marker_fcf6799f80214f6e9f24c41e4aa651b6.bindPopup(popup_bc63fbad196e434da76189f7d773d39d)
            ;

            
        
    
        marker_fcf6799f80214f6e9f24c41e4aa651b6.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_98bcb407db95414cb39895b2109ab4da = L.marker(
            [37.462470399999994, 126.69726899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_bd64e23cd35c4fe8a04441c86df2e758 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_98bcb407db95414cb39895b2109ab4da.setIcon(icon_bd64e23cd35c4fe8a04441c86df2e758);
            
    
            var popup_127fdf8fc10a4d6c898bdb7041f67094 = L.popup({maxWidth: '100%'
            
            });

            
                var html_b241948466db4f79af0754953a44e53e = $(`<div id="html_b241948466db4f79af0754953a44e53e" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>정서동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-422-5399<br>            <strong>- 주소 :</strong> 인천광역시 남동구 주안로 234<br></div>`)[0];
                popup_127fdf8fc10a4d6c898bdb7041f67094.setContent(html_b241948466db4f79af0754953a44e53e);
            

            marker_98bcb407db95414cb39895b2109ab4da.bindPopup(popup_127fdf8fc10a4d6c898bdb7041f67094)
            ;

            
        
    
        marker_98bcb407db95414cb39895b2109ab4da.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a40e5c08df664253a227a53479194f06 = L.marker(
            [37.4426458, 126.714266],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_178c301b580a4c9facae32089635d20b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a40e5c08df664253a227a53479194f06.setIcon(icon_178c301b580a4c9facae32089635d20b);
            
    
            var popup_bec58af63f7b454190d9ceb711054141 = L.popup({maxWidth: '100%'
            
            });

            
                var html_702fa7b35c2a4a589e1abb53300fee68 = $(`<div id="html_702fa7b35c2a4a589e1abb53300fee68" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>애니힐동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-466-7975<br>            <strong>- 주소 :</strong> 인천광역시 남동구 인하로 608<br></div>`)[0];
                popup_bec58af63f7b454190d9ceb711054141.setContent(html_702fa7b35c2a4a589e1abb53300fee68);
            

            marker_a40e5c08df664253a227a53479194f06.bindPopup(popup_bec58af63f7b454190d9ceb711054141)
            ;

            
        
    
        marker_a40e5c08df664253a227a53479194f06.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e154f82c504e40239d717b763abd1ce7 = L.marker(
            [37.461412, 126.73268600000002],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_8cf42dfa165e4bffbdb13335e3cec1b5 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e154f82c504e40239d717b763abd1ce7.setIcon(icon_8cf42dfa165e4bffbdb13335e3cec1b5);
            
    
            var popup_81cb658c7bb14cd681c0f1f87dfaef72 = L.popup({maxWidth: '100%'
            
            });

            
                var html_46b44f813d0a4c198a881fae1100e592 = $(`<div id="html_46b44f813d0a4c198a881fae1100e592" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>메이동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-462-0070<br>            <strong>- 주소 :</strong> 인천광역시 남동구 만수서로 60<br></div>`)[0];
                popup_81cb658c7bb14cd681c0f1f87dfaef72.setContent(html_46b44f813d0a4c198a881fae1100e592);
            

            marker_e154f82c504e40239d717b763abd1ce7.bindPopup(popup_81cb658c7bb14cd681c0f1f87dfaef72)
            ;

            
        
    
        marker_e154f82c504e40239d717b763abd1ce7.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_62d4578c71e949c0ae0c654cc749a1b8 = L.marker(
            [37.425532700000005, 126.74846200000002],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_8ae86544c5dd4a1487e9fe2abf8d3106 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_62d4578c71e949c0ae0c654cc749a1b8.setIcon(icon_8ae86544c5dd4a1487e9fe2abf8d3106);
            
    
            var popup_9c460282653949f6a4a615a1f93512d8 = L.popup({maxWidth: '100%'
            
            });

            
                var html_f7dc94863ae645c5a662df115a120ed9 = $(`<div id="html_f7dc94863ae645c5a662df115a120ed9" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>물빛동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-468-7975<br>            <strong>- 주소 :</strong> 인천광역시 남동구 서창남로 71<br></div>`)[0];
                popup_9c460282653949f6a4a615a1f93512d8.setContent(html_f7dc94863ae645c5a662df115a120ed9);
            

            marker_62d4578c71e949c0ae0c654cc749a1b8.bindPopup(popup_9c460282653949f6a4a615a1f93512d8)
            ;

            
        
    
        marker_62d4578c71e949c0ae0c654cc749a1b8.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_ebf1176d6ac84abca46030353e15295c = L.marker(
            [37.461596500000006, 126.70798799999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_d0ff4c434cc947edaa4d49478c3143bf = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_ebf1176d6ac84abca46030353e15295c.setIcon(icon_d0ff4c434cc947edaa4d49478c3143bf);
            
    
            var popup_0a575506432147e2bded33f7ebd97b1a = L.popup({maxWidth: '100%'
            
            });

            
                var html_cb139b0912864b0ead6f03ab3f96042e = $(`<div id="html_cb139b0912864b0ead6f03ab3f96042e" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>찬샘동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-254-7575<br>            <strong>- 주소 :</strong> 인천광역시 남동구 남동대로 887<br></div>`)[0];
                popup_0a575506432147e2bded33f7ebd97b1a.setContent(html_cb139b0912864b0ead6f03ab3f96042e);
            

            marker_ebf1176d6ac84abca46030353e15295c.bindPopup(popup_0a575506432147e2bded33f7ebd97b1a)
            ;

            
        
    
        marker_ebf1176d6ac84abca46030353e15295c.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_f78af19a21e14a90a50bf90ce0108f87 = L.marker(
            [37.4502326, 126.70708300000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_de1a23081b5d4dad92b368e43a6f4c0b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f78af19a21e14a90a50bf90ce0108f87.setIcon(icon_de1a23081b5d4dad92b368e43a6f4c0b);
            
    
            var popup_9e5ef464775b41799c4dd9c654957605 = L.popup({maxWidth: '100%'
            
            });

            
                var html_06d21c3671374904b94cbf96c1e1e2c7 = $(`<div id="html_06d21c3671374904b94cbf96c1e1e2c7" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>웰동물메디컬센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-433-7582<br>            <strong>- 주소 :</strong> 인천광역시 남동구 남동대로 757<br></div>`)[0];
                popup_9e5ef464775b41799c4dd9c654957605.setContent(html_06d21c3671374904b94cbf96c1e1e2c7);
            

            marker_f78af19a21e14a90a50bf90ce0108f87.bindPopup(popup_9e5ef464775b41799c4dd9c654957605)
            ;

            
        
    
        marker_f78af19a21e14a90a50bf90ce0108f87.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_270261405e5445feb71f8be8ae25de99 = L.marker(
            [37.4606704, 126.72369199999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_93160eb240ca4091bd5c9229c293793e = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_270261405e5445feb71f8be8ae25de99.setIcon(icon_93160eb240ca4091bd5c9229c293793e);
            
    
            var popup_5b22309dc27846e69e99c3b58d895b80 = L.popup({maxWidth: '100%'
            
            });

            
                var html_8941cd662cb941a9a22f68ee365e8874 = $(`<div id="html_8941cd662cb941a9a22f68ee365e8874" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>루이스24시동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-710-1237<br>            <strong>- 주소 :</strong> 인천광역시 남동구 백범로 232<br></div>`)[0];
                popup_5b22309dc27846e69e99c3b58d895b80.setContent(html_8941cd662cb941a9a22f68ee365e8874);
            

            marker_270261405e5445feb71f8be8ae25de99.bindPopup(popup_5b22309dc27846e69e99c3b58d895b80)
            ;

            
        
    
        marker_270261405e5445feb71f8be8ae25de99.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_18ce229a6ff7416fb19d6b750145e3b1 = L.marker(
            [37.4556661, 126.725948],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_0af5550399ab46f2a39c560990ab1c49 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_18ce229a6ff7416fb19d6b750145e3b1.setIcon(icon_0af5550399ab46f2a39c560990ab1c49);
            
    
            var popup_34ed23cfb8ec4e58a6f58ede7ff0fd0d = L.popup({maxWidth: '100%'
            
            });

            
                var html_cdb3f442a53943fcaff526fcb21e8c88 = $(`<div id="html_cdb3f442a53943fcaff526fcb21e8c88" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>길동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-467-1275<br>            <strong>- 주소 :</strong> 인천광역시 남동구 구월로 317 <br></div>`)[0];
                popup_34ed23cfb8ec4e58a6f58ede7ff0fd0d.setContent(html_cdb3f442a53943fcaff526fcb21e8c88);
            

            marker_18ce229a6ff7416fb19d6b750145e3b1.bindPopup(popup_34ed23cfb8ec4e58a6f58ede7ff0fd0d)
            ;

            
        
    
        marker_18ce229a6ff7416fb19d6b750145e3b1.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_527448ece0c34961a18fd5e8be544ffd = L.marker(
            [37.399174200000004, 126.72653899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_aefe8ac5fa2a46a48c7ed58177116445 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_527448ece0c34961a18fd5e8be544ffd.setIcon(icon_aefe8ac5fa2a46a48c7ed58177116445);
            
    
            var popup_0cee0a59c4df4463860198d153c32875 = L.popup({maxWidth: '100%'
            
            });

            
                var html_3fead983d18a4c728232fbbf1e4a6db2 = $(`<div id="html_3fead983d18a4c728232fbbf1e4a6db2" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>해와달동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-431-7580<br>            <strong>- 주소 :</strong> 인천광역시 남동구 논고개로 80<br></div>`)[0];
                popup_0cee0a59c4df4463860198d153c32875.setContent(html_3fead983d18a4c728232fbbf1e4a6db2);
            

            marker_527448ece0c34961a18fd5e8be544ffd.bindPopup(popup_0cee0a59c4df4463860198d153c32875)
            ;

            
        
    
        marker_527448ece0c34961a18fd5e8be544ffd.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_464b41be24f14eaeab11dbb0bd32f3c6 = L.marker(
            [37.4451326, 126.703351],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_db12b8885d1146e18d8f705fdd4594b5 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_464b41be24f14eaeab11dbb0bd32f3c6.setIcon(icon_db12b8885d1146e18d8f705fdd4594b5);
            
    
            var popup_7f69c457a7314eadad0ea730cd2e54b4 = L.popup({maxWidth: '100%'
            
            });

            
                var html_cddcc6043a05483aaf0ae2056cd362f8 = $(`<div id="html_cddcc6043a05483aaf0ae2056cd362f8" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>멍멍냐옹동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 남동구 인하로507번길 42<br></div>`)[0];
                popup_7f69c457a7314eadad0ea730cd2e54b4.setContent(html_cddcc6043a05483aaf0ae2056cd362f8);
            

            marker_464b41be24f14eaeab11dbb0bd32f3c6.bindPopup(popup_7f69c457a7314eadad0ea730cd2e54b4)
            ;

            
        
    
        marker_464b41be24f14eaeab11dbb0bd32f3c6.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_07ab4d10672341b0b17138b322dd4da5 = L.marker(
            [37.413835299999995, 126.712106],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_968b80e07dd84d4b82c33893731dd5d6 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_07ab4d10672341b0b17138b322dd4da5.setIcon(icon_968b80e07dd84d4b82c33893731dd5d6);
            
    
            var popup_fdab1861458b4c8f81c69cdd6923012d = L.popup({maxWidth: '100%'
            
            });

            
                var html_420eca5f3446455da34d8ef34add6cfe = $(`<div id="html_420eca5f3446455da34d8ef34add6cfe" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>조은동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-428-0275<br>            <strong>- 주소 :</strong> 인천광역시 남동구 남동대로370번길 113<br></div>`)[0];
                popup_fdab1861458b4c8f81c69cdd6923012d.setContent(html_420eca5f3446455da34d8ef34add6cfe);
            

            marker_07ab4d10672341b0b17138b322dd4da5.bindPopup(popup_fdab1861458b4c8f81c69cdd6923012d)
            ;

            
        
    
        marker_07ab4d10672341b0b17138b322dd4da5.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_f2484e2ffdc846be831118211f1025e0 = L.marker(
            [37.4555071, 126.71965300000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_86391cd5b05247a39c679e5a2add74d8 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f2484e2ffdc846be831118211f1025e0.setIcon(icon_86391cd5b05247a39c679e5a2add74d8);
            
    
            var popup_a23e931ecaf74e81ad8d22ceae8805b6 = L.popup({maxWidth: '100%'
            
            });

            
                var html_45a966810c0f409aab6c4280d57b5e0a = $(`<div id="html_45a966810c0f409aab6c4280d57b5e0a" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>바나나동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-231-0119<br>            <strong>- 주소 :</strong> 인천광역시 남동구 호구포로 818<br></div>`)[0];
                popup_a23e931ecaf74e81ad8d22ceae8805b6.setContent(html_45a966810c0f409aab6c4280d57b5e0a);
            

            marker_f2484e2ffdc846be831118211f1025e0.bindPopup(popup_a23e931ecaf74e81ad8d22ceae8805b6)
            ;

            
        
    
        marker_f2484e2ffdc846be831118211f1025e0.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_ff24b264ae7546299aebdd4b3b99d1e5 = L.marker(
            [37.4024111, 126.735427],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_6d9c657abf9647cabb2ef0fdf075793a = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_ff24b264ae7546299aebdd4b3b99d1e5.setIcon(icon_6d9c657abf9647cabb2ef0fdf075793a);
            
    
            var popup_dd07eb26c1ad42d196500fbc750ffd95 = L.popup({maxWidth: '100%'
            
            });

            
                var html_8b5e666e0a914635ad52b30428635ee7 = $(`<div id="html_8b5e666e0a914635ad52b30428635ee7" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>펫홈종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-423-7588<br>            <strong>- 주소 :</strong> 인천광역시 남동구 앵고개로 944<br></div>`)[0];
                popup_dd07eb26c1ad42d196500fbc750ffd95.setContent(html_8b5e666e0a914635ad52b30428635ee7);
            

            marker_ff24b264ae7546299aebdd4b3b99d1e5.bindPopup(popup_dd07eb26c1ad42d196500fbc750ffd95)
            ;

            
        
    
        marker_ff24b264ae7546299aebdd4b3b99d1e5.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_01657982d6424d46a16e26475fcbc97f = L.marker(
            [37.5156456, 126.67301699999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_364d25d2d9e7423e9085b3496aaf3c84 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_01657982d6424d46a16e26475fcbc97f.setIcon(icon_364d25d2d9e7423e9085b3496aaf3c84);
            
    
            var popup_c7640a51301a4255b62359b61589ed12 = L.popup({maxWidth: '100%'
            
            });

            
                var html_dc14b2df20bf42b3b17b4b61a2c0fcec = $(`<div id="html_dc14b2df20bf42b3b17b4b61a2c0fcec" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>가정동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-575-0833<br>            <strong>- 주소 :</strong> 인천광역시 서구 가정로 346 (가정동)<br></div>`)[0];
                popup_c7640a51301a4255b62359b61589ed12.setContent(html_dc14b2df20bf42b3b17b4b61a2c0fcec);
            

            marker_01657982d6424d46a16e26475fcbc97f.bindPopup(popup_c7640a51301a4255b62359b61589ed12)
            ;

            
        
    
        marker_01657982d6424d46a16e26475fcbc97f.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_79d154a7a2d64bceb4c1cd569b1a5a97 = L.marker(
            [37.54885720000001, 126.67666299999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_5de36cd30cf34999a0ab50ce2b9ee92c = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_79d154a7a2d64bceb4c1cd569b1a5a97.setIcon(icon_5de36cd30cf34999a0ab50ce2b9ee92c);
            
    
            var popup_ff970243c038421bbea1b6ba84989e40 = L.popup({maxWidth: '100%'
            
            });

            
                var html_0331fac9d98240aaa116e1ccf41aad79 = $(`<div id="html_0331fac9d98240aaa116e1ccf41aad79" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>우리동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-566-0075<br>            <strong>- 주소 :</strong> 인천광역시 서구 서곶로 349 (연희동)<br></div>`)[0];
                popup_ff970243c038421bbea1b6ba84989e40.setContent(html_0331fac9d98240aaa116e1ccf41aad79);
            

            marker_79d154a7a2d64bceb4c1cd569b1a5a97.bindPopup(popup_ff970243c038421bbea1b6ba84989e40)
            ;

            
        
    
        marker_79d154a7a2d64bceb4c1cd569b1a5a97.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_f641cd59a5bc45ce9660bff8a3417902 = L.marker(
            [37.5444844, 126.67233600000002],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_741db1117360416da81f7b9d1ee0b09f = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f641cd59a5bc45ce9660bff8a3417902.setIcon(icon_741db1117360416da81f7b9d1ee0b09f);
            
    
            var popup_74d658016d9146c981ee32ed9214b693 = L.popup({maxWidth: '100%'
            
            });

            
                var html_bd0f0ef10137497698176de06cb41120 = $(`<div id="html_bd0f0ef10137497698176de06cb41120" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>도희동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-566-0038<br>            <strong>- 주소 :</strong> 인천광역시 서구 승학로 245, 1층 (심곡동)<br></div>`)[0];
                popup_74d658016d9146c981ee32ed9214b693.setContent(html_bd0f0ef10137497698176de06cb41120);
            

            marker_f641cd59a5bc45ce9660bff8a3417902.bindPopup(popup_74d658016d9146c981ee32ed9214b693)
            ;

            
        
    
        marker_f641cd59a5bc45ce9660bff8a3417902.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d027265459264f2592db147a5f274fea = L.marker(
            [37.5933275, 126.696024],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_fd51e40e3e4f4229a47e03ff9c5daf09 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d027265459264f2592db147a5f274fea.setIcon(icon_fd51e40e3e4f4229a47e03ff9c5daf09);
            
    
            var popup_59635150a8c94946bb54ef165309bad9 = L.popup({maxWidth: '100%'
            
            });

            
                var html_19feb80cbd0e476cae6b4c5e593a0337 = $(`<div id="html_19feb80cbd0e476cae6b4c5e593a0337" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>원당동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-566-7588<br>            <strong>- 주소 :</strong> 인천광역시 서구 원당대로 852, 창신프라자 204호 (당하동)<br></div>`)[0];
                popup_59635150a8c94946bb54ef165309bad9.setContent(html_19feb80cbd0e476cae6b4c5e593a0337);
            

            marker_d027265459264f2592db147a5f274fea.bindPopup(popup_59635150a8c94946bb54ef165309bad9)
            ;

            
        
    
        marker_d027265459264f2592db147a5f274fea.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_c9c443456324441f8dbe51d0b466a23c = L.marker(
            [37.5942345, 126.67471],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b78886a047bd4898a23c68065f10cde0 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_c9c443456324441f8dbe51d0b466a23c.setIcon(icon_b78886a047bd4898a23c68065f10cde0);
            
    
            var popup_fac7bc6bd1954bc78ce67635f601cc3f = L.popup({maxWidth: '100%'
            
            });

            
                var html_70215a57649641d8811bf54327f1f551 = $(`<div id="html_70215a57649641d8811bf54327f1f551" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>화이트동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-561-7592<br>            <strong>- 주소 :</strong> 인천광역시 서구 서곶로 866 (마전동, 강서빌딩)<br></div>`)[0];
                popup_fac7bc6bd1954bc78ce67635f601cc3f.setContent(html_70215a57649641d8811bf54327f1f551);
            

            marker_c9c443456324441f8dbe51d0b466a23c.bindPopup(popup_fac7bc6bd1954bc78ce67635f601cc3f)
            ;

            
        
    
        marker_c9c443456324441f8dbe51d0b466a23c.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_61c1404380984d03a426f4127a82bd3f = L.marker(
            [37.5067604, 126.672547],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_91fc8d2993c2462b99efd4717bbf4c8b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_61c1404380984d03a426f4127a82bd3f.setIcon(icon_91fc8d2993c2462b99efd4717bbf4c8b);
            
    
            var popup_e7f18d5511ab471c99e5c7df41aad93c = L.popup({maxWidth: '100%'
            
            });

            
                var html_6b1501a333fe4432b5c97fb67123d18e = $(`<div id="html_6b1501a333fe4432b5c97fb67123d18e" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>굿모닝동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-583-1119<br>            <strong>- 주소 :</strong> 인천광역시 서구 가정로 246, 203호 (석남동)<br></div>`)[0];
                popup_e7f18d5511ab471c99e5c7df41aad93c.setContent(html_6b1501a333fe4432b5c97fb67123d18e);
            

            marker_61c1404380984d03a426f4127a82bd3f.bindPopup(popup_e7f18d5511ab471c99e5c7df41aad93c)
            ;

            
        
    
        marker_61c1404380984d03a426f4127a82bd3f.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_9d8af4d848384850a89607ac4f66f762 = L.marker(
            [37.5978812, 126.66747],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ac0b071134c44debaf70278c2dc9e0bc = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_9d8af4d848384850a89607ac4f66f762.setIcon(icon_ac0b071134c44debaf70278c2dc9e0bc);
            
    
            var popup_076bcdb2200a41999120e0adac62cb9b = L.popup({maxWidth: '100%'
            
            });

            
                var html_bd4320d1e62145abb6ac39798c406180 = $(`<div id="html_bd4320d1e62145abb6ac39798c406180" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>예 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-563-1575<br>            <strong>- 주소 :</strong> 인천광역시 서구 완정로 70, 영남탑스빌아파트 상가 (마전동)<br></div>`)[0];
                popup_076bcdb2200a41999120e0adac62cb9b.setContent(html_bd4320d1e62145abb6ac39798c406180);
            

            marker_9d8af4d848384850a89607ac4f66f762.bindPopup(popup_076bcdb2200a41999120e0adac62cb9b)
            ;

            
        
    
        marker_9d8af4d848384850a89607ac4f66f762.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d81ebc42c0b742468afb71a6c4714b1b = L.marker(
            [37.5945211, 126.664496],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_497fe4316fff435c853de659641de803 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d81ebc42c0b742468afb71a6c4714b1b.setIcon(icon_497fe4316fff435c853de659641de803);
            
    
            var popup_caf238670180428e9c01d459b498065e = L.popup({maxWidth: '100%'
            
            });

            
                var html_9834f98111b24f75955960d8d4d21447 = $(`<div id="html_9834f98111b24f75955960d8d4d21447" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>쿨펫동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-561-7599<br>            <strong>- 주소 :</strong> 인천광역시 서구 원당대로 581, 롯데마트 (마전동)<br></div>`)[0];
                popup_caf238670180428e9c01d459b498065e.setContent(html_9834f98111b24f75955960d8d4d21447);
            

            marker_d81ebc42c0b742468afb71a6c4714b1b.bindPopup(popup_caf238670180428e9c01d459b498065e)
            ;

            
        
    
        marker_d81ebc42c0b742468afb71a6c4714b1b.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a582b62b8c6c40da8e60ec38decf7556 = L.marker(
            [37.585356, 126.67659499999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_bdeaf6cc243f446ab4a5e7aa34407143 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a582b62b8c6c40da8e60ec38decf7556.setIcon(icon_bdeaf6cc243f446ab4a5e7aa34407143);
            
    
            var popup_73d89f8df268472bb252c37c15ea61ed = L.popup({maxWidth: '100%'
            
            });

            
                var html_1211707afbdf43b5aaeba0b87b5a53b6 = $(`<div id="html_1211707afbdf43b5aaeba0b87b5a53b6" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>쿨펫동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-565-7975<br>            <strong>- 주소 :</strong> 인천광역시 서구 서곶로 754, 당하 이마트 (당하동)<br></div>`)[0];
                popup_73d89f8df268472bb252c37c15ea61ed.setContent(html_1211707afbdf43b5aaeba0b87b5a53b6);
            

            marker_a582b62b8c6c40da8e60ec38decf7556.bindPopup(popup_73d89f8df268472bb252c37c15ea61ed)
            ;

            
        
    
        marker_a582b62b8c6c40da8e60ec38decf7556.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_04af7bc358d749eda3c13b97b5237f38 = L.marker(
            [37.5653, 126.67658],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_02bc2ebe94dd4ae2b59080dc8fcaef3d = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_04af7bc358d749eda3c13b97b5237f38.setIcon(icon_02bc2ebe94dd4ae2b59080dc8fcaef3d);
            
    
            var popup_e526602c36a04b3191df1347ffb5ba0b = L.popup({maxWidth: '100%'
            
            });

            
                var html_98453399969e451199809a4e1bf35c62 = $(`<div id="html_98453399969e451199809a4e1bf35c62" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>검암동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-563-0775<br>            <strong>- 주소 :</strong> 인천광역시 서구 승학로 512 (검암동)<br></div>`)[0];
                popup_e526602c36a04b3191df1347ffb5ba0b.setContent(html_98453399969e451199809a4e1bf35c62);
            

            marker_04af7bc358d749eda3c13b97b5237f38.bindPopup(popup_e526602c36a04b3191df1347ffb5ba0b)
            ;

            
        
    
        marker_04af7bc358d749eda3c13b97b5237f38.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_94bb166bc99e494ebc021c62c13ab673 = L.marker(
            [37.5308961, 126.646952],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_58956e668d644bf59c6c993e8e03bb69 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_94bb166bc99e494ebc021c62c13ab673.setIcon(icon_58956e668d644bf59c6c993e8e03bb69);
            
    
            var popup_4ca61805512f491ab06fe9e3bc44ad75 = L.popup({maxWidth: '100%'
            
            });

            
                var html_0d624b532270408ab94dd5ecb070a932 = $(`<div id="html_0d624b532270408ab94dd5ecb070a932" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>청라종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-583-0365<br>            <strong>- 주소 :</strong> 인천광역시 서구 청라커낼로 252, c동 118, 119호 (경서동)<br></div>`)[0];
                popup_4ca61805512f491ab06fe9e3bc44ad75.setContent(html_0d624b532270408ab94dd5ecb070a932);
            

            marker_94bb166bc99e494ebc021c62c13ab673.bindPopup(popup_4ca61805512f491ab06fe9e3bc44ad75)
            ;

            
        
    
        marker_94bb166bc99e494ebc021c62c13ab673.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_071f66a5d4264032ad299b73397226d0 = L.marker(
            [37.5366638, 126.653453],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_054a68cd24b840bd92d0d8c8fd87fccf = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_071f66a5d4264032ad299b73397226d0.setIcon(icon_054a68cd24b840bd92d0d8c8fd87fccf);
            
    
            var popup_ca1e6ab4937c42aaaef0b5d0b8226a22 = L.popup({maxWidth: '100%'
            
            });

            
                var html_b3f3eb513b8e41de91696e57bc213f66 = $(`<div id="html_b3f3eb513b8e41de91696e57bc213f66" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>청라라임동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-563-1900<br>            <strong>- 주소 :</strong> 인천광역시 서구 청라라임로 102, 102, 103,104호 (연희동)<br></div>`)[0];
                popup_ca1e6ab4937c42aaaef0b5d0b8226a22.setContent(html_b3f3eb513b8e41de91696e57bc213f66);
            

            marker_071f66a5d4264032ad299b73397226d0.bindPopup(popup_ca1e6ab4937c42aaaef0b5d0b8226a22)
            ;

            
        
    
        marker_071f66a5d4264032ad299b73397226d0.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_6059904e92da41bcb870a13ded3011fd = L.marker(
            [37.5939863, 126.69642900000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b1d050b0096f4dc48d748af497328260 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_6059904e92da41bcb870a13ded3011fd.setIcon(icon_b1d050b0096f4dc48d748af497328260);
            
    
            var popup_832ed9566c96455da6ba77f8d4097ed2 = L.popup({maxWidth: '100%'
            
            });

            
                var html_627c8fdfd47544ea962a35645e1455b0 = $(`<div id="html_627c8fdfd47544ea962a35645e1455b0" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>메이플동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-561-7508<br>            <strong>- 주소 :</strong> 인천광역시 서구 원당대로 853, 1층 102, 103호 (원당동, 삼정프라자)<br></div>`)[0];
                popup_832ed9566c96455da6ba77f8d4097ed2.setContent(html_627c8fdfd47544ea962a35645e1455b0);
            

            marker_6059904e92da41bcb870a13ded3011fd.bindPopup(popup_832ed9566c96455da6ba77f8d4097ed2)
            ;

            
        
    
        marker_6059904e92da41bcb870a13ded3011fd.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_9eba3c3d449240f0831fd5f5e39a7c95 = L.marker(
            [37.6028585, 126.65629299999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b429f211f0b34d509e58e57e34a16058 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_9eba3c3d449240f0831fd5f5e39a7c95.setIcon(icon_b429f211f0b34d509e58e57e34a16058);
            
    
            var popup_4b7d476daede4225828eb3be500446e2 = L.popup({maxWidth: '100%'
            
            });

            
                var html_eb6e510062fa45e9bbec68751088b2aa = $(`<div id="html_eb6e510062fa45e9bbec68751088b2aa" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>온누리 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-567-2575<br>            <strong>- 주소 :</strong> 인천광역시 서구 완정로 182 (마전동)<br></div>`)[0];
                popup_4b7d476daede4225828eb3be500446e2.setContent(html_eb6e510062fa45e9bbec68751088b2aa);
            

            marker_9eba3c3d449240f0831fd5f5e39a7c95.bindPopup(popup_4b7d476daede4225828eb3be500446e2)
            ;

            
        
    
        marker_9eba3c3d449240f0831fd5f5e39a7c95.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a74b004bc4644f8795ad5bc8a02e9c90 = L.marker(
            [37.5932982, 126.674986],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_f60377908c7b4ab4839d96c914a88112 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a74b004bc4644f8795ad5bc8a02e9c90.setIcon(icon_f60377908c7b4ab4839d96c914a88112);
            
    
            var popup_1d639b0aade24772a9174819d557c0b8 = L.popup({maxWidth: '100%'
            
            });

            
                var html_9a05c3276f69451ca287b95873d9e1e4 = $(`<div id="html_9a05c3276f69451ca287b95873d9e1e4" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>정이룸 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-564-7556<br>            <strong>- 주소 :</strong> 인천광역시 서구 원당대로 664, 102호 (당하동, 창신프라자)<br></div>`)[0];
                popup_1d639b0aade24772a9174819d557c0b8.setContent(html_9a05c3276f69451ca287b95873d9e1e4);
            

            marker_a74b004bc4644f8795ad5bc8a02e9c90.bindPopup(popup_1d639b0aade24772a9174819d557c0b8)
            ;

            
        
    
        marker_a74b004bc4644f8795ad5bc8a02e9c90.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_da1548d30c8d436d89fb51dd1e2f79ea = L.marker(
            [37.536716299999995, 126.64091699999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_6f53113074c04849ab73bc0e04cd2b99 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_da1548d30c8d436d89fb51dd1e2f79ea.setIcon(icon_6f53113074c04849ab73bc0e04cd2b99);
            
    
            var popup_8ea448834d35432889964d46a125e0c8 = L.popup({maxWidth: '100%'
            
            });

            
                var html_408047ffe3c94bb9a8f1147f99ebfd84 = $(`<div id="html_408047ffe3c94bb9a8f1147f99ebfd84" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>청라 루비 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-568-0922<br>            <strong>- 주소 :</strong> 인천광역시 서구 청라루비로134번길 6-4 (경서동)<br></div>`)[0];
                popup_8ea448834d35432889964d46a125e0c8.setContent(html_408047ffe3c94bb9a8f1147f99ebfd84);
            

            marker_da1548d30c8d436d89fb51dd1e2f79ea.bindPopup(popup_8ea448834d35432889964d46a125e0c8)
            ;

            
        
    
        marker_da1548d30c8d436d89fb51dd1e2f79ea.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_7b049dd962d946d0a22c94526c437423 = L.marker(
            [37.5940209, 126.67242399999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_5cf0a71f414b4064849eb3c8a51bd253 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_7b049dd962d946d0a22c94526c437423.setIcon(icon_5cf0a71f414b4064849eb3c8a51bd253);
            
    
            var popup_8a3263718fdb49e69de0531123d9e55c = L.popup({maxWidth: '100%'
            
            });

            
                var html_cc291216d104478c94ed6546369fc024 = $(`<div id="html_cc291216d104478c94ed6546369fc024" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>검단종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-563-8579<br>            <strong>- 주소 :</strong> 인천광역시 서구 완정로7번길 1, 1층 (마전동)<br></div>`)[0];
                popup_8a3263718fdb49e69de0531123d9e55c.setContent(html_cc291216d104478c94ed6546369fc024);
            

            marker_7b049dd962d946d0a22c94526c437423.bindPopup(popup_8a3263718fdb49e69de0531123d9e55c)
            ;

            
        
    
        marker_7b049dd962d946d0a22c94526c437423.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_6a6310bac954464383b3f6567ba13f28 = L.marker(
            [37.5184555, 126.67258700000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_c13ec9958fbc444c9987d5a73b43fd49 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_6a6310bac954464383b3f6567ba13f28.setIcon(icon_c13ec9958fbc444c9987d5a73b43fd49);
            
    
            var popup_7cf35a0e33ef41a3acaf7512c2297bc9 = L.popup({maxWidth: '100%'
            
            });

            
                var html_a7f2594d39b94c6097899b631ca5e25e = $(`<div id="html_a7f2594d39b94c6097899b631ca5e25e" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>길동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-578-5119<br>            <strong>- 주소 :</strong> 인천광역시 서구 가정로 375, 2층 201호 (신현동, 금강아미움)<br></div>`)[0];
                popup_7cf35a0e33ef41a3acaf7512c2297bc9.setContent(html_a7f2594d39b94c6097899b631ca5e25e);
            

            marker_6a6310bac954464383b3f6567ba13f28.bindPopup(popup_7cf35a0e33ef41a3acaf7512c2297bc9)
            ;

            
        
    
        marker_6a6310bac954464383b3f6567ba13f28.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_434e9711ee7f41a2baa7f305b879c210 = L.marker(
            [37.5325119, 126.644953],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_896316462f1d45c1b002fb4e18cd5479 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_434e9711ee7f41a2baa7f305b879c210.setIcon(icon_896316462f1d45c1b002fb4e18cd5479);
            
    
            var popup_205c2774bcc744ecb150f91a10130d79 = L.popup({maxWidth: '100%'
            
            });

            
                var html_79d55904f39e4eeab29b5781fdc85c0e = $(`<div id="html_79d55904f39e4eeab29b5781fdc85c0e" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>J동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-566-7582<br>            <strong>- 주소 :</strong> 인천광역시 서구 청라커낼로 270, 커낼힐스빌 (청라동)<br></div>`)[0];
                popup_205c2774bcc744ecb150f91a10130d79.setContent(html_79d55904f39e4eeab29b5781fdc85c0e);
            

            marker_434e9711ee7f41a2baa7f305b879c210.bindPopup(popup_205c2774bcc744ecb150f91a10130d79)
            ;

            
        
    
        marker_434e9711ee7f41a2baa7f305b879c210.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_2f68e30a497647068cd2bc5d05d22329 = L.marker(
            [37.533845899999996, 126.639199],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_8e5fa01b971a4fc7a99f39450f70dfa4 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_2f68e30a497647068cd2bc5d05d22329.setIcon(icon_8e5fa01b971a4fc7a99f39450f70dfa4);
            
    
            var popup_047dbb40a5ad44dd80da16b5f7dc7c92 = L.popup({maxWidth: '100%'
            
            });

            
                var html_888017e5a9fc41f4ab66660adfcc14ee = $(`<div id="html_888017e5a9fc41f4ab66660adfcc14ee" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>동물에 반하다 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-713-8275<br>            <strong>- 주소 :</strong> 인천광역시 서구 크리스탈로102번길 22, 101,102호 (청라동)<br></div>`)[0];
                popup_047dbb40a5ad44dd80da16b5f7dc7c92.setContent(html_888017e5a9fc41f4ab66660adfcc14ee);
            

            marker_2f68e30a497647068cd2bc5d05d22329.bindPopup(popup_047dbb40a5ad44dd80da16b5f7dc7c92)
            ;

            
        
    
        marker_2f68e30a497647068cd2bc5d05d22329.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_269e9dc39c4c42ada2695d7de9401e07 = L.marker(
            [37.497601200000005, 126.67071000000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_7e050a7698cf41bb83153f40973ad4c1 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_269e9dc39c4c42ada2695d7de9401e07.setIcon(icon_7e050a7698cf41bb83153f40973ad4c1);
            
    
            var popup_4c770469bd714a628b2443e95afbf571 = L.popup({maxWidth: '100%'
            
            });

            
                var html_255eaa664da94aeb95e4482704a07a16 = $(`<div id="html_255eaa664da94aeb95e4482704a07a16" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>쿨펫동물병원(가좌점)</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-576-0045<br>            <strong>- 주소 :</strong> 인천광역시 서구 가정로151번길 11 (가좌동)<br></div>`)[0];
                popup_4c770469bd714a628b2443e95afbf571.setContent(html_255eaa664da94aeb95e4482704a07a16);
            

            marker_269e9dc39c4c42ada2695d7de9401e07.bindPopup(popup_4c770469bd714a628b2443e95afbf571)
            ;

            
        
    
        marker_269e9dc39c4c42ada2695d7de9401e07.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_b5c9c364fff944de8843ec116620c9c3 = L.marker(
            [37.531052200000005, 126.65401100000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_97b69aec6035482fa650ef3024d15353 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_b5c9c364fff944de8843ec116620c9c3.setIcon(icon_97b69aec6035482fa650ef3024d15353);
            
    
            var popup_bb12632d80d44f67be68dfbfb5fda9d1 = L.popup({maxWidth: '100%'
            
            });

            
                var html_d9bcb440fbae4a8cb73b7824f51820d9 = $(`<div id="html_d9bcb440fbae4a8cb73b7824f51820d9" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>하얀기린 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-564-3575<br>            <strong>- 주소 :</strong> 인천광역시 서구 청라라임로 40, 103호 (연희동, 청라골드클래스 커낼웨이)<br></div>`)[0];
                popup_bb12632d80d44f67be68dfbfb5fda9d1.setContent(html_d9bcb440fbae4a8cb73b7824f51820d9);
            

            marker_b5c9c364fff944de8843ec116620c9c3.bindPopup(popup_bb12632d80d44f67be68dfbfb5fda9d1)
            ;

            
        
    
        marker_b5c9c364fff944de8843ec116620c9c3.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_34d1f3e3ff27450d86c3aeae3912315b = L.marker(
            [37.5309008, 126.65153400000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_c33749f3bc49484fa676045c6da94940 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_34d1f3e3ff27450d86c3aeae3912315b.setIcon(icon_c33749f3bc49484fa676045c6da94940);
            
    
            var popup_b4a533daf7f846af83206633f453d2eb = L.popup({maxWidth: '100%'
            
            });

            
                var html_070c531367ae445788e17dd4e8842bf6 = $(`<div id="html_070c531367ae445788e17dd4e8842bf6" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>청라공감동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-563-0094<br>            <strong>- 주소 :</strong> 인천광역시 서구 중봉대로586번길 22, 128~131호 (연희동, 청라 풍림 엑슬루타워)<br></div>`)[0];
                popup_b4a533daf7f846af83206633f453d2eb.setContent(html_070c531367ae445788e17dd4e8842bf6);
            

            marker_34d1f3e3ff27450d86c3aeae3912315b.bindPopup(popup_b4a533daf7f846af83206633f453d2eb)
            ;

            
        
    
        marker_34d1f3e3ff27450d86c3aeae3912315b.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_64deaf9435e042dbb3bf6b380709d82d = L.marker(
            [37.4887843, 126.685301],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ea7e9e17969b41a0918c8cb93fd41476 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_64deaf9435e042dbb3bf6b380709d82d.setIcon(icon_ea7e9e17969b41a0918c8cb93fd41476);
            
    
            var popup_5d2944c1a91d4fba8be8695c261de635 = L.popup({maxWidth: '100%'
            
            });

            
                var html_b166278d4df74090a2655cff04a0cae5 = $(`<div id="html_b166278d4df74090a2655cff04a0cae5" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>토닥토닥동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-574-5757<br>            <strong>- 주소 :</strong> 인천광역시 서구 여우재로 119, 202호 (가좌동, 인천가좌두산위브트레지움 2단지)<br></div>`)[0];
                popup_5d2944c1a91d4fba8be8695c261de635.setContent(html_b166278d4df74090a2655cff04a0cae5);
            

            marker_64deaf9435e042dbb3bf6b380709d82d.bindPopup(popup_5d2944c1a91d4fba8be8695c261de635)
            ;

            
        
    
        marker_64deaf9435e042dbb3bf6b380709d82d.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a241b733232b4935afd9997a4685cb95 = L.marker(
            [37.49947, 126.672059],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_d263dedcc2bf4fe5897dea00d95e6d68 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a241b733232b4935afd9997a4685cb95.setIcon(icon_d263dedcc2bf4fe5897dea00d95e6d68);
            
    
            var popup_20cbe433e1944a259b82a63d3659b7c3 = L.popup({maxWidth: '100%'
            
            });

            
                var html_877a6c27130a4a2783bf56bc8145889c = $(`<div id="html_877a6c27130a4a2783bf56bc8145889c" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>삼성종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-584-0075<br>            <strong>- 주소 :</strong> 인천광역시 서구 건지로 269 (석남동)<br></div>`)[0];
                popup_20cbe433e1944a259b82a63d3659b7c3.setContent(html_877a6c27130a4a2783bf56bc8145889c);
            

            marker_a241b733232b4935afd9997a4685cb95.bindPopup(popup_20cbe433e1944a259b82a63d3659b7c3)
            ;

            
        
    
        marker_a241b733232b4935afd9997a4685cb95.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_55bf19147cb44778aac458b8929172cd = L.marker(
            [37.526475299999994, 126.669712],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_feaadda8a2d64430b791ca148859c896 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_55bf19147cb44778aac458b8929172cd.setIcon(icon_feaadda8a2d64430b791ca148859c896);
            
    
            var popup_1aa1eb5d5108441eb3d965bd0e1fbc47 = L.popup({maxWidth: '100%'
            
            });

            
                var html_f72ca2b5f452404fbe08abb6edd21d0d = $(`<div id="html_f72ca2b5f452404fbe08abb6edd21d0d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>루원하이동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-564-8275<br>            <strong>- 주소 :</strong> 인천광역시 서구 염곡로 468, 드림타워 103호 (가정동)<br></div>`)[0];
                popup_1aa1eb5d5108441eb3d965bd0e1fbc47.setContent(html_f72ca2b5f452404fbe08abb6edd21d0d);
            

            marker_55bf19147cb44778aac458b8929172cd.bindPopup(popup_1aa1eb5d5108441eb3d965bd0e1fbc47)
            ;

            
        
    
        marker_55bf19147cb44778aac458b8929172cd.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_63977b0347ed487d85eb5e199adf61ee = L.marker(
            [37.5293091, 126.664993],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_6e54424f772e4892a32a1fc43eba92c5 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_63977b0347ed487d85eb5e199adf61ee.setIcon(icon_6e54424f772e4892a32a1fc43eba92c5);
            
    
            var popup_b49784015e4b4b3e93555179cf8ca690 = L.popup({maxWidth: '100%'
            
            });

            
                var html_b901322f824c4e3187d44cc710015d36 = $(`<div id="html_b901322f824c4e3187d44cc710015d36" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>쪼꼬동물메디컬센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-565-2943<br>            <strong>- 주소 :</strong> 인천광역시 서구 청중로478번안길 4, 2층 (가정동)<br></div>`)[0];
                popup_b49784015e4b4b3e93555179cf8ca690.setContent(html_b901322f824c4e3187d44cc710015d36);
            

            marker_63977b0347ed487d85eb5e199adf61ee.bindPopup(popup_b49784015e4b4b3e93555179cf8ca690)
            ;

            
        
    
        marker_63977b0347ed487d85eb5e199adf61ee.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_2b4462cc3e904953905b6b899a4eced3 = L.marker(
            [37.5423722, 126.677426],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_904bb15c074244ac98ab0c08333a953a = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_2b4462cc3e904953905b6b899a4eced3.setIcon(icon_904bb15c074244ac98ab0c08333a953a);
            
    
            var popup_3430eaadf900403fbd71674a38d31124 = L.popup({maxWidth: '100%'
            
            });

            
                var html_f12b43aef6b6428292fba2b7328de5be = $(`<div id="html_f12b43aef6b6428292fba2b7328de5be" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>연희동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-561-4667<br>            <strong>- 주소 :</strong> 인천광역시 서구 탁옥로74번길 16, 113호 (심곡동)<br></div>`)[0];
                popup_3430eaadf900403fbd71674a38d31124.setContent(html_f12b43aef6b6428292fba2b7328de5be);
            

            marker_2b4462cc3e904953905b6b899a4eced3.bindPopup(popup_3430eaadf900403fbd71674a38d31124)
            ;

            
        
    
        marker_2b4462cc3e904953905b6b899a4eced3.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_3b91f8a5d8d1428994fb86b71b403774 = L.marker(
            [37.5320637, 126.64571299999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_0b80ddb776264d839bab0575e223d28b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_3b91f8a5d8d1428994fb86b71b403774.setIcon(icon_0b80ddb776264d839bab0575e223d28b);
            
    
            var popup_d02ccb2dcb6a423699cf513c15ac6178 = L.popup({maxWidth: '100%'
            
            });

            
                var html_80a485e9ae274010a134bda92516b2ad = $(`<div id="html_80a485e9ae274010a134bda92516b2ad" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>정말로동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-567-8119<br>            <strong>- 주소 :</strong> 인천광역시 서구 청라커낼로260번길 11, 진성프라자 110호 (청라동)<br></div>`)[0];
                popup_d02ccb2dcb6a423699cf513c15ac6178.setContent(html_80a485e9ae274010a134bda92516b2ad);
            

            marker_3b91f8a5d8d1428994fb86b71b403774.bindPopup(popup_d02ccb2dcb6a423699cf513c15ac6178)
            ;

            
        
    
        marker_3b91f8a5d8d1428994fb86b71b403774.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e56d754ec1314345ade6d229d8fe5803 = L.marker(
            [37.5665998, 126.680751],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_811b6dbd16bc46a49601ba2d7e58770c = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e56d754ec1314345ade6d229d8fe5803.setIcon(icon_811b6dbd16bc46a49601ba2d7e58770c);
            
    
            var popup_64b553522c5e4bdfbf84edfc88020a72 = L.popup({maxWidth: '100%'
            
            });

            
                var html_73ba2ff6daba41238a8c4ec56138b18a = $(`<div id="html_73ba2ff6daba41238a8c4ec56138b18a" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>이오동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-710-7553<br>            <strong>- 주소 :</strong> 인천광역시 서구 승학로 551, 동곡프라자 108호 (검암동)<br></div>`)[0];
                popup_64b553522c5e4bdfbf84edfc88020a72.setContent(html_73ba2ff6daba41238a8c4ec56138b18a);
            

            marker_e56d754ec1314345ade6d229d8fe5803.bindPopup(popup_64b553522c5e4bdfbf84edfc88020a72)
            ;

            
        
    
        marker_e56d754ec1314345ade6d229d8fe5803.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_339f99c4449e4a3f9479708a853ff485 = L.marker(
            [37.524816799999996, 126.63013600000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ec28eff5209a44d7a46afa7e46624a43 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_339f99c4449e4a3f9479708a853ff485.setIcon(icon_ec28eff5209a44d7a46afa7e46624a43);
            
    
            var popup_4eb7c69554cb40f0b27ce7f098f1ad17 = L.popup({maxWidth: '100%'
            
            });

            
                var html_30de79613bf1476e8bc56bf7e19f4e3e = $(`<div id="html_30de79613bf1476e8bc56bf7e19f4e3e" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>청라호수동물메디컬센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-568-0022<br>            <strong>- 주소 :</strong> 인천광역시 서구 푸른로7번길 2, 청라호수동물메디컬센터 (청라동)<br></div>`)[0];
                popup_4eb7c69554cb40f0b27ce7f098f1ad17.setContent(html_30de79613bf1476e8bc56bf7e19f4e3e);
            

            marker_339f99c4449e4a3f9479708a853ff485.bindPopup(popup_4eb7c69554cb40f0b27ce7f098f1ad17)
            ;

            
        
    
        marker_339f99c4449e4a3f9479708a853ff485.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_f86a147154714916b210bc743b5304a8 = L.marker(
            [37.5113641, 126.67239099999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_14ebac2e63674971936812de36fac0e8 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f86a147154714916b210bc743b5304a8.setIcon(icon_14ebac2e63674971936812de36fac0e8);
            
    
            var popup_e6577dc5844d429b831495da7433f4bf = L.popup({maxWidth: '100%'
            
            });

            
                var html_c904ef85cd0a4878aeaf82ede183b389 = $(`<div id="html_c904ef85cd0a4878aeaf82ede183b389" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>진현우동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-572-7475<br>            <strong>- 주소 :</strong> 인천광역시 서구 가정로 295 (석남동)<br></div>`)[0];
                popup_e6577dc5844d429b831495da7433f4bf.setContent(html_c904ef85cd0a4878aeaf82ede183b389);
            

            marker_f86a147154714916b210bc743b5304a8.bindPopup(popup_e6577dc5844d429b831495da7433f4bf)
            ;

            
        
    
        marker_f86a147154714916b210bc743b5304a8.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_660f33e57e8b4806b2917ff48b92188c = L.marker(
            [37.5322941, 126.647443],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b866a9ce38ff443981d5c38a8820eb1e = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_660f33e57e8b4806b2917ff48b92188c.setIcon(icon_b866a9ce38ff443981d5c38a8820eb1e);
            
    
            var popup_11e3198779cf424487258775cd79685f = L.popup({maxWidth: '100%'
            
            });

            
                var html_f20b1750b4054a0097d53017aef532b3 = $(`<div id="html_f20b1750b4054a0097d53017aef532b3" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>24시 더블유 동물의료센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-565-8270<br>            <strong>- 주소 :</strong> 인천광역시 서구 청라커낼로260번길 27, 청라한신더휴커낼웨이 2층 236~239호 (청라동)<br></div>`)[0];
                popup_11e3198779cf424487258775cd79685f.setContent(html_f20b1750b4054a0097d53017aef532b3);
            

            marker_660f33e57e8b4806b2917ff48b92188c.bindPopup(popup_11e3198779cf424487258775cd79685f)
            ;

            
        
    
        marker_660f33e57e8b4806b2917ff48b92188c.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_18ae458839424488aaca5c80c4d2da65 = L.marker(
            [37.53390039999999, 126.657449],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_30f30b05824e483797ee1129f8e8062e = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_18ae458839424488aaca5c80c4d2da65.setIcon(icon_30f30b05824e483797ee1129f8e8062e);
            
    
            var popup_d1586c68ec53482db20fe2742353364d = L.popup({maxWidth: '100%'
            
            });

            
                var html_a9aeedcfd82b499685d36bac243f6b2d = $(`<div id="html_a9aeedcfd82b499685d36bac243f6b2d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>아이케어 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-564-7600<br>            <strong>- 주소 :</strong> 인천광역시 서구 청라에메랄드로102번길 10, 청라리치아노 1층 103~105호 (청라동)<br></div>`)[0];
                popup_d1586c68ec53482db20fe2742353364d.setContent(html_a9aeedcfd82b499685d36bac243f6b2d);
            

            marker_18ae458839424488aaca5c80c4d2da65.bindPopup(popup_d1586c68ec53482db20fe2742353364d)
            ;

            
        
    
        marker_18ae458839424488aaca5c80c4d2da65.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_7583236d2f3c4485810127afb87a8115 = L.marker(
            [37.5332953, 126.63018500000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_84d748f283c64456831f8c1f6b73751c = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_7583236d2f3c4485810127afb87a8115.setIcon(icon_84d748f283c64456831f8c1f6b73751c);
            
    
            var popup_31711d99bec541298c815720591c48d9 = L.popup({maxWidth: '100%'
            
            });

            
                var html_adc32e1df10c4e8f810dcd03f870e96d = $(`<div id="html_adc32e1df10c4e8f810dcd03f870e96d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>베테랑 동물병원(청라지점)</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-565-1315<br>            <strong>- 주소 :</strong> 인천광역시 서구 청라한내로100번길 8-28, 청라레이크봄 1층 123, 124호 (청라동)<br></div>`)[0];
                popup_31711d99bec541298c815720591c48d9.setContent(html_adc32e1df10c4e8f810dcd03f870e96d);
            

            marker_7583236d2f3c4485810127afb87a8115.bindPopup(popup_31711d99bec541298c815720591c48d9)
            ;

            
        
    
        marker_7583236d2f3c4485810127afb87a8115.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_7cf3ab1fa9d348a2b260f1064553061b = L.marker(
            [37.5245801, 126.629346],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_adb8821d0e2d4cf8b2d8fefe159c102d = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_7cf3ab1fa9d348a2b260f1064553061b.setIcon(icon_adb8821d0e2d4cf8b2d8fefe159c102d);
            
    
            var popup_98d59e6e6b4848c18c73c1613e020197 = L.popup({maxWidth: '100%'
            
            });

            
                var html_bd2bb11d9e7c48b19fb2e7a33b1834b7 = $(`<div id="html_bd2bb11d9e7c48b19fb2e7a33b1834b7" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>행복한산책 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-563-7577<br>            <strong>- 주소 :</strong> 인천광역시 서구 푸른로8번길 7, 1층 (청라동)<br></div>`)[0];
                popup_98d59e6e6b4848c18c73c1613e020197.setContent(html_bd2bb11d9e7c48b19fb2e7a33b1834b7);
            

            marker_7cf3ab1fa9d348a2b260f1064553061b.bindPopup(popup_98d59e6e6b4848c18c73c1613e020197)
            ;

            
        
    
        marker_7cf3ab1fa9d348a2b260f1064553061b.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_1c68f3f798994d4ca67939c223e53c4e = L.marker(
            [37.4948894, 126.488979],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_c4ba85e355334d3f8c32ea26690fab80 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_1c68f3f798994d4ca67939c223e53c4e.setIcon(icon_c4ba85e355334d3f8c32ea26690fab80);
            
    
            var popup_9657fe7ca2514030b985a52490a61156 = L.popup({maxWidth: '100%'
            
            });

            
                var html_dc6e5b0aea104825869ec9e9a612579a = $(`<div id="html_dc6e5b0aea104825869ec9e9a612579a" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>하늘동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-887-8275<br>            <strong>- 주소 :</strong> 인천광역시 중구 영종대로 90 시에로빌오피스텔<br></div>`)[0];
                popup_9657fe7ca2514030b985a52490a61156.setContent(html_dc6e5b0aea104825869ec9e9a612579a);
            

            marker_1c68f3f798994d4ca67939c223e53c4e.bindPopup(popup_9657fe7ca2514030b985a52490a61156)
            ;

            
        
    
        marker_1c68f3f798994d4ca67939c223e53c4e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_1c5a9e3c9763472eb0a6972126ab616d = L.marker(
            [37.4734269, 126.63105800000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_c9eea67ed8c54f94a7fa76fbec5f7799 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_1c5a9e3c9763472eb0a6972126ab616d.setIcon(icon_c9eea67ed8c54f94a7fa76fbec5f7799);
            
    
            var popup_180b26fe1f534872b0b7a0f3c1ae50cf = L.popup({maxWidth: '100%'
            
            });

            
                var html_6797a06bbe234930b07bf1e4ca8a6732 = $(`<div id="html_6797a06bbe234930b07bf1e4ca8a6732" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>한양한방동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-761-6560<br>            <strong>- 주소 :</strong> 인천광역시 중구 우현로90번길 27<br></div>`)[0];
                popup_180b26fe1f534872b0b7a0f3c1ae50cf.setContent(html_6797a06bbe234930b07bf1e4ca8a6732);
            

            marker_1c5a9e3c9763472eb0a6972126ab616d.bindPopup(popup_180b26fe1f534872b0b7a0f3c1ae50cf)
            ;

            
        
    
        marker_1c5a9e3c9763472eb0a6972126ab616d.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_364fe9533735411cb88ee93474815860 = L.marker(
            [37.485400899999995, 126.560151],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_20aefc2e83384d2ead2124037aab1ffa = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_364fe9533735411cb88ee93474815860.setIcon(icon_20aefc2e83384d2ead2124037aab1ffa);
            
    
            var popup_397c7dab40ca4c368acb7f8e942ba7c9 = L.popup({maxWidth: '100%'
            
            });

            
                var html_9f31823f19e6451384d344de2075ef1c = $(`<div id="html_9f31823f19e6451384d344de2075ef1c" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>위드펫동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-751-7502<br>            <strong>- 주소 :</strong> 인천광역시 중구 하늘달빛로64번길 4<br></div>`)[0];
                popup_397c7dab40ca4c368acb7f8e942ba7c9.setContent(html_9f31823f19e6451384d344de2075ef1c);
            

            marker_364fe9533735411cb88ee93474815860.bindPopup(popup_397c7dab40ca4c368acb7f8e942ba7c9)
            ;

            
        
    
        marker_364fe9533735411cb88ee93474815860.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_61e7614dab4f40ac9ff0424be3b5cc39 = L.marker(
            [37.4886583, 126.53331200000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_4bd108362e764dada06e611109b4eaf3 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_61e7614dab4f40ac9ff0424be3b5cc39.setIcon(icon_4bd108362e764dada06e611109b4eaf3);
            
    
            var popup_4954a5ca1d554ab4b05f86a21d689ff2 = L.popup({maxWidth: '100%'
            
            });

            
                var html_4535940cbcb8482fbc3638609a8cb5d6 = $(`<div id="html_4535940cbcb8482fbc3638609a8cb5d6" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>신공항동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-751-4598<br>            <strong>- 주소 :</strong> 인천광역시 중구 운남동로3번길 9<br></div>`)[0];
                popup_4954a5ca1d554ab4b05f86a21d689ff2.setContent(html_4535940cbcb8482fbc3638609a8cb5d6);
            

            marker_61e7614dab4f40ac9ff0424be3b5cc39.bindPopup(popup_4954a5ca1d554ab4b05f86a21d689ff2)
            ;

            
        
    
        marker_61e7614dab4f40ac9ff0424be3b5cc39.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_7546ee0216b54ff1a2fd7ff40d8c7b5d = L.marker(
            [37.4926466, 126.491211],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_810c2b2bcf35456193e21d91fd4779d0 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_7546ee0216b54ff1a2fd7ff40d8c7b5d.setIcon(icon_810c2b2bcf35456193e21d91fd4779d0);
            
    
            var popup_a192d08054a2445d9971ad6c5608730c = L.popup({maxWidth: '100%'
            
            });

            
                var html_5d19a849d10c4452b64f3b11d92b2720 = $(`<div id="html_5d19a849d10c4452b64f3b11d92b2720" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>펫프렌즈동물병원 영종도점</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-752-6709<br>            <strong>- 주소 :</strong> 인천광역시 중구 흰바위로 51 롯데마트 영종도점<br></div>`)[0];
                popup_a192d08054a2445d9971ad6c5608730c.setContent(html_5d19a849d10c4452b64f3b11d92b2720);
            

            marker_7546ee0216b54ff1a2fd7ff40d8c7b5d.bindPopup(popup_a192d08054a2445d9971ad6c5608730c)
            ;

            
        
    
        marker_7546ee0216b54ff1a2fd7ff40d8c7b5d.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_6e9235b4578c4609be4dd8211f24df0e = L.marker(
            [37.488959799999996, 126.56013],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_5d5845b2bee14fd3b52f204b6edd63b5 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_6e9235b4578c4609be4dd8211f24df0e.setIcon(icon_5d5845b2bee14fd3b52f204b6edd63b5);
            
    
            var popup_bb55ee13bf0f4333bcb2c86dfc786ce4 = L.popup({maxWidth: '100%'
            
            });

            
                var html_b0e486366fe24b5d8a10a5a7060bf45c = $(`<div id="html_b0e486366fe24b5d8a10a5a7060bf45c" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>숲속동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-752-4575<br>            <strong>- 주소 :</strong> 인천광역시 중구 자연대로 40<br></div>`)[0];
                popup_bb55ee13bf0f4333bcb2c86dfc786ce4.setContent(html_b0e486366fe24b5d8a10a5a7060bf45c);
            

            marker_6e9235b4578c4609be4dd8211f24df0e.bindPopup(popup_bb55ee13bf0f4333bcb2c86dfc786ce4)
            ;

            
        
    
        marker_6e9235b4578c4609be4dd8211f24df0e.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_f3d7c29213e54c2d8a8f332b616bfda1 = L.marker(
            [37.4718237, 126.628386],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b751a910b72a460192bbf994e94ded8c = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f3d7c29213e54c2d8a8f332b616bfda1.setIcon(icon_b751a910b72a460192bbf994e94ded8c);
            
    
            var popup_e80dc970157f4270bbe3f381185c31b9 = L.popup({maxWidth: '100%'
            
            });

            
                var html_006f5dcbee454535897e7cc9796b2627 = $(`<div id="html_006f5dcbee454535897e7cc9796b2627" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>참동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-772-7533<br>            <strong>- 주소 :</strong> 인천광역시 중구 우현로 51<br></div>`)[0];
                popup_e80dc970157f4270bbe3f381185c31b9.setContent(html_006f5dcbee454535897e7cc9796b2627);
            

            marker_f3d7c29213e54c2d8a8f332b616bfda1.bindPopup(popup_e80dc970157f4270bbe3f381185c31b9)
            ;

            
        
    
        marker_f3d7c29213e54c2d8a8f332b616bfda1.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d99e0cb3bc7d47d7b1514483da201e06 = L.marker(
            [37.4656924, 126.635595],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_3791454780664022b30ef167d550f2bf = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d99e0cb3bc7d47d7b1514483da201e06.setIcon(icon_3791454780664022b30ef167d550f2bf);
            
    
            var popup_979a32fbc1d4490282dbf7597232f06a = L.popup({maxWidth: '100%'
            
            });

            
                var html_c7ad2fbdad364979ba9a94d98ca5a2e9 = $(`<div id="html_c7ad2fbdad364979ba9a94d98ca5a2e9" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>현대동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-885-7578<br>            <strong>- 주소 :</strong> 인천광역시 중구 제물량로 60-1<br></div>`)[0];
                popup_979a32fbc1d4490282dbf7597232f06a.setContent(html_c7ad2fbdad364979ba9a94d98ca5a2e9);
            

            marker_d99e0cb3bc7d47d7b1514483da201e06.bindPopup(popup_979a32fbc1d4490282dbf7597232f06a)
            ;

            
        
    
        marker_d99e0cb3bc7d47d7b1514483da201e06.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_0cc0006795624defa576434a24c390f0 = L.marker(
            [37.471945500000004, 126.629878],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_fdb199e0500a4b21ae5eda7c0210f35e = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_0cc0006795624defa576434a24c390f0.setIcon(icon_fdb199e0500a4b21ae5eda7c0210f35e);
            
    
            var popup_43a35fec37214f81adbe43675bd0fb76 = L.popup({maxWidth: '100%'
            
            });

            
                var html_0a22f4d678a34d5b8b725ca09213af54 = $(`<div id="html_0a22f4d678a34d5b8b725ca09213af54" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>경동동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-765-9988<br>            <strong>- 주소 :</strong> 인천광역시 중구 개항로 66-2<br></div>`)[0];
                popup_43a35fec37214f81adbe43675bd0fb76.setContent(html_0a22f4d678a34d5b8b725ca09213af54);
            

            marker_0cc0006795624defa576434a24c390f0.bindPopup(popup_43a35fec37214f81adbe43675bd0fb76)
            ;

            
        
    
        marker_0cc0006795624defa576434a24c390f0.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_8c1a979e878046ecb8252df81d70ff27 = L.marker(
            [37.4720945, 126.628555],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_5c085861fa374d6f811c3b121a56ac55 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_8c1a979e878046ecb8252df81d70ff27.setIcon(icon_5c085861fa374d6f811c3b121a56ac55);
            
    
            var popup_18d87275a6724d95981c7ee55927eae8 = L.popup({maxWidth: '100%'
            
            });

            
                var html_22fa51f975fb49fb80e3228c9281647d = $(`<div id="html_22fa51f975fb49fb80e3228c9281647d" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>벤지애견</strong><br></div>            <div><strong>- 전화번호 :</strong> 032-772-0354<br>            <strong>- 주소 :</strong> 인천광역시 중구 우현로 55<br></div>`)[0];
                popup_18d87275a6724d95981c7ee55927eae8.setContent(html_22fa51f975fb49fb80e3228c9281647d);
            

            marker_8c1a979e878046ecb8252df81d70ff27.bindPopup(popup_18d87275a6724d95981c7ee55927eae8)
            ;

            
        
    
        marker_8c1a979e878046ecb8252df81d70ff27.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_0fe1db3945634eb8916b0c7fb79500cf = L.marker(
            [37.42449439999999, 126.697818],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_e9d8155699d84a6d8e9c018d01ab5c02 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_0fe1db3945634eb8916b0c7fb79500cf.setIcon(icon_e9d8155699d84a6d8e9c018d01ab5c02);
            
    
            var popup_03935cafc3b24bd1b7cf165df1134ee8 = L.popup({maxWidth: '100%'
            
            });

            
                var html_5c1e6c1f1d454f5290c8a86197239fa4 = $(`<div id="html_5c1e6c1f1d454f5290c8a86197239fa4" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>동물사랑동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 학나래로6번길 34, 민선빌딩 2층 (선학동)<br></div>`)[0];
                popup_03935cafc3b24bd1b7cf165df1134ee8.setContent(html_5c1e6c1f1d454f5290c8a86197239fa4);
            

            marker_0fe1db3945634eb8916b0c7fb79500cf.bindPopup(popup_03935cafc3b24bd1b7cf165df1134ee8)
            ;

            
        
    
        marker_0fe1db3945634eb8916b0c7fb79500cf.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_1259eaae93b04bce93d25b93202b9243 = L.marker(
            [37.407712200000006, 126.67221299999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_2b348a8a806442369f6f20b51034b364 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_1259eaae93b04bce93d25b93202b9243.setIcon(icon_2b348a8a806442369f6f20b51034b364);
            
    
            var popup_4a71f61d947145f38a4a069d4f1b03bd = L.popup({maxWidth: '100%'
            
            });

            
                var html_4b9f1a359fef4c298b9cf0f16bf7f372 = $(`<div id="html_4b9f1a359fef4c298b9cf0f16bf7f372" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>이광수동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 앵고개로 260 (동춘동)<br></div>`)[0];
                popup_4a71f61d947145f38a4a069d4f1b03bd.setContent(html_4b9f1a359fef4c298b9cf0f16bf7f372);
            

            marker_1259eaae93b04bce93d25b93202b9243.bindPopup(popup_4a71f61d947145f38a4a069d4f1b03bd)
            ;

            
        
    
        marker_1259eaae93b04bce93d25b93202b9243.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_5cba5fd15e244b73b7e981ede15bf99a = L.marker(
            [37.4277234, 126.656342],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_1137c041445a4f16978cb5120315b5a5 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_5cba5fd15e244b73b7e981ede15bf99a.setIcon(icon_1137c041445a4f16978cb5120315b5a5);
            
    
            var popup_6313c377ce614cb0b989b08637dd77f5 = L.popup({maxWidth: '100%'
            
            });

            
                var html_4defad5f9d0641028d1abb5f17fa68fd = $(`<div id="html_4defad5f9d0641028d1abb5f17fa68fd" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>아프리카동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 비류대로 194, 1층 (옥련동)<br></div>`)[0];
                popup_6313c377ce614cb0b989b08637dd77f5.setContent(html_4defad5f9d0641028d1abb5f17fa68fd);
            

            marker_5cba5fd15e244b73b7e981ede15bf99a.bindPopup(popup_6313c377ce614cb0b989b08637dd77f5)
            ;

            
        
    
        marker_5cba5fd15e244b73b7e981ede15bf99a.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_15be6fec137b4c4e91f1606a135275a8 = L.marker(
            [37.4260563, 126.656259],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_8cb0409f2d9143d89b10df58490f687c = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_15be6fec137b4c4e91f1606a135275a8.setIcon(icon_8cb0409f2d9143d89b10df58490f687c);
            
    
            var popup_52586324135444039357db6f692bbbb7 = L.popup({maxWidth: '100%'
            
            });

            
                var html_ac30e043ff974bf08814fc864744e725 = $(`<div id="html_ac30e043ff974bf08814fc864744e725" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>송도종합동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 한나루로 185, 청학만신당 1층 101,102호 (옥련동)<br></div>`)[0];
                popup_52586324135444039357db6f692bbbb7.setContent(html_ac30e043ff974bf08814fc864744e725);
            

            marker_15be6fec137b4c4e91f1606a135275a8.bindPopup(popup_52586324135444039357db6f692bbbb7)
            ;

            
        
    
        marker_15be6fec137b4c4e91f1606a135275a8.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_975a3d08846f422795eeb023b681e607 = L.marker(
            [37.4256335, 126.64435300000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_98c208b2b9e142aa90fd992da56def5b = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_975a3d08846f422795eeb023b681e607.setIcon(icon_98c208b2b9e142aa90fd992da56def5b);
            
    
            var popup_494a25bcf9674755bfd776caeb416768 = L.popup({maxWidth: '100%'
            
            });

            
                var html_a523eff780ea416d9f3c633f26467f23 = $(`<div id="html_a523eff780ea416d9f3c633f26467f23" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>노성남 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 독배로 55 (옥련동)<br></div>`)[0];
                popup_494a25bcf9674755bfd776caeb416768.setContent(html_a523eff780ea416d9f3c633f26467f23);
            

            marker_975a3d08846f422795eeb023b681e607.bindPopup(popup_494a25bcf9674755bfd776caeb416768)
            ;

            
        
    
        marker_975a3d08846f422795eeb023b681e607.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_290ba20633614ce08d122fe8d5eabd54 = L.marker(
            [37.3910553, 126.64822099999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ff97349fbe8c42f2b24d121ac2eb60eb = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_290ba20633614ce08d122fe8d5eabd54.setIcon(icon_ff97349fbe8c42f2b24d121ac2eb60eb);
            
    
            var popup_062ea84fb0f94d4fbdaaedb18fea9083 = L.popup({maxWidth: '100%'
            
            });

            
                var html_d767c5ea61e340be9ab7ae3f6ea2d789 = $(`<div id="html_d767c5ea61e340be9ab7ae3f6ea2d789" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>주주동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 해돋이로 107, E동 10,11호 (송도동, 송도더샵퍼스트월드)<br></div>`)[0];
                popup_062ea84fb0f94d4fbdaaedb18fea9083.setContent(html_d767c5ea61e340be9ab7ae3f6ea2d789);
            

            marker_290ba20633614ce08d122fe8d5eabd54.bindPopup(popup_062ea84fb0f94d4fbdaaedb18fea9083)
            ;

            
        
    
        marker_290ba20633614ce08d122fe8d5eabd54.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_3b4b4c5a644a42ad83f5773eae7e4231 = L.marker(
            [37.425264, 126.685456],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_8be5287615ae4def8066f085859d7de2 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_3b4b4c5a644a42ad83f5773eae7e4231.setIcon(icon_8be5287615ae4def8066f085859d7de2);
            
    
            var popup_940aee4a7e31428f971397a572451730 = L.popup({maxWidth: '100%'
            
            });

            
                var html_01cb411e47dc486097455c9e2e7ecba7 = $(`<div id="html_01cb411e47dc486097455c9e2e7ecba7" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>신퍼피클럽 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 함박로 74-1 (연수동)<br></div>`)[0];
                popup_940aee4a7e31428f971397a572451730.setContent(html_01cb411e47dc486097455c9e2e7ecba7);
            

            marker_3b4b4c5a644a42ad83f5773eae7e4231.bindPopup(popup_940aee4a7e31428f971397a572451730)
            ;

            
        
    
        marker_3b4b4c5a644a42ad83f5773eae7e4231.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_5180371cf76047bbb5eb6695ef20aa69 = L.marker(
            [37.404096200000005, 126.68099299999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_606a0c9f67c94628937c71b1b1d5b2bf = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_5180371cf76047bbb5eb6695ef20aa69.setIcon(icon_606a0c9f67c94628937c71b1b1d5b2bf);
            
    
            var popup_da1a0dc5c4ec470aa32e5a9f2b13a192 = L.popup({maxWidth: '100%'
            
            });

            
                var html_adb10578150f47a7acffe06c635952e3 = $(`<div id="html_adb10578150f47a7acffe06c635952e3" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>웰니스클리닉 연수점</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 경원대로 184, 이마트 3층 (동춘동)<br></div>`)[0];
                popup_da1a0dc5c4ec470aa32e5a9f2b13a192.setContent(html_adb10578150f47a7acffe06c635952e3);
            

            marker_5180371cf76047bbb5eb6695ef20aa69.bindPopup(popup_da1a0dc5c4ec470aa32e5a9f2b13a192)
            ;

            
        
    
        marker_5180371cf76047bbb5eb6695ef20aa69.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_31ef7e6a8a93477fb962dfc0fbcf8e89 = L.marker(
            [37.3958432, 126.652422],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_4b12a6c8838447c3bb163fd97a64c070 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_31ef7e6a8a93477fb962dfc0fbcf8e89.setIcon(icon_4b12a6c8838447c3bb163fd97a64c070);
            
    
            var popup_b1465884daf044da8ee1bda18bc9187d = L.popup({maxWidth: '100%'
            
            });

            
                var html_86fe9ff1a28341beab9528ff203cabe5 = $(`<div id="html_86fe9ff1a28341beab9528ff203cabe5" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>프라자 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 신송로 122, 117호 (송도동,송도프라자)<br></div>`)[0];
                popup_b1465884daf044da8ee1bda18bc9187d.setContent(html_86fe9ff1a28341beab9528ff203cabe5);
            

            marker_31ef7e6a8a93477fb962dfc0fbcf8e89.bindPopup(popup_b1465884daf044da8ee1bda18bc9187d)
            ;

            
        
    
        marker_31ef7e6a8a93477fb962dfc0fbcf8e89.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_880f60739d064f8bb82b16847dd7db76 = L.marker(
            [37.3945115, 126.641011],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_506646dbb37f4f1cb49996dbfb4cedf7 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_880f60739d064f8bb82b16847dd7db76.setIcon(icon_506646dbb37f4f1cb49996dbfb4cedf7);
            
    
            var popup_147d90dd496d494a93a17773d3e5738e = L.popup({maxWidth: '100%'
            
            });

            
                var html_4fec415b3daa46688db4dbdf057f4313 = $(`<div id="html_4fec415b3daa46688db4dbdf057f4313" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>Central 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 센트럴로 194, C동 128호 (송도동, 더샵센트럴파크2차상가)<br></div>`)[0];
                popup_147d90dd496d494a93a17773d3e5738e.setContent(html_4fec415b3daa46688db4dbdf057f4313);
            

            marker_880f60739d064f8bb82b16847dd7db76.bindPopup(popup_147d90dd496d494a93a17773d3e5738e)
            ;

            
        
    
        marker_880f60739d064f8bb82b16847dd7db76.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_e04a6f152d0747f0bddcfdf9c1238ac8 = L.marker(
            [37.417041999999995, 126.677029],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_9dc8b36bfb5f4bbd8f2d7012486f7929 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_e04a6f152d0747f0bddcfdf9c1238ac8.setIcon(icon_9dc8b36bfb5f4bbd8f2d7012486f7929);
            
    
            var popup_8c728f6332824f4fb31cb1fcde96b968 = L.popup({maxWidth: '100%'
            
            });

            
                var html_2e32f7d4840943ecb8e2360a9390ba65 = $(`<div id="html_2e32f7d4840943ecb8e2360a9390ba65" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>닥터비 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 먼우금로 217 (청학동, 연수푸르지오4단지)<br></div>`)[0];
                popup_8c728f6332824f4fb31cb1fcde96b968.setContent(html_2e32f7d4840943ecb8e2360a9390ba65);
            

            marker_e04a6f152d0747f0bddcfdf9c1238ac8.bindPopup(popup_8c728f6332824f4fb31cb1fcde96b968)
            ;

            
        
    
        marker_e04a6f152d0747f0bddcfdf9c1238ac8.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_cfad915ac87646e8af4521f75d7841e2 = L.marker(
            [37.376673700000005, 126.65381000000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_bc00880197ea4811a7fde5dccb90026e = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_cfad915ac87646e8af4521f75d7841e2.setIcon(icon_bc00880197ea4811a7fde5dccb90026e);
            
    
            var popup_c7d03dc3f28a421e897ef0114a790ae1 = L.popup({maxWidth: '100%'
            
            });

            
                var html_6c77296da33344299765671e44fa8388 = $(`<div id="html_6c77296da33344299765671e44fa8388" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>송도건국동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 송도문화로28번길 28, 상가 203동 207호 (송도동, 송도글로벌캠퍼스푸르지오)<br></div>`)[0];
                popup_c7d03dc3f28a421e897ef0114a790ae1.setContent(html_6c77296da33344299765671e44fa8388);
            

            marker_cfad915ac87646e8af4521f75d7841e2.bindPopup(popup_c7d03dc3f28a421e897ef0114a790ae1)
            ;

            
        
    
        marker_cfad915ac87646e8af4521f75d7841e2.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_00b03449c6c44faf99baa03f1e1547dd = L.marker(
            [37.3966167, 126.65195600000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ac2eae2c96ff4305827328922070a476 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_00b03449c6c44faf99baa03f1e1547dd.setIcon(icon_ac2eae2c96ff4305827328922070a476);
            
    
            var popup_4ce57f6e7b99412eb21cc16229da3550 = L.popup({maxWidth: '100%'
            
            });

            
                var html_94d0f2adcf9344b1bb52c9fc76c22dc6 = $(`<div id="html_94d0f2adcf9344b1bb52c9fc76c22dc6" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>24시 송도힐 동물메디컬센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 컨벤시아대로 55, 상가동 107호 (송도동, 이안아파트)<br></div>`)[0];
                popup_4ce57f6e7b99412eb21cc16229da3550.setContent(html_94d0f2adcf9344b1bb52c9fc76c22dc6);
            

            marker_00b03449c6c44faf99baa03f1e1547dd.bindPopup(popup_4ce57f6e7b99412eb21cc16229da3550)
            ;

            
        
    
        marker_00b03449c6c44faf99baa03f1e1547dd.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_db371d151cbd47d89880adfedc3b4888 = L.marker(
            [37.4132216, 126.680322],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_fb44e649f02a454a92492d2dfbc4bdd1 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_db371d151cbd47d89880adfedc3b4888.setIcon(icon_fb44e649f02a454a92492d2dfbc4bdd1);
            
    
            var popup_71dce27202bf4b49a267c8dac2614481 = L.popup({maxWidth: '100%'
            
            });

            
                var html_56f10f65a9764f6facbcd5c904bbd5ac = $(`<div id="html_56f10f65a9764f6facbcd5c904bbd5ac" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>따뜻한 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 용담로 145 (연수동)<br></div>`)[0];
                popup_71dce27202bf4b49a267c8dac2614481.setContent(html_56f10f65a9764f6facbcd5c904bbd5ac);
            

            marker_db371d151cbd47d89880adfedc3b4888.bindPopup(popup_71dce27202bf4b49a267c8dac2614481)
            ;

            
        
    
        marker_db371d151cbd47d89880adfedc3b4888.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_d42c7dbb076b40b694b331f6ede4eaff = L.marker(
            [37.414606, 126.675854],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_798774bd660d4333bd5d296749fe33b4 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d42c7dbb076b40b694b331f6ede4eaff.setIcon(icon_798774bd660d4333bd5d296749fe33b4);
            
    
            var popup_b2789b19b35640968253d2b7b34d3a33 = L.popup({maxWidth: '100%'
            
            });

            
                var html_1c513647d04741e6963eb287104c5584 = $(`<div id="html_1c513647d04741e6963eb287104c5584" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>웰 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 먼우금로 189 (청학동, 소망글로벌)<br></div>`)[0];
                popup_b2789b19b35640968253d2b7b34d3a33.setContent(html_1c513647d04741e6963eb287104c5584);
            

            marker_d42c7dbb076b40b694b331f6ede4eaff.bindPopup(popup_b2789b19b35640968253d2b7b34d3a33)
            ;

            
        
    
        marker_d42c7dbb076b40b694b331f6ede4eaff.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_1a78f21749b0400495a4d56e985d341f = L.marker(
            [37.3942154, 126.64737099999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_7c5a5f0be8f94a0389c509b9854b02c3 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_1a78f21749b0400495a4d56e985d341f.setIcon(icon_7c5a5f0be8f94a0389c509b9854b02c3);
            
    
            var popup_7370f6bcd30c4a9aa667444ead531ab9 = L.popup({maxWidth: '100%'
            
            });

            
                var html_2d2a60efb9074766b30b652a1db8370c = $(`<div id="html_2d2a60efb9074766b30b652a1db8370c" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>미라클 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 컨벤시아대로 100, 602동 143, 144호 (송도동, 현대힐스테이트)<br></div>`)[0];
                popup_7370f6bcd30c4a9aa667444ead531ab9.setContent(html_2d2a60efb9074766b30b652a1db8370c);
            

            marker_1a78f21749b0400495a4d56e985d341f.bindPopup(popup_7370f6bcd30c4a9aa667444ead531ab9)
            ;

            
        
    
        marker_1a78f21749b0400495a4d56e985d341f.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_04788a2d9eab4f48b595cc24201dc608 = L.marker(
            [37.3880049, 126.665049],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_e4fc686967924fa8b40e7dc25a8fb693 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_04788a2d9eab4f48b595cc24201dc608.setIcon(icon_e4fc686967924fa8b40e7dc25a8fb693);
            
    
            var popup_ab2750bb6aa34439a202ff12f756f31b = L.popup({maxWidth: '100%'
            
            });

            
                var html_8053496e03a545a8a66d2107d06feeb4 = $(`<div id="html_8053496e03a545a8a66d2107d06feeb4" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>디오 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 송도과학로27번길 55, 상가 A동 216호 (송도동, 롯데캐슬캠퍼스타운)<br></div>`)[0];
                popup_ab2750bb6aa34439a202ff12f756f31b.setContent(html_8053496e03a545a8a66d2107d06feeb4);
            

            marker_04788a2d9eab4f48b595cc24201dc608.bindPopup(popup_ab2750bb6aa34439a202ff12f756f31b)
            ;

            
        
    
        marker_04788a2d9eab4f48b595cc24201dc608.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_06af4ae5274945279ce3acb92220c142 = L.marker(
            [37.4067067, 126.67027399999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_6d21e31e19c042c49d96d600aec353f3 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_06af4ae5274945279ce3acb92220c142.setIcon(icon_6d21e31e19c042c49d96d600aec353f3);
            
    
            var popup_3c218641e14945b7a97f6ad1f6154626 = L.popup({maxWidth: '100%'
            
            });

            
                var html_ce52dd359c494b63863f9ecf3ad17a55 = $(`<div id="html_ce52dd359c494b63863f9ecf3ad17a55" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>드림동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 먼우금로 88, 105호 (동춘동, 상산빌딩)<br></div>`)[0];
                popup_3c218641e14945b7a97f6ad1f6154626.setContent(html_ce52dd359c494b63863f9ecf3ad17a55);
            

            marker_06af4ae5274945279ce3acb92220c142.bindPopup(popup_3c218641e14945b7a97f6ad1f6154626)
            ;

            
        
    
        marker_06af4ae5274945279ce3acb92220c142.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_ccaabc9a9c954cb095de006d6da6e385 = L.marker(
            [37.3945115, 126.641011],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_e7d4cd2b73a64bc29c356d0a3b7ff99f = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_ccaabc9a9c954cb095de006d6da6e385.setIcon(icon_e7d4cd2b73a64bc29c356d0a3b7ff99f);
            
    
            var popup_8719b109e6b5440e9a32c6be6590ee7d = L.popup({maxWidth: '100%'
            
            });

            
                var html_0b09d7f497134e27bcefbdb4da762a93 = $(`<div id="html_0b09d7f497134e27bcefbdb4da762a93" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>ACE동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 센트럴로 194, B동 1층 101호 (송도동, 더샵 센트럴파크2)<br></div>`)[0];
                popup_8719b109e6b5440e9a32c6be6590ee7d.setContent(html_0b09d7f497134e27bcefbdb4da762a93);
            

            marker_ccaabc9a9c954cb095de006d6da6e385.bindPopup(popup_8719b109e6b5440e9a32c6be6590ee7d)
            ;

            
        
    
        marker_ccaabc9a9c954cb095de006d6da6e385.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_33970519235544d697e9a404e7a60341 = L.marker(
            [37.4238477, 126.674899],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_b4c0dda7bd034c10896c1c0265903097 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_33970519235544d697e9a404e7a60341.setIcon(icon_b4c0dda7bd034c10896c1c0265903097);
            
    
            var popup_eb129f1d6b704e43b528828f5ca16de3 = L.popup({maxWidth: '100%'
            
            });

            
                var html_a0f058a7996f4e1284f1d28431185936 = $(`<div id="html_a0f058a7996f4e1284f1d28431185936" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>그루동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 새말로 27, 1층 115호 (연수동, 동남아파트)<br></div>`)[0];
                popup_eb129f1d6b704e43b528828f5ca16de3.setContent(html_a0f058a7996f4e1284f1d28431185936);
            

            marker_33970519235544d697e9a404e7a60341.bindPopup(popup_eb129f1d6b704e43b528828f5ca16de3)
            ;

            
        
    
        marker_33970519235544d697e9a404e7a60341.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_ef7c2207e7224653bd838c34166c5da2 = L.marker(
            [37.3958682, 126.645692],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_4d10bb15a2024dafbfcbd125add98488 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_ef7c2207e7224653bd838c34166c5da2.setIcon(icon_4d10bb15a2024dafbfcbd125add98488);
            
    
            var popup_2c7c3faa40d74501826aa36b72346bfa = L.popup({maxWidth: '100%'
            
            });

            
                var html_a6672e42e31443ada2dc6022015e306c = $(`<div id="html_a6672e42e31443ada2dc6022015e306c" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>베리떼 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 해돋이로 168-7, 103호 (송도동, 레드원프라자)<br></div>`)[0];
                popup_2c7c3faa40d74501826aa36b72346bfa.setContent(html_a6672e42e31443ada2dc6022015e306c);
            

            marker_ef7c2207e7224653bd838c34166c5da2.bindPopup(popup_2c7c3faa40d74501826aa36b72346bfa)
            ;

            
        
    
        marker_ef7c2207e7224653bd838c34166c5da2.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_364b261b0bb64260a1edf45eb9514947 = L.marker(
            [37.388158399999995, 126.634831],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_0791009f598341cc97b0dddb0263ff23 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_364b261b0bb64260a1edf45eb9514947.setIcon(icon_0791009f598341cc97b0dddb0263ff23);
            
    
            var popup_1f5b7e58b0ed4642872f72427ecbeb6f = L.popup({maxWidth: '100%'
            
            });

            
                var html_29aa60b1658944b5924f81807d5490cd = $(`<div id="html_29aa60b1658944b5924f81807d5490cd" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>닥터정 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 컨벤시아대로230번길 42, 송도아라플라자 202호 (송도동)<br></div>`)[0];
                popup_1f5b7e58b0ed4642872f72427ecbeb6f.setContent(html_29aa60b1658944b5924f81807d5490cd);
            

            marker_364b261b0bb64260a1edf45eb9514947.bindPopup(popup_1f5b7e58b0ed4642872f72427ecbeb6f)
            ;

            
        
    
        marker_364b261b0bb64260a1edf45eb9514947.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_2e1c29ea3bdb40e8982afd65e94cb361 = L.marker(
            [37.3663115, 126.63864],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_84b27b93b9cb4c6197c8921958f2375c = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_2e1c29ea3bdb40e8982afd65e94cb361.setIcon(icon_84b27b93b9cb4c6197c8921958f2375c);
            
    
            var popup_182dc19cd8704f2486b7c5c54eb77c8a = L.popup({maxWidth: '100%'
            
            });

            
                var html_af25a0c9bc884344942384f4cecd115c = $(`<div id="html_af25a0c9bc884344942384f4cecd115c" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>인천광역시 야생동물구조관리센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 송도국제대로372번길 21, 자연학습관 (송도동)<br></div>`)[0];
                popup_182dc19cd8704f2486b7c5c54eb77c8a.setContent(html_af25a0c9bc884344942384f4cecd115c);
            

            marker_2e1c29ea3bdb40e8982afd65e94cb361.bindPopup(popup_182dc19cd8704f2486b7c5c54eb77c8a)
            ;

            
        
    
        marker_2e1c29ea3bdb40e8982afd65e94cb361.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_887dcfadfee046d1b77cbd594642bbf9 = L.marker(
            [37.3920785, 126.649899],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_ce826840566e45dab419ddb5e691336e = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_887dcfadfee046d1b77cbd594642bbf9.setIcon(icon_ce826840566e45dab419ddb5e691336e);
            
    
            var popup_ac533299d082427cb65b3fd9df8fcbf2 = L.popup({maxWidth: '100%'
            
            });

            
                var html_06ea827dc3bc4633b408e668128345cd = $(`<div id="html_06ea827dc3bc4633b408e668128345cd" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>아름다운 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 해돋이로 114, 서운프라자 2층 (송도동)<br></div>`)[0];
                popup_ac533299d082427cb65b3fd9df8fcbf2.setContent(html_06ea827dc3bc4633b408e668128345cd);
            

            marker_887dcfadfee046d1b77cbd594642bbf9.bindPopup(popup_ac533299d082427cb65b3fd9df8fcbf2)
            ;

            
        
    
        marker_887dcfadfee046d1b77cbd594642bbf9.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_fccfb90c1d6b4c25ae12661c3a7cb895 = L.marker(
            [37.3966023, 126.64711100000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_60f5c3b0bdc6439cb15f9260553dca07 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_fccfb90c1d6b4c25ae12661c3a7cb895.setIcon(icon_60f5c3b0bdc6439cb15f9260553dca07);
            
    
            var popup_9bae4cdcc69a42eb910925e339c35ad1 = L.popup({maxWidth: '100%'
            
            });

            
                var html_d08fab68f21b45a1bb1c3de33ecae994 = $(`<div id="html_d08fab68f21b45a1bb1c3de33ecae994" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>라파엘 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 신송로 165-19, 2층 201,202호 (송도동)<br></div>`)[0];
                popup_9bae4cdcc69a42eb910925e339c35ad1.setContent(html_d08fab68f21b45a1bb1c3de33ecae994);
            

            marker_fccfb90c1d6b4c25ae12661c3a7cb895.bindPopup(popup_9bae4cdcc69a42eb910925e339c35ad1)
            ;

            
        
    
        marker_fccfb90c1d6b4c25ae12661c3a7cb895.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_90feacd913b74ed2abbb8b1cc8941c2b = L.marker(
            [37.4120877, 126.67751399999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_bdedfffef4b84a869df4be89c37c7371 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_90feacd913b74ed2abbb8b1cc8941c2b.setIcon(icon_bdedfffef4b84a869df4be89c37c7371);
            
    
            var popup_55f3533133de4789b314aa090ad76915 = L.popup({maxWidth: '100%'
            
            });

            
                var html_80913b864a394c4a9f7b1d4e299f3f8c = $(`<div id="html_80913b864a394c4a9f7b1d4e299f3f8c" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>연수동물메디컬센터</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 샘말로7번길 5 (연수동)<br></div>`)[0];
                popup_55f3533133de4789b314aa090ad76915.setContent(html_80913b864a394c4a9f7b1d4e299f3f8c);
            

            marker_90feacd913b74ed2abbb8b1cc8941c2b.bindPopup(popup_55f3533133de4789b314aa090ad76915)
            ;

            
        
    
        marker_90feacd913b74ed2abbb8b1cc8941c2b.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_a9b8575d8a1c4bfc99f31bd5eb7041c5 = L.marker(
            [37.3992657, 126.63703600000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_f82c9493e49d4698ab700db58ca4c087 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_a9b8575d8a1c4bfc99f31bd5eb7041c5.setIcon(icon_f82c9493e49d4698ab700db58ca4c087);
            
    
            var popup_9419c68198eb44a2ac63e47f362be21c = L.popup({maxWidth: '100%'
            
            });

            
                var html_78426255d54648e992e2521e111eb83c = $(`<div id="html_78426255d54648e992e2521e111eb83c" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>포시즌 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 아트센터대로 131, 커낼워크D2 SUMMER 202동 224호 (송도동)<br></div>`)[0];
                popup_9419c68198eb44a2ac63e47f362be21c.setContent(html_78426255d54648e992e2521e111eb83c);
            

            marker_a9b8575d8a1c4bfc99f31bd5eb7041c5.bindPopup(popup_9419c68198eb44a2ac63e47f362be21c)
            ;

            
        
    
        marker_a9b8575d8a1c4bfc99f31bd5eb7041c5.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_53d79dfe65694516b7bd4044c98de2fa = L.marker(
            [37.4186606, 126.67916899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_3bcae4612d104aa09ce95d96137f7c9a = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_53d79dfe65694516b7bd4044c98de2fa.setIcon(icon_3bcae4612d104aa09ce95d96137f7c9a);
            
    
            var popup_5d5ccd46d58f48aabf4309ff64767175 = L.popup({maxWidth: '100%'
            
            });

            
                var html_57550a0b488c49669941ebdad8b720ae = $(`<div id="html_57550a0b488c49669941ebdad8b720ae" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>구피동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 새말로 88, 강현빌딩 102호 (연수동)<br></div>`)[0];
                popup_5d5ccd46d58f48aabf4309ff64767175.setContent(html_57550a0b488c49669941ebdad8b720ae);
            

            marker_53d79dfe65694516b7bd4044c98de2fa.bindPopup(popup_5d5ccd46d58f48aabf4309ff64767175)
            ;

            
        
    
        marker_53d79dfe65694516b7bd4044c98de2fa.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_fbedd95a17664905b6994f7e4438c8bf = L.marker(
            [37.4155182, 126.61936899999999],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_02867674d0f540aa907bf8d4909903e6 = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_fbedd95a17664905b6994f7e4438c8bf.setIcon(icon_02867674d0f540aa907bf8d4909903e6);
            
    
            var popup_8e1b34a61b6a4bf5b1b3469a9e93adda = L.popup({maxWidth: '100%'
            
            });

            
                var html_2c0bf89daea3450f9be7beb00cf6bd73 = $(`<div id="html_2c0bf89daea3450f9be7beb00cf6bd73" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>24시 오케이 동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 랜드마크로 68, 2층 261~265호 (송도동, 랜드마크시티센트럴더샵)<br></div>`)[0];
                popup_8e1b34a61b6a4bf5b1b3469a9e93adda.setContent(html_2c0bf89daea3450f9be7beb00cf6bd73);
            

            marker_fbedd95a17664905b6994f7e4438c8bf.bindPopup(popup_8e1b34a61b6a4bf5b1b3469a9e93adda)
            ;

            
        
    
        marker_fbedd95a17664905b6994f7e4438c8bf.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );
        
    
        var marker_0027429e792547678d2bbeef26cb17b5 = L.marker(
            [37.4177039, 126.65315700000001],
            {
                icon: new L.Icon.Default(),
                }
            ).addTo(marker_cluster_44202f4780704ba0b7dfbb81c0218aed);
        
    

                var icon_17558ac055b249fea1eb7230898660ca = L.AwesomeMarkers.icon({
                    icon: 'glyphicon-heart',
                    iconColor: 'white',
                    markerColor: 'pink',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_0027429e792547678d2bbeef26cb17b5.setIcon(icon_17558ac055b249fea1eb7230898660ca);
            
    
            var popup_eea61bd6028e453c8000c946cd86d526 = L.popup({maxWidth: '100%'
            
            });

            
                var html_7436b09a68df45d99ee18be2553bb68b = $(`<div id="html_7436b09a68df45d99ee18be2553bb68b" style="width: 100.0%; height: 100.0%;"><div style="width:200px;font-size:15px;"><strong>우성동물병원</strong><br></div>            <div><strong>- 전화번호 :</strong> 정보없음<br>            <strong>- 주소 :</strong> 인천광역시 연수구 청량로113번길 32, 2층 (옥련동)<br></div>`)[0];
                popup_eea61bd6028e453c8000c946cd86d526.setContent(html_7436b09a68df45d99ee18be2553bb68b);
            

            marker_0027429e792547678d2bbeef26cb17b5.bindPopup(popup_eea61bd6028e453c8000c946cd86d526)
            ;

            
        
    
        marker_0027429e792547678d2bbeef26cb17b5.bindTooltip(
            `<div>`
            + `click` + `</div>`,
            {"sticky": true}
        );