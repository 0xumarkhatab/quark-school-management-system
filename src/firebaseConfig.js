import { doc, where,query,getDoc,setDoc,getFirestore ,getDocs, Firestore ,collection} from "firebase/firestore"; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDF0UXgC-LbR4aM3X5zipktXNGIvntuAdI",
    authDomain: "studentms-e9188.firebaseapp.com",
    projectId: "studentms-e9188",
    storageBucket: "studentms-e9188.appspot.com",
    messagingSenderId: "903070029089",
    appId: "1:903070029089:web:6d1ad8e00c9ae601d31a60"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);// Add a new document in collection "user"

  export const db=getFirestore();
    

// export async function updateProposal(p){
//     console.log("Updating proposal",p);
//     await setDoc(doc(db, "Proposals","proposal__"+p.id),p)
//     return true
// }

// export async function UploadProposals(p){
//     proposalsList.map(async (p)=>{
//         await setDoc(doc(db, "Proposals","proposal__"+p.id),p)    
//     })
    
// }

export async function UpdatePerson(person){
    console.log("Updating Person",person);
    await setDoc(doc(db, "User",person.rollnumber),person)
}



export async function verifyTeacher(Teacher,verifier,rejector){
    const q = query(collection(db, "Teachers"));
    const querySnapshot = await getDocs(q);
    let Teachers=[];
    await querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let p=doc.data();
      Teachers.push(p);
    });
    let found=false;
    let theTeacher={};
    if(Teachers.length>0){
     Teachers?.map((item)=>{
        if((item.Identifier==Teacher.Identifier) && (item.password===Teacher.password)){
            found=true;
            theTeacher={...item};

//            return true;

        }
    })
if(found===true){
    verifier(theTeacher);
    return true;
}    
else{
    rejector();
    return false;
}    


}

}

export async function verifyStudent(Student,verifier,rejector){

    const q = query(collection(db, "Students"));
    const querySnapshot = await getDocs(q);
    let Students=[];
    await querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let p=doc.data();
      Students.push(p);

    });
    let found=false;
    let theStudent={};
    if(Students.length>0){
     Students?.map((item)=>{
        if((item.Identifier==Student.Identifier) && (item.password===Student.password)){
            found=true;
            theStudent={...item};

//            return true;

        }
    })
if(found===true){
    verifier(theStudent);
    return true;
}    
else{
    rejector();
    return false;
}    


}

}




