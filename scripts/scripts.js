const region = document.getElementById('region');
const subRegion = document.getElementById('subRegion');
const thisPath = document.getElementById('layer1');


document.querySelector(".GabrielPicolo").onmouseover = function () { getInfo('Rêverie','Gabriel Picolo'); };
document.querySelector(".HarryPotter").onmouseover = function () { getInfo('Rêverie', 'Harry Potter, J.K Rowling') };
document.querySelector(".SoniaDelaunay").onmouseover = function () { getInfo('Rêverie', 'Sonia Delaunay') };
document.querySelector(".firmness").onmouseover = function () { getInfo('Rêverie', 'Fauteuil Terra') };
document.querySelector(".conscientiousness").onmouseover = function () { getInfo('Rêverie', 'Les films du studio Ghibli') };
document.querySelector(".sublimity").onmouseover = function () { getInfo('Rêverie', "Les Machines de l'île ") };
document.querySelector(".U-turn").onmouseover = function () { getInfo('Mélancolie', 'U-turn (Lili),  AaRON') };
document.querySelector(".IsaureChassériau").onmouseover = function () { getInfo('Mélancolie', 'Isaure Chassériau, Eugène Amaury-Duval') };
document.querySelector(".EternalSunshine").onmouseover = function () { getInfo('Mélancolie', 'Eternal Sunshine of the Spotless Mind') };
document.querySelector(".spirituality").onmouseover = function () { getInfo('Mélancolie', "L'irlande") };
document.querySelector(".imitation").onmouseover = function () { getInfo('Mélancolie', 'Andy Goldsworthy') };
document.querySelector(".MartinParr").onmouseover = function () { getInfo('Paresse', 'Martin Parr') };
document.querySelector(".Lesrigoles").onmouseover = function () { getInfo('Paresse', 'Les rigoles, Brecht Evens') };
document.querySelector(".Friends").onmouseover = function () { getInfo('Paresse', 'Friends (la série), Marta Kauffman et David Crane') };
document.querySelector(".comparativeness").onmouseover = function () { getInfo('Paresse', 'Le lac de garde') };
document.querySelector(".ThérapieTaxi").onmouseover = function () { getInfo('Créativité', 'Thérapie Taxi') };
document.querySelector(".CassandraCalin").onmouseover = function () { getInfo('Créativité', 'Cassandra Calin') };
document.querySelector(".Elmer").onmouseover = function () { getInfo('Créativité', 'Elmer, David McKee') };
document.querySelector(".locality").onmouseover = function () { getInfo('Créativité', 'Times Square') };
document.querySelector(".eventuality").onmouseover = function () { getInfo('Créativité', "Musée de l'Orangerie") };
document.querySelector(".calculation").onmouseover = function () { getInfo('Créativité', 'Les Ambassadeurs - Holbein') };
document.querySelector(".order").onmouseover = function () { getInfo('Créativité', 'Les mobiles de Calder') };
document.querySelector(".color").onmouseover = function () { getInfo('Créativité', 'Anna') };
document.querySelector(".weight").onmouseover = function () { getInfo('Créativité', 'Kandinsky') };
document.querySelector(".size").onmouseover = function () { getInfo('Créativité', "L'Institut du monde arabe") };
document.querySelector(".individuality").onmouseover = function () { getInfo('Créativité', 'Chaise Wassily - Breuer') };
document.querySelector(".Bookworm").onmouseover = function () { getInfo('Optimisme', 'L’étagère Bookworm, Ron Arad') };
document.querySelector(".mirthfulness").onmouseover = function () { getInfo('Optimisme', 'A quoi rêvent les étoiles - Manon Fargetton') };
document.querySelector(".ideality").onmouseover = function () { getInfo('Optimisme', 'Chloé') };
document.querySelector(".constructiveness").onmouseover = function () { getInfo('Optimisme', 'APeel - Alkesh Parmar') };
document.querySelector(".Davidlachapelle").onmouseover = function () { getInfo('Joie', 'David la chapelle, Great Joy for all') };
document.querySelector(".freindship").onmouseover = function () { getInfo('Joie', 'Le fabuleux destin d’Amélie Poulain, Jean-Pierre Jeunet') };
document.querySelector(".MathurinMéheut").onmouseover = function () { getInfo('Joie', 'Mathurin Méheut') };
document.querySelector(".désavoeux").onmouseover = function () { getInfo('Joie', 'Les cartes de désavoeux, Garage Deloffre') };
document.querySelector(".parental-love").onmouseover = function () { getInfo('Joie', 'Joan Cornellà') };
document.querySelector(".inhabitiveness").onmouseover = function () { getInfo('Joie', 'Kyan Khojandi') };
document.querySelector(".Transfert").onmouseover = function () { getInfo('Curiosité', 'Podcast Transfert de Slate.fr') };
document.querySelector(".combativeness").onmouseover = function () { getInfo('Curiosité', 'Le Bauhaus, 1919 - 1936') };
document.querySelector(".Guggenheim").onmouseover = function () { getInfo('Curiosité', 'Les musées Guggenheim (ceux de Bilbao et New York)') };
document.querySelector(".Louvre").onmouseover = function () { getInfo('Curiosité', "Musée du Louvre d'Abu Dhabi") };
document.querySelector(".destructiveness").onmouseover = function () { getInfo('Curiosité', 'Venise') };
document.querySelector(".alimentiveness").onmouseover = function () { getInfo('Curiosité', 'Mon voyage à Budapest') };









function getInfo(regionName, classname, pathBrain) {

    //newSvg = document.createElementNS("http://www.w3.org/1999/xhtml", "path");
    //newSvg.setAttribute("d", pathBrain.getAttribute('d'));

    //newSvg.setAttribute('id', "worksss");
    //newSvg.setAttribute('inkscape:connector-curvature', "0");


    //var x = '<path d="' + pathBrain.getAttribute('d') + '"/>';
    //node =  document.createElement("path")
    //console.log(node);

    //thisPath.appendChild(newSvg);

    region.innerHTML = regionName;
    $("#subRegion").html(classname);
    this.onmouseout = function () { region.innerHTML = "&nbsp;"; subRegion.innerHTML = "&nbsp;" }

}




const pSBC = (p, c0, c1, l) => {
    let r, g, b, P, f, t, h, i = parseInt, m = Math.round, a = typeof (c1) == "string";
    if (typeof (p) != "number" || p < -1 || p > 1 || typeof (c0) != "string" || (c0[0] != 'r' && c0[0] != '#') || (c1 && !a)) return null;
    if (!this.pSBCr) this.pSBCr = (d) => {
        let n = d.length, x = {};
        if (n > 9) {
            [r, g, b, a] = d = d.split(","), n = d.length;
            if (n < 3 || n > 4) return null;
            x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4)), x.g = i(g), x.b = i(b), x.a = a ? parseFloat(a) : -1
        } else {
            if (n == 8 || n == 6 || n < 4) return null;
            if (n < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : "");
            d = i(d.slice(1), 16);
            if (n == 9 || n == 5) x.r = d >> 24 & 255, x.g = d >> 16 & 255, x.b = d >> 8 & 255, x.a = m((d & 255) / 0.255) / 1000;
            else x.r = d >> 16, x.g = d >> 8 & 255, x.b = d & 255, x.a = -1
        } return x
    };
    h = c0.length > 9, h = a ? c1.length > 9 ? true : c1 == "c" ? !h : false : h, f = this.pSBCr(c0), P = p < 0, t = c1 && c1 != "c" ? this.pSBCr(c1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }, p = P ? p * -1 : p, P = 1 - p;
    if (!f || !t) return null;
    if (l) r = m(P * f.r + p * t.r), g = m(P * f.g + p * t.g), b = m(P * f.b + p * t.b);
    else r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5), g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5), b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
    a = f.a, t = t.a, f = a >= 0 || t >= 0, a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0;
    if (h) return "rgb" + (f ? "a(" : "(") + r + "," + g + "," + b + (f ? "," + m(a * 1000) / 1000 : "") + ")";
    else return "#" + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2)
}


$(document).ready(function () {
    $("path").click(function () {
        jQuery('div.zoomIn:not(' + $(this).attr('href') +') .close-popup-modal').trigger('click');
        if ($(this).attr('clicked') != 'true') {
            var theColorIs = $(this).css("fill");
            var newcolor = pSBC(0.3, theColorIs)
            $(this).css("fill", newcolor);
            $(this).attr('clicked', true);
        }
    });
    //jQuery('.close-popup-modal').trigger('click');

    //$("body").click(function () {
    //    
    //});
});
