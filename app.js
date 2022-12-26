 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase ,ref,set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyC4aDjxrtX6DQ4wtOLwZGa3Rbtx4KI48m4",
   authDomain: "weblive-ba409.firebaseapp.com",
   projectId: "weblive-ba409",
   storageBucket: "weblive-ba409.appspot.com",
   messagingSenderId: "41752623950",
   appId: "1:41752623950:web:2300cdce814c76142a3c1f",
   measurementId: "G-VBPNFNQ89E"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);




 const database = getDatabase();
 
 var inp = document.getElementById("inp");
 

 window.saveValue = function (){
    var obj = {
        task: inp.value,
    };
    console.log(obj);
    obj.id = Math.random().toString().slice(2)
    const taskRef = ref(database, `task/${obj.id}/`);
    set(taskRef,obj);
 };

//  function getData() {
//     var dataList = []
//     const taskRef = ref(database, "tasks/");
//     onchildAdded(taskRef, function (dt){
//     dataList.push(dt.val());
//     console.log(dataList);
//     parent.innerHTML += '<li>${dataList[i].task}</li>'
//     });
//  }
//  getData();
 