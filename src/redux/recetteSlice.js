import { createSlice } from "@reduxjs/toolkit";

const initialState={
    gateauxList:[
        {name:"Gateaux aux chocolat", img:"https://blogs.cotemaison.fr/cuisine-en-scene/files/2017/11/Cake-choco-10-2000x1333.jpg",
        ingredients:[" - 120g de beurre"," - 200g de chocolat noir (ici 52% de cacao)"," - 4 oeufs (gros œuufs)","- 150g de sucre"," - 80g de farine Moule rond 22cm de diamètre "
    ],video:"https://www.youtube.com/embed/6wWKbajKxLw"},
        ,{name:"Gateaux Anniversaire", img:"https://i.ytimg.com/vi/JZm94FqKHUo/maxresdefault.jpg",
        ingredients:["La génoise au chocolat"," - 5 oeufs "," - 145 g de sucre","- 120 g de farine"," - 25 g de cacao amer","- 1/2 cac de levure chimique","La crème intérieur du gateau","- 200 g de mascarpone","- 200 ml de crème liquide 30% Très froide","- 2 cas de sucre glace","- 2 cas de pate a tartiner ( nutella ... )","La crème pour recouvrir le gateau + les rosaces ",
        "- 300 g de mascarpone","- 200 ml de crème liquide 30% Très froide ","- 2 cas de sucre glace","- 2 cas de pate a tartiner ( nutella ... )","Le drip ","- 50 g de chocolat noir patissier","- 100 ml de crème liquide 30%","- 3 paquets de kinder bueno ( ou plus selon la gourmandise )"
    ],video:"https://www.youtube.com/embed/JZm94FqKHUo" },
        {name:"Gateaux aux noisette",img:"https://i.ytimg.com/vi/bVCEdIUYn3Q/maxresdefault.jpg",
        ingredients:["- 125 g de beurre","- 250 g de sucre en poudre","- 4 œufs (dont on séparera le jaune du blanc)","- 250 g de noisettes en poudre","- 180 g de farine","- 15 cl de lait","- 1 sachet de levure chimique"],video:"https://www.youtube.com/embed/bVCEdIUYn3Q"},
        {name:"Gateaux à la pistache",img:"https://i.ytimg.com/vi/C4T-DSUA8d0/maxresdefault.jpg",
        ingredients:["1- 300g de poudre de pistache ( j’ai utilisé 200g de poudre pistache et 100g de poudre d’amande)","2- 170g de sucre"," 3- 5oeufs ","4- 125g de beurre en pommade"," 5- 50g eau de rose (25g pour le gâteau et 25g pour la crème)"," 6- une cuillère a soupe de farine (15g)"," Rour la décoration:","1- un paquet de crème chantilly"," 2- 1 cuillère à café de gélatine en poudre (8g)"," 3- des roses séchées"," 4- 25g d’eau de rose"," 5- quelques gouttes de colorant alimentaire vert "],video:"https://www.youtube.com/embed/C4T-DSUA8d0"},
        {name:"Gateaux aux fraises",img:"https://i.ytimg.com/vi/oDn7LdSWmDI/maxresdefault.jpg",ingredients:["2 œufs"," 200 g de sucre ","60 g de graines ou d'huile d'olive extra vierge ","150 g de yaourt blanc ","250 g de farine + 8 g de levure chimique ","300 gr de fraises ( autres baies) ","Plat de 20 cm", "180 ° C - 1 heure"],video:"https://www.youtube.com/embed/w9da0sXkWHI" }
        ,{name:"Cheesecake",img:"https://1.bp.blogspot.com/-MhvJ1omB81w/XpnKygXwVZI/AAAAAAAAH7Q/TU1WlTvc8fMnXEaybC1fsuhTAJdtOg5egCNcBGAsYHQ/s1600/iStock-1002128330-1152x768%2B%25281%2529.jpg",ingredients:["Pour le gâteau:","180 g des biscuits de votre choix","80 g de beurre fondu","Pour la crème cheesecake:","400 g de fromage type Philadelphia","80 g de sucre glace","150 g de crème liquide entière 35% MG minimum","Jus de 2 citrons et ses zestes","1 feuille de gélatine ( 3 g 150 bloom)" ,"Pour le coulis de citron:","100 ml d'eau","100 ml de jus de citron", "4 càs de sucre","15 g de fécule de mais ( maïzena) "],video:"https://www.youtube.com/embed/hmXdC_ujV-0"}
    ],
    macaronsList:[
        {nom:"Macarons aux chocolat", img:"https://cache.marieclaire.fr/data/photo/w1000_c17/cuisine/i13_ratrap_img1/50109112.jpg",vid:"https://www.youtube.com/embed/4sPm8VNY32o" },
        {nom:"Macarons à la vanille",img:"https://www.confitbanane.com/wp-content/uploads/2014/08/Macarons-vanille-p.jpg", vid:"https://www.youtube.com/embed/lxei9_d0zSs" },
        {nom:"Macarons aux au praliné",img:"https://img.cuisineaz.com/660x660/2016/10/28/i77767-macarons-aux-noisettes.jpg", vid:"https://www.youtube.com/embed/0i5sYY79Puc" },
        {nom:"Macarons à la framboise",img:"https://empreintesucree.fr/wp-content/uploads/2016/10/3-macarons-framboise-recette-patisserie-empreinte-sucree-1.jpg",vid:"https://www.youtube.com/embed/13tA1QyFnls"},
        {nom:"Macarons à la pistache",img:"https://larecette.net/wp-content/uploads/2021/07/iStock-1255755331.jpg" ,vid:"https://www.youtube.com/embed/WYMaxpK6L8c" },
        {nom:"Macarons aux fraises",img:"https://www.recette247.com/wp-content/uploads/2016/11/Macaron-fraise-au-thermomix.jpg" ,vid:"https://www.youtube.com/embed/fjU_8ZyG2YI" }
        
    ],
    hlouList:[
        {nom1:"Baklawa", img:"https://i.pinimg.com/originals/aa/3b/c1/aa3bc1e855006fbab4a04d574c17ccd0.jpg",vid1:"https://www.youtube.com/embed/1NylUXW8a-s",description:"Je vais vous livrer ici une de mes recettes les plus précieuses et les plus secrètes, il s’agit de la recette de la baklava (baqlewa) tunisienne"  },
        {nom1:"Kaak Warka",img:"https://souk-oriental.com/454-thickbox_default/kaak-warka-couronne-a-l-amande-500g.jpg", vid1:"https://www.youtube.com/embed/8G25SLcCl9Y",description:"Je vais vous livrer ici une de mes recettes les plus précieuses et les plus secrètes, il s’agit de la recette du Kaak Warka tunisien" },
        {nom1:"Mignardise",img:"https://i.ytimg.com/vi/Jxc5vLeTUBE/maxresdefault.jpg", vid1:"https://www.youtube.com/embed/Jxc5vLeTUBE",description:"Je vais vous livrer ici une de mes recettes les plus précieuses et les plus secrètes, il s’agit de la recette du Mignardise tunisien" },
        {nom1:"Ghrayba",img:"https://i.ytimg.com/vi/iHlqp1B7wnA/maxresdefault.jpg",vid1:"https://www.youtube.com/embed/eO6ddVHsL_Y",description:"Je vais vous livrer ici une de mes recettes les plus précieuses et les plus secrètes, il s’agit de la recette de la Ghrayba " },
        {nom1:"Bachkoutou",img:"https://i.ytimg.com/vi/jDIyTSyia90/maxresdefault.jpg" ,vid1:"https://www.youtube.com/embed/Jzl_IIHqAwc",description:"Je vais vous livrer ici une de mes recettes les plus précieuses et les plus secrètes, il s’agit de la recette du Bachkoutou tunisien"  },
        {nom1:"Sablé",img:"https://retete-usoare.info/wp-content/uploads/2018/07/1-156.jpg" ,vid1:"https://www.youtube.com/embed/shxxKoTiL18",description:"Je vais vous livrer ici une de mes recettes les plus précieuses et les plus secrètes, il s’agit de la recette du Sablé"  }
        
    ],
    recetteList:[
        {tilte:'Gateaux', img:"https://www.plantafin.fr/-/media/project/upfield/whitelabels/plantafin-fr/assets/recipe/sync-images/5c23c581-b0aa-4ab6-ae0d-d4cc2cb8189b.jpg",underTitle:"Plein des idées de délicieuses recettes de gâteau faciles à réaliser et testées par nos membres ! Réussir vos recettes de gâteau na jamais été aussi simple ! ",description:"gshffhn"},
        {tilte:"Macarons",img:"https://media.tacdn.com/media/attractions-content--1x-1/0b/17/3d/96.jpg",underTitle:"Notre recette de base de macarons comprend un guide étape par étape et des conseils pour que vous puissiez réaliser ces élégants biscuits meringués aux amandes",description:"gshffhn" },
        {tilte:"Hlou Arbi",img:"https://www.marhba.com/images/lifestyle2021/patisserie-tunis.jpg",underTitle:"La pâtisserie Traditions  vous invite à découvrir  la richesse et la diversité de la pâtisserie tunisienne à travers une expérience gustative inoubliable qui ravivera votre palet",description:"gshffhn"}
        ,{tilte:"Cheesecake",img:"https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2014/11/7b084eaf9d7d564dd2667094c3dd1260a5e4d646.jpeg",underTitle:"Une recette infaillible pour les débutants pour réaliser à chaque fois un cheesecake riche, acidulé et onctueux. Découvrez les meilleurs ingrédients, astuces et techniques pour éviter les fissures et le surcuisson.",description:"gshffhn"}
        ,{tilte:"Baklawa",img:"https://i.pinimg.com/originals/c5/07/b1/c507b128f2c72e5fc6a97d90ea4a12d3.jpg",underTitle:"Une recette infaillible pour les débutants pour réaliser à chaque fois la Baklawa riche, acidulé et onctueux. Découvrez les meilleurs ingrédients, astuces et techniques pour éviter les fissures et le surcuisson.",description:"gshffhn"}
    ],
    materielsList:[
        {tilte1:'Moule à manqué', img:"https://www.cuisinstore.com/media/visuels-produits/patisse/moule-manque-emaille-patisse-17516.jpg",description:"Un moule à manqué performant et léger à manipuler",price:"20 Dt"},
        {tilte1:"Grille à pâtisserie",img:"https://www.laboutiquedeschefs.com/media/images/products/w-2400-h-2400-zc-5-grille-patissiere-en-inox-renforcee-3-1608115721.jpg",description:"Top des meilleures grilles à pâtisserie" ,price:"30 Dt"},
        {tilte1:"Four électrique",img:"https://images-na.ssl-images-amazon.com/images/I/61XOcZFunFL._AC_SL1000_.jpg",description:"Top des Fours en inox",price:"100 Dt"}
        ,{tilte1:"Casserole",img:"https://media.but.fr/images_produits/produit-zoom/3458162904655_Q.jpg",description:"Top 3 des batteries de casseroles en INOX",price:"40 Dt"}
        ,{tilte1:"Saladier",img:"https://www.vaisselleenfete.fr/183-thickbox_default/saladier-transparent-26cm.jpg",description:"Pyrex Bol en verre, Haute Résistance",price:"10 Dt"}
        ,{tilte1:"Spatule",img:"https://i.pinimg.com/originals/20/36/c0/2036c015b1958c2d53aea89f3bffdf06.jpg",description:"La spatule est un des ustensiles clefs pour cuisiner",price:"15 Dt"}
        ,{tilte1:"Fouet de cuisine",img:"https://files.meilleurduchef.com/mdc/photo/produit/mfe/fouet-cuisine-20/fouet-cuisine-20-1-main-1300.jpg",description:"Fouet de cuisine en Acier Inoxidable", price:"10 Dt"}
        ,{tilte1:"Balance",img:"https://www.guidecuisine-avis.com/wp-content/uploads/2020/12/81BVfUAedL._AC_SL1500_-1009x1024.jpg",description:"La balance de cuisine est l'accessoire indispensable pour les recettes du quotidien", price:"20 Dt"}
        ,{tilte1:"Fouet électrique",img:"https://www.cdiscount.com/pdt2/2/2/2/1/700x700/AIC0612789951222/rw/decen-batteur-electrique-avec-bol-de-cuisine-en-ac.jpg",description:"Top des fouets électrique en Acier Inoxydable",price:"400 Dt"}
        ,{tilte1:"Tamis à farine",img:"https://cook-shop.fr/14655-large_default/tamis-a-farine.jpg",description:"Tamis à farine en Acier Inoxydable",price:"5 Dt"}
    
    ]  

}
const originalList=initialState.recetteList
const originalList2=initialState.gateauxList
const originalList3=initialState.macaronsList
const originalList4=initialState.hlouList

export const recetteSlice=createSlice({
    name:"recette",
    initialState:{
        ...initialState,
        originalList,
        originalList2,
        originalList3,
        originalList4,
        
},
    reducers:{
        addRecette:(state,action)=>{
            state.recetteList.push(action.payload)
            state.originalList.push(action.payload)
        },
        filterRecette:(state,action)=>{
            state.recetteList=state.originalList.filter(e=>e.tilte.toUpperCase().includes(action.payload.toUpperCase()))
        },
       filterGateau:(state,action)=>{
        state.gateauxList=state.originalList2.filter(e=>e.name.toUpperCase().includes(action.payload.toUpperCase()))
       },
   
    filterMacaron:(state,action)=>{
     state.macaronsList=state.originalList3.filter(e=>e.nom.toUpperCase().includes(action.payload.toUpperCase()))
    
    },
    filterHlou:(state,action)=>{
        state.hlouList=state.originalList4.filter(e=>e.nom1.toUpperCase().includes(action.payload.toUpperCase()))
       
       },
}

})

export const {addRecette,filterRecette,filterGateau,filterMacaron,filterHlou} = recetteSlice.actions
export default recetteSlice.reducer
