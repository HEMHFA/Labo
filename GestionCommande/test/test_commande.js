const Commande = require('../commande');
const Produit = require('../produit');

const assert = require('assert');

describe("Commande",() => {

    describe("constructor",() => {
        let uneCommande = new Commande(1,"02/04/2015");

        it("Test instanciation d'une commande", () =>{
            assert.equal(uneCommande.lignes.size, 0, "Liste de produits : non vide");
        });
    });

    describe("ajouterLigne",() => {
        let uneCom;
        let unProd;

        beforeEach(function () {
            uneCom = new Commande(1,"02/04/2015");
            unProd = new Produit("Batmobile", 10);
        });

        afterEach(function () {
            uneCom.lignes.clear;
        })

        it("Test ajout d'un produit sur ensemble vide", () =>{
            uneCom.ajouterLigne(unProd,1);
            assert.equal(uneCom.lignes.size, 1, "Nombre de produits erroné");
        });
    })
});