const region = document.getElementById('region');
const subRegion = document.getElementById('subRegion');
const thisPath = document.getElementById('layer1');


document.querySelector(".GabrielPicolo").onmouseover = function () { getInfo('Rêverie','Gabriel Picolo'); };
document.querySelector(".HarryPotter").onmouseover = function () { getInfo('Rêverie', 'Harry Potter, J.K Rowling') };
document.querySelector(".SoniaDelaunay").onmouseover = function () { getInfo('Rêverie', 'Sonia Delaunay') };
document.querySelector(".firmness").onmouseover = function () { getInfo('Rêverie', 'mon titre') };
document.querySelector(".conscientiousness").onmouseover = function () { getInfo('Rêverie', 'mon titre') };
document.querySelector(".sublimity").onmouseover = function () { getInfo('Rêverie', 'mon titre') };
document.querySelector(".U-turn").onmouseover = function () { getInfo('Mélancolie', 'U-turn (Lili),  AaRON') };
document.querySelector(".IsaureChassériau").onmouseover = function () { getInfo('Mélancolie', 'Isaure Chassériau, Eugène Amaury-Duval') };
document.querySelector(".EternalSunshine").onmouseover = function () { getInfo('Mélancolie', 'Eternal Sunshine of the Spotless Mind') };
document.querySelector(".spirituality").onmouseover = function () { getInfo('Mélancolie', 'mon titre') };
document.querySelector(".imitation").onmouseover = function () { getInfo('Mélancolie', 'mon titre') };
document.querySelector(".MartinParr").onmouseover = function () { getInfo('Paresse', 'Martin Parr') };
document.querySelector(".Lesrigoles").onmouseover = function () { getInfo('Paresse', 'Les rigoles, Brecht Evens') };
document.querySelector(".Friends").onmouseover = function () { getInfo('Paresse', 'Friends (la série), Marta Kauffman et David Crane') };
document.querySelector(".comparativeness").onmouseover = function () { getInfo('Paresse', 'mon titre') };
document.querySelector(".ThérapieTaxi").onmouseover = function () { getInfo('Créativité', 'Thérapie Taxi') };
document.querySelector(".CassandraCalin").onmouseover = function () { getInfo('Créativité', 'Cassandra Calin') };
document.querySelector(".Elmer").onmouseover = function () { getInfo('Créativité', 'Elmer, David McKee') };
document.querySelector(".locality").onmouseover = function () { getInfo('Créativité', 'mon titre') };
document.querySelector(".eventuality").onmouseover = function () { getInfo('Créativité', 'mon titre') };
document.querySelector(".calculation").onmouseover = function () { getInfo('Créativité', 'mon titre') };
document.querySelector(".order").onmouseover = function () { getInfo('Créativité', 'mon titre') };
document.querySelector(".color").onmouseover = function () { getInfo('Créativité', 'mon titre') };
document.querySelector(".weight").onmouseover = function () { getInfo('Créativité', 'mon titre') };
document.querySelector(".size").onmouseover = function () { getInfo('Créativité', 'mon titre') };
document.querySelector(".individuality").onmouseover = function () { getInfo('Créativité', 'mon titre') };
document.querySelector(".Bookworm").onmouseover = function () { getInfo('Optimisme', 'L’étagère Bookworm, Ron Arad') };
document.querySelector(".mirthfulness").onmouseover = function () { getInfo('Optimisme', 'mon titre') };
document.querySelector(".ideality").onmouseover = function () { getInfo('Optimisme', 'mon titre') };
document.querySelector(".constructiveness").onmouseover = function () { getInfo('Optimisme', 'mon titre') };
document.querySelector(".Davidlachapelle").onmouseover = function () { getInfo('Joie', 'David la chapelle, Great Joy for all') };
document.querySelector(".freindship").onmouseover = function () { getInfo('Joie', 'Le fabuleux destin d’Amélie Poulain, Jean-Pierre Jeunet') };
document.querySelector(".MathurinMéheut").onmouseover = function () { getInfo('Joie', 'Mathurin Méheut') };
document.querySelector(".désavoeux").onmouseover = function () { getInfo('Joie', 'Les cartes de désavoeux, Garage Deloffre') };
document.querySelector(".parental-love").onmouseover = function () { getInfo('Joie', 'mon titre') };
document.querySelector(".inhabitiveness").onmouseover = function () { getInfo('Joie', 'mon titre') };
document.querySelector(".Transfert").onmouseover = function () { getInfo('Curiosité', 'Podcast Transfert de Slate.fr') };
document.querySelector(".combativeness").onmouseover = function () { getInfo('Curiosité', 'Le Bauhaus, 1919 - 1936') };
document.querySelector(".Guggenheim").onmouseover = function () { getInfo('Curiosité', 'Les musées Guggenheim (ceux de Bilbao et New York)') };
document.querySelector(".Louvre").onmouseover = function () { getInfo('Curiosité', "Musée du Louvre d'Abu Dhabi") };
document.querySelector(".destructiveness").onmouseover = function () { getInfo('Curiosité', 'mon titre') };
document.querySelector(".alimentiveness").onmouseover = function () { getInfo('Curiosité', 'mon titre') };









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
    subRegion.innerHTML = classname;
    this.onmouseout = function () { region.innerHTML = "Mon univers en références"; subRegion.innerHTML = "" }

}
