
var app=angular.module("Mobilestore",[]);
var iph={
  name:"iphone 7 plus",
    color:"apple red",
    memory:"8GB, 128GB internal storage",
    price:75000,
    image:"img/apple_iphone_7.png",
    isSoldOut:false,
    activeTab:"description"
};
var iph1={
    name:"iphone 7 plus",
    color:"apple red",
    memory:"8GB, 128GB internal storage",
    price:75000,
    image:"img/apple_iphone_7.png",
    isSoldOut:false,
    activeTab:"description"
};
var redme={
    name:"Redme note 4",
    color:"white",
    price:568999,
    image:"img/redme.png",
    isSoldOut:false,
    activeTab:"description"

};
var redme2={
    name:"samsung 4",
    color:"white",
    price:50000,
    image:"img/redme.png",

    isSoldOut:false,


};




app.controller("StoreController",function(){
   this.mobiles=[iph,iph1,redme,redme2];


   this.setActiveTab=function(mobile,tab){
       mobile.activeTab=tab;
   }


});