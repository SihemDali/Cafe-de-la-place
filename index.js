let stockList =[];
const stockListAsString = localStorage.getItem("stockList");
stockList = JSON.parse(stockListAsString);
if (!stockList) {
    stockList = [];
}

const formulaire = document.getElementById("form");
const nom = document.getElementById("nom");
const quantite = document.getElementById("quantite_de_produit");
const achat = document.getElementById("prix_achat_ht");
const vente = document.getElementById("prix_vente_ht");
const typeProduit = document.getElementById("type_produit");
const degré = document.getElementById("degré_alcool");
const btnEnregistrer = document.getElementById("save");
const tbody = document.getElementById("colonnes");
const tableau = document.getElementById("liste");


class Produit {
    constructor(nom, quantite, achat, vente, type) {
        this.nom = nom;
        this.quantite = quantite;
        this.achat = achat;
        this.vente = vente;
        this.typeProduit = type;
        this.marge = vente - achat;
        this.degre = degré;
        stockList.push(this);
        this.index = stockList.push(this) - 1;
    }
}

localStorage.setItem("stockList", JSON.stringify(stockList));

btnEnregistrer.addEventListener("mouseover", function () {
    btnEnregistrer.style.backgroundColor = "aqua";
    btnEnregistrer.style.color = "black";
})

btnEnregistrer.addEventListener("mouseout", function () {
    btnEnregistrer.style.backgroundColor = "black";
    btnEnregistrer.style.color = "white";
})
//stockList.forEach(Produit); {
btnEnregistrer.addEventListener("click", function () {
   
        if (nom.value !== "" && quantite.value !== "" && achat.value !== "" && vente.value !== "" && typeProduit.value !== "") {

            const produit = new Produit(
                nom.value,
                quantite.value,
                achat.value,
                vente.value,
                typeProduit.value
            );

            const td1 = document.createElement("td");
            td1.innerText = produit.nom;
            const tr1 = document.createElement("tr");
            tr1.appendChild(td1);
            tbody.appendChild(tr1);

            const td2 = document.createElement("td");
            td2.innerText = produit.quantite;
            tr1.appendChild(td2);
            if (produit.quantite > 5) {
                td2.style.backgroundColor = "aqua";
            }
            else {
                td2.style.backgroundColor = "pink";
            }

            const td3 = document.createElement("td");
            td3.innerText = produit.achat + "€";
            tr1.appendChild(td3);

            const td4 = document.createElement("td");
            td4.innerText = produit.vente + "€";
            tr1.appendChild(td4);

            const A = parseFloat(vente.value * 1 / 10);
            const B = parseFloat(vente.value);
            produit.prixTtc = A + B;
            const td5 = document.createElement("td");
            td5.innerText = produit.prixTtc + "€";
            tr1.appendChild(td5);

            const td6 = document.createElement("td");
            td6.innerText = produit.marge + "€";
            tr1.appendChild(td6);
            const td7 = document.createElement("td");
            if (degré.value !== "") {
                td7.innerText = produit.typeProduit + "(" + degré.value + ")";
            }
            else {
                td7.innerText = produit.typeProduit;
            }
            tr1.appendChild(td7);

            nom.value = "";
            quantite.value = "";
            achat.value = "";
            vente.value = "";
            typeProduit.value = "";
            degré.value = "";

            let td8 = document.createElement("td");

            td8.style.display = "flex";
            td8.style.justifyContent = "space-around";

            const btnIncrementer = document.createElement("button");
            btnIncrementer.innerText = "+";
            td8.appendChild(btnIncrementer);
            const btnDecrementer = document.createElement("button");
            btnDecrementer.innerText = "-";
            td8.appendChild(btnDecrementer);
            tr1.appendChild(td8);

            const btnModifier = document.createElement("button");
            btnModifier.innerText = "/";
            td8.appendChild(btnModifier);
            btnModifier.style.backgroundColor = "blue";

            //stockList.Map(Produit),{
            //return :stockList
            //}
            const stockListAsString = localStorage.getItem("stockList");
            stockList = JSON.parse(stockListAsString);
            if (!stockList) {
                stockList = [];
            }

            const btnSupprimer = document.createElement("button");
            btnSupprimer.innerText = "x";
            btnSupprimer.style.backgroundColor = "red";
            td8.appendChild(btnSupprimer);

            btnIncrementer.addEventListener("click", incrementer)

            function incrementer() {
                td2.innerHTML = parseInt(td2.innerHTML) + 1;
                if (td2.innerHTML > 5) {
                    td2.style.backgroundColor = "aqua";
                }
                else {
                    td2.style.backgroundColor = "pink";
                }
            }

            btnDecrementer.addEventListener("click", decrementer);
            function decrementer() {
                if (parseInt(td2.innerHTML) > 1) {
                    td2.innerHTML = parseInt(td2.innerHTML) - 1;
                    if (td2.innerHTML > 5) {
                        td2.style.backgroundColor = "aqua";
                    }
                    else {
                        td2.style.backgroundColor = "pink";
                    }
                }
            }
            btnSupprimer.addEventListener("click", function () {
                stockList.splice(produit.index, 1);
                tr1.remove();

            });

            btnModifier.addEventListener("click", function () {
                btnEnregistrer.innerText = "MODIFIER LE PRODUIT";
                nom.value = produit.nom;
                quantite.value = produit.quantite;
                achat.value = produit.achat;
                vente.value = produit.vente;
                typeProduit.value = produit.typeProduit;
                degré.value = produit.degre;
                tr1.remove();
                btnEnregistrer.innerText = "AJOUTER LE PRODUIT";
            });
        }

    })
//}


function persister() {

}


// reste à faire:
//local storage
//QR code
















