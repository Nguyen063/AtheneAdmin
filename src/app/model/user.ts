export class Learner{
    TutorInfo=Object({ 
        Name: String,
        Ava: String,
        Direct: String,
        Gender: String,
        DOB: String,
        CCCD: String,
        PhoneNumber: String,
        Exp: String,
        Degree: String,
        Education: String,
        Majoy: String
    });
    LearnerFinding=Object({
    Caphoc: String,
    Subject: String,
    LearnerGender: String,
    Location: String,
    TeachingTime: String,
    Schedule: String,
    Fee: String,
    Other: String
     });
     TutorManage=Object({
        UserID: String,
        CreatedAt: String,
        TotalClass: String,
        ClassID: String,
        Role: String,
         })
    
    constructor(){
        this.TutorInfo.Name="";
        this.TutorInfo.Ava="";
        this.TutorInfo.Direct="";
        this.TutorInfo.Gender="";
        this.TutorInfo.DOB="";
        this.TutorInfo.CCCD="";
        this.TutorInfo.PhoneNumber="";
        this.TutorInfo.Exp="";
        this.TutorInfo.Degree="";
        this.TutorInfo.Education="";
        this.TutorInfo.Majoy="";

        this.LearnerFinding.Caphoc="";
        this.LearnerFinding.LearnerGender="";
        this.LearnerFinding.Subject="";
        this.LearnerFinding.Location="";
        this.LearnerFinding.TeachingTime="";
        this.LearnerFinding.Schedule="";
        this.LearnerFinding.Fee="";
        this.LearnerFinding.Other="";

        this.TutorManage.UserID="";
        this.TutorManage.CreatedAt="";
        this.TutorManage.TotalClass="";
        this.TutorManage.ClassID="";
        this.TutorManage.Role="";

     }
}

export class Tutor{
    LearnerInfo=Object({ 
        Name: String,
        Ava: String,
        Direct: String,
        Gender: String,
        DOB: String,
        CCCD: String,
        PhoneNumber: String});
    TutorFinding=Object({
    Level: String,
    TutorGender: String,
    class: String,
    Subject: String,
    Location: String,
    Education: String,
    TeachingTime: String,
    Schedule: String,
    Request: String, 
    Fee: String,
    Other: String});
        LearnerManage=Object({
           UserID: String,
           CreatedAt: String,
           TotalClass: String,
           ClassID: String,
           Role: String,
            })
    
     constructor( ){
      this.LearnerInfo.Name="";
      this.LearnerInfo.Ava="";
      this.LearnerInfo.Direct="";
      this.LearnerInfo.Gender="";
      this.LearnerInfo.DOB="";
      this.LearnerInfo.CCCD="";
      this.LearnerInfo.PhoneNumber="";
     this.TutorFinding.Level="";
             this.TutorFinding.TutorGender="";
             this.TutorFinding.class="";
             this.TutorFinding.Subject="";
             this.TutorFinding.Location="";
             this.TutorFinding.Education="";
             this.TutorFinding.TeachingTime="";
             this.TutorFinding.Schedule="";
             this.TutorFinding.Request="";
             this.TutorFinding.Fee="";
             this.TutorFinding.Other="";
             this.LearnerManage.UserID="";
             this.LearnerManage.CreatedAt="";
             this.LearnerManage.TotalClass="";
             this.LearnerManage.ClassID="";
             this.LearnerManage.Role="";
     }
}
